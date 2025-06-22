
<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require_once 'config/database.php';

$database = new Database();
$conn = $database->getConnection();

if (!$conn) {
    echo json_encode(["success" => false, "message" => "Database connection failed"]);
    exit;
}

try {
    // Get total blog posts
    $posts_query = "SELECT COUNT(*) as total FROM blog_posts";
    $posts_result = $conn->query($posts_query);
    $total_posts = $posts_result->fetch_assoc()['total'];

    // Get published posts
    $published_query = "SELECT COUNT(*) as total FROM blog_posts WHERE status = 'published'";
    $published_result = $conn->query($published_query);
    $published_posts = $published_result->fetch_assoc()['total'];

    // Get draft posts
    $draft_query = "SELECT COUNT(*) as total FROM blog_posts WHERE status = 'draft'";
    $draft_result = $conn->query($draft_query);
    $draft_posts = $draft_result->fetch_assoc()['total'];

    // Get total admin users
    $users_query = "SELECT COUNT(*) as total FROM admin_users";
    $users_result = $conn->query($users_query);
    $total_users = $users_result->fetch_assoc()['total'];

    // Get total views
    $views_query = "SELECT SUM(view_count) as total FROM blog_posts";
    $views_result = $conn->query($views_query);
    $total_views = $views_result->fetch_assoc()['total'] ?? 0;

    // Get recent posts
    $recent_posts_query = "SELECT title, created_at, view_count FROM blog_posts ORDER BY created_at DESC LIMIT 5";
    $recent_posts_result = $conn->query($recent_posts_query);
    $recent_posts = [];
    while ($row = $recent_posts_result->fetch_assoc()) {
        $recent_posts[] = $row;
    }

    echo json_encode([
        "success" => true,
        "stats" => [
            "total_posts" => (int)$total_posts,
            "published_posts" => (int)$published_posts,
            "draft_posts" => (int)$draft_posts,
            "total_users" => (int)$total_users,
            "total_views" => (int)$total_views
        ],
        "recent_posts" => $recent_posts
    ]);

} catch(Exception $e) {
    echo json_encode(["success" => false, "message" => "Error fetching dashboard data: " . $e->getMessage()]);
}

$conn->close();
?>
