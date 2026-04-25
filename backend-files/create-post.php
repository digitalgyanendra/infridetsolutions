<?php
require_once 'config/cors.php';
send_cors_headers();
header('Content-Type: application/json');

require_once 'config/database.php';
require_once 'config/auth.php';

auth_require_admin();

$database = new Database();
$conn = $database->getConnection();

if (!$conn) {
    http_response_code(503);
    echo json_encode(["success" => false, "message" => "Service unavailable"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"));
if (!$data) {
    echo json_encode(["success" => false, "message" => "Invalid data"]);
    exit;
}

// Length-bounded inputs to prevent abuse.
$title    = mb_substr(trim((string)($data->title ?? '')), 0, 255);
$content  = mb_substr((string)($data->content ?? ''), 0, 200000);
$excerpt  = mb_substr((string)($data->excerpt ?? ''), 0, 1000);
$slug     = mb_substr((string)($data->slug ?? strtolower(str_replace(' ', '-', $title))), 0, 255);
$status   = in_array($data->status ?? 'draft', ['draft','published','archived'], true) ? $data->status : 'draft';
$category = mb_substr((string)($data->category ?? ''), 0, 100);
$author   = mb_substr((string)($data->author ?? 'Admin'), 0, 100);
$image    = mb_substr((string)($data->featured_image ?? ''), 0, 500);
$mTitle   = mb_substr((string)($data->meta_title ?? $title), 0, 255);
$mDesc    = mb_substr((string)($data->meta_description ?? $excerpt), 0, 1000);

if ($title === '' || $content === '') {
    echo json_encode(["success" => false, "message" => "Title and content required"]);
    exit;
}

if (isset($data->id)) {
    $id = (int)$data->id;
    $stmt = $conn->prepare("UPDATE blog_posts SET title=?, content=?, excerpt=?, slug=?, status=?, category=?, author=?, featured_image=?, meta_title=?, meta_description=?, updated_at=NOW() WHERE id=?");
    $stmt->bind_param("ssssssssssi", $title, $content, $excerpt, $slug, $status, $category, $author, $image, $mTitle, $mDesc, $id);
} else {
    $stmt = $conn->prepare("INSERT INTO blog_posts (title, content, excerpt, slug, status, category, author, featured_image, meta_title, meta_description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssssss", $title, $content, $excerpt, $slug, $status, $category, $author, $image, $mTitle, $mDesc);
}

if ($stmt->execute()) {
    $postId = isset($data->id) ? (int)$data->id : $conn->insert_id;
    echo json_encode(["success" => true, "message" => "Post saved", "id" => $postId]);
} else {
    error_log('[create-post] ' . $stmt->error);
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Error saving post"]);
}

$conn->close();
