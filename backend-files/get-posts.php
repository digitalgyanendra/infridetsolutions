<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require_once 'config/database.php';
require_once 'config/auth.php';

$database = new Database();
$conn = $database->getConnection();

if (!$conn) {
    http_response_code(503);
    echo json_encode(["success" => false, "message" => "Service unavailable"]);
    exit;
}

// Check whether the caller is an authenticated admin (without forcing it).
$headers = function_exists('getallheaders') ? getallheaders() : [];
$authHeader = $headers['Authorization'] ?? ($headers['authorization'] ?? '');
$isAdmin = false;
if ($authHeader && stripos($authHeader, 'Bearer ') === 0) {
    $payload = auth_verify_token(trim(substr($authHeader, 7)));
    $isAdmin = $payload && (($payload['role'] ?? '') === 'admin');
}

// Query parameters
$page = isset($_GET['page']) ? max(1, (int)$_GET['page']) : 1;
$limit = isset($_GET['limit']) ? max(1, min(50, (int)$_GET['limit'])) : 10;
$requestedStatus = isset($_GET['status']) ? $_GET['status'] : 'published';
$category = isset($_GET['category']) ? $_GET['category'] : null;
$slug = isset($_GET['slug']) ? $_GET['slug'] : null;

// Whitelist statuses; non-admins are locked to 'published' regardless of input.
$allowedStatuses = ['published', 'draft', 'archived'];
if (!in_array($requestedStatus, $allowedStatuses, true)) {
    $requestedStatus = 'published';
}
$status = $isAdmin ? $requestedStatus : 'published';

$offset = ($page - 1) * $limit;

$where_conditions = [];
$params = [];
$types = "";

if ($slug) {
    $where_conditions[] = "slug = ?";
    $params[] = $slug;
    $types .= "s";
    // Even when fetching by slug, non-admins can only see published content.
    if (!$isAdmin) {
        $where_conditions[] = "status = 'published'";
    }
} else {
    $where_conditions[] = "status = ?";
    $params[] = $status;
    $types .= "s";

    if ($category) {
        $where_conditions[] = "category = ?";
        $params[] = $category;
        $types .= "s";
    }
}

$where_clause = !empty($where_conditions) ? "WHERE " . implode(" AND ", $where_conditions) : "";

if ($slug) {
    $sql = "SELECT id, title, content, excerpt, slug, status, featured_image, author, category, tags, meta_title, meta_description, created_at, updated_at, published_at, view_count FROM blog_posts $where_clause LIMIT 1";
} else {
    $sql = "SELECT id, title, content, excerpt, slug, status, featured_image, author, category, tags, meta_title, meta_description, created_at, updated_at, published_at, view_count FROM blog_posts $where_clause ORDER BY created_at DESC LIMIT $limit OFFSET $offset";
}

$stmt = $conn->prepare($sql);
if (!empty($params)) {
    $stmt->bind_param($types, ...$params);
}
$stmt->execute();
$result = $stmt->get_result();

if ($slug) {
    $post = $result->fetch_assoc();
    if ($post) {
        $update_views = $conn->prepare("UPDATE blog_posts SET view_count = view_count + 1 WHERE id = ?");
        $update_views->bind_param("i", $post['id']);
        $update_views->execute();
        echo json_encode(["success" => true, "post" => $post]);
    } else {
        echo json_encode(["success" => false, "message" => "Post not found"]);
    }
} else {
    $posts = [];
    while ($row = $result->fetch_assoc()) {
        $posts[] = $row;
    }

    $count_sql = "SELECT COUNT(*) as total FROM blog_posts $where_clause";
    $count_stmt = $conn->prepare($count_sql);
    if (!empty($params)) {
        $count_stmt->bind_param($types, ...$params);
    }
    $count_stmt->execute();
    $count_result = $count_stmt->get_result();
    $total = $count_result->fetch_assoc()['total'];

    $totalPages = ceil($total / $limit);

    echo json_encode([
        "success" => true,
        "posts" => $posts,
        "total" => (int)$total,
        "page" => $page,
        "totalPages" => $totalPages
    ]);
}

$conn->close();
?>
