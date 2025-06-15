
<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once 'config/database.php';

$database = new Database();
$conn = $database->getConnection();

$data = json_decode(file_get_contents("php://input"));

if (!$data || !$data->username || !$data->password) {
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
    // Generate a simple token (in production, use JWT)
    $token = base64_encode($user['id'] . ':' . time());
    
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
    echo json_encode(["success" => false, "message" => "Invalid username or password"]);
}

$conn->close();
?>
