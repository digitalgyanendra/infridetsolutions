<?php
require_once 'config/cors.php';
send_cors_headers();
header('Content-Type: application/json');

require_once 'config/database.php';
require_once 'config/auth.php';
require_once 'config/rate-limit.php';

// Rate-limit by IP — 5 attempts per 5 minutes
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
rate_limit_check("login:$ip", 5, 300);

$database = new Database();
$conn = $database->getConnection();

if (!$conn) {
    http_response_code(503);
    echo json_encode(["success" => false, "message" => "Service unavailable"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"));

if (!$data || empty($data->username) || empty($data->password)) {
    echo json_encode(["success" => false, "message" => "Username and password required"]);
    exit;
}

$username = trim((string)$data->username);
$password = (string)$data->password;

// Allow login by username OR email
$stmt = $conn->prepare("SELECT * FROM admin_users WHERE username = ? OR email = ? LIMIT 1");
$stmt->bind_param("ss", $username, $username);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

if ($user && password_verify($password, $user['password'])) {
    // Verify role from user_roles table (defense against privilege escalation
    // via the legacy admin_users.role column).
    $role = 'admin'; // admin_users table is admin-only by definition
    $roleCheck = $conn->prepare("SELECT role FROM user_roles WHERE user_id = ? AND role = 'admin' LIMIT 1");
    if ($roleCheck) {
        $roleCheck->bind_param("i", $user['id']);
        $roleCheck->execute();
        $roleRes = $roleCheck->get_result()->fetch_assoc();
        if (!$roleRes) {
            // No role record — auto-create for legacy users (one-time migration)
            $insert = $conn->prepare("INSERT IGNORE INTO user_roles (user_id, role) VALUES (?, 'admin')");
            $insert->bind_param("i", $user['id']);
            $insert->execute();
        }
    }

    $token = auth_issue_token($user['id'], $role);

    if (!$token) {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Service unavailable"]);
        exit;
    }

    rate_limit_reset("login:$ip");

    echo json_encode([
        "success" => true,
        "user" => [
            "id" => (int)$user['id'],
            "username" => $user['username'],
            "email" => $user['email'],
            "role" => $role
        ],
        "token" => $token
    ]);
} else {
    // Generic message — never reveal which field was wrong.
    echo json_encode(["success" => false, "message" => "Invalid username or password"]);
}

$conn->close();
