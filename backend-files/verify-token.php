<?php
require_once 'config/cors.php';
send_cors_headers();
header('Content-Type: application/json');

require_once 'config/auth.php';

$headers = function_exists('getallheaders') ? getallheaders() : [];
$authHeader = $headers['Authorization'] ?? ($headers['authorization'] ?? '');

if (!$authHeader || stripos($authHeader, 'Bearer ') !== 0) {
    http_response_code(401);
    echo json_encode(["success" => false, "message" => "No token provided"]);
    exit;
}

$token = trim(substr($authHeader, 7));
$payload = auth_verify_token($token);

if (!$payload) {
    http_response_code(401);
    echo json_encode(["success" => false, "message" => "Invalid or expired token"]);
    exit;
}

echo json_encode([
    "success" => true,
    "user" => [
        "id"   => $payload['uid'] ?? null,
        "role" => $payload['role'] ?? null,
    ]
]);
