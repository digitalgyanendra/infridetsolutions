
<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

require_once 'config/database.php';

$database = new Database();
$conn = $database->getConnection();

// Get query parameters
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 10;
$status = isset($_GET['status']) ? $_GET['status'] : 'published';
$category = isset($_GET['category']) ? $_GET['category'] : null;
$slug = isset($_GET['slug']) ? $_GET['slug'] : null;

$offset = ($page - 1) * $limit;

// Base query
$where_conditions = [];
$params = [];
$types = "";

// If requesting specific post by slug
if ($slug) {
    $where_conditions[] = "slug = ?";
    $params[] = $slug;
    $types .= "s";
} else {
    // Filter by status
    $where_conditions[] = "status = ?";
    $params[] = $status;
    $types .= "s";

    // Filter by category
    if ($category) {
        $where_conditions[] = "category = ?";
        $params[] = $category;
        $types .= "s";
    }
}

$where_clause = !empty($where_conditions) ? "WHERE " . implode(" AND ", $where_conditions) : "";

// If requesting single post by slug
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
    // Return single post
    $post = $result->fetch_assoc();
    if ($post) {
        // Increment view count
        $update_views = $conn->prepare("UPDATE blog_posts SET view_count = view_count + 1 WHERE id = ?");
        $update_views->bind_param("i", $post['id']);
        $update_views->execute();
        
        echo json_encode(["success" => true, "post" => $post]);
    } else {
        echo json_encode(["success" => false, "message" => "Post not found"]);
    }
} else {
    // Return list of posts
    $posts = [];
    while ($row = $result->fetch_assoc()) {
        $posts[] = $row;
    }

    // Get total count for pagination
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
