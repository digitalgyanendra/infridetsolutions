
<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$headers = getallheaders();
$authHeader = $headers['Authorization'] ?? '';

if (!$authHeader || !str_starts_with($authHeader, 'Bearer ')) {
    echo json_encode(["success" => false, "message" => "No token provided"]);
    exit;
}

$token = str_replace('Bearer ', '', $authHeader);

// Simple token validation (in production, use proper JWT validation)
$decoded = base64_decode($token);
$parts = explode(':', $decoded);

if (count($parts) === 2) {
    $userId = $parts[0];
    $timestamp = $parts[1];
    
    // Check if token is not older than 24 hours
    if ((time() - $timestamp) < 86400) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "message" => "Token expired"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid token"]);
}
?>
