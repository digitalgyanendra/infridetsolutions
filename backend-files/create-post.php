<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require_once 'config/database.php';
require_once 'config/auth.php';

// Require a verified admin token.
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

$title = $data->title ?? '';
$content = $data->content ?? '';
$excerpt = $data->excerpt ?? '';
$slug = $data->slug ?? strtolower(str_replace(' ', '-', $title));
$status = $data->status ?? 'draft';
$category = $data->category ?? '';
$author = $data->author ?? 'Admin';
$featured_image = $data->featured_image ?? '';
$meta_title = $data->meta_title ?? $title;
$meta_description = $data->meta_description ?? $excerpt;

if (isset($data->id)) {
    $stmt = $conn->prepare("UPDATE blog_posts SET title=?, content=?, excerpt=?, slug=?, status=?, category=?, author=?, featured_image=?, meta_title=?, meta_description=?, updated_at=NOW() WHERE id=?");
    $stmt->bind_param("ssssssssssi", $title, $content, $excerpt, $slug, $status, $category, $author, $featured_image, $meta_title, $meta_description, $data->id);
} else {
    $stmt = $conn->prepare("INSERT INTO blog_posts (title, content, excerpt, slug, status, category, author, featured_image, meta_title, meta_description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssssss", $title, $content, $excerpt, $slug, $status, $category, $author, $featured_image, $meta_title, $meta_description);
}

if ($stmt->execute()) {
    $postId = isset($data->id) ? $data->id : $conn->insert_id;
    echo json_encode(["success" => true, "message" => "Post saved successfully", "id" => $postId]);
} else {
    echo json_encode(["success" => false, "message" => "Error saving post"]);
}

$conn->close();
?>
