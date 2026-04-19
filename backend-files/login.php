<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once 'config/database.php';
require_once 'config/auth.php';

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

$username = $data->username;
$password = $data->password;

$stmt = $conn->prepare("SELECT * FROM admin_users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

if ($user && password_verify($password, $user['password'])) {
    $token = auth_issue_token($user['id'], $user['role'] ?? 'admin');

    if (!$token) {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Service unavailable"]);
        exit;
    }

    echo json_encode([
        "success" => true,
        "user" => [
            "id" => $user['id'],
            "username" => $user['username'],
            "email" => $user['email'],
            "role" => $user['role']
        ],
        "token" => $token
    ]);
} else {
    // Generic message — do not reveal which field was wrong.
    echo json_encode(["success" => false, "message" => "Invalid username or password"]);
}

$conn->close();
?>
