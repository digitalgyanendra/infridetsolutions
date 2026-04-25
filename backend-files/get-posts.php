<?php
require_once 'config/cors.php';
send_cors_headers();
header('Content-Type: application/json');

require_once 'config/database.php';
require_once 'config/auth.php';

$database = new Database();
$conn = $database->getConnection();

if (!$conn) {
    http_response_code(503);
    echo json_encode(["success" => false, "message" => "Service unavailable"]);
    exit;
}

// Optional admin check (no force) — admins can see drafts.
$headers = function_exists('getallheaders') ? getallheaders() : [];
$authHeader = $headers['Authorization'] ?? ($headers['authorization'] ?? '');
$isAdmin = false;
if ($authHeader && stripos($authHeader, 'Bearer ') === 0) {
    $payload = auth_verify_token(trim(substr($authHeader, 7)));
    $isAdmin = $payload && (($payload['role'] ?? '') === 'admin');
}

$page = isset($_GET['page']) ? max(1, (int)$_GET['page']) : 1;
$limit = isset($_GET['limit']) ? max(1, min(50, (int)$_GET['limit'])) : 10;
$requestedStatus = isset($_GET['status']) ? $_GET['status'] : 'published';
$category = isset($_GET['category']) ? $_GET['category'] : null;
$slug = isset($_GET['slug']) ? $_GET['slug'] : null;

$allowedStatuses = ['published', 'draft', 'archived'];
if (!in_array($requestedStatus, $allowedStatuses, true)) $requestedStatus = 'published';
$status = $isAdmin ? $requestedStatus : 'published';
$offset = ($page - 1) * $limit;

$where = [];
$params = [];
$types = "";

if ($slug) {
    $where[] = "slug = ?";
    $params[] = $slug; $types .= "s";
    if (!$isAdmin) $where[] = "status = 'published'";
} else {
    $where[] = "status = ?";
    $params[] = $status; $types .= "s";
    if ($category) {
        $where[] = "category = ?";
        $params[] = $category; $types .= "s";
    }
}
$whereSql = !empty($where) ? "WHERE " . implode(" AND ", $where) : "";

$cols = "id, title, content, excerpt, slug, status, featured_image, author, category, tags, meta_title, meta_description, created_at, updated_at, published_at, view_count";

if ($slug) {
    $sql = "SELECT $cols FROM blog_posts $whereSql LIMIT 1";
} else {
    $sql = "SELECT $cols FROM blog_posts $whereSql ORDER BY created_at DESC LIMIT $limit OFFSET $offset";
}

$stmt = $conn->prepare($sql);
if (!empty($params)) $stmt->bind_param($types, ...$params);
$stmt->execute();
$result = $stmt->get_result();

if ($slug) {
    $post = $result->fetch_assoc();
    if ($post) {
        $u = $conn->prepare("UPDATE blog_posts SET view_count = view_count + 1 WHERE id = ?");
        $u->bind_param("i", $post['id']);
        $u->execute();
        echo json_encode(["success" => true, "post" => $post]);
    } else {
        echo json_encode(["success" => false, "message" => "Post not found"]);
    }
} else {
    $posts = [];
    while ($row = $result->fetch_assoc()) $posts[] = $row;

    $countSql = "SELECT COUNT(*) AS total FROM blog_posts $whereSql";
    $cs = $conn->prepare($countSql);
    if (!empty($params)) $cs->bind_param($types, ...$params);
    $cs->execute();
    $total = (int)$cs->get_result()->fetch_assoc()['total'];

    echo json_encode([
        "success"    => true,
        "posts"      => $posts,
        "total"      => $total,
        "page"       => $page,
        "totalPages" => (int)ceil($total / $limit),
    ]);
}

$conn->close();
