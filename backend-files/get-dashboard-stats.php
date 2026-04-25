<?php
require_once 'config/cors.php';
send_cors_headers();
header('Content-Type: application/json');

require_once 'config/database.php';
require_once 'config/auth.php';

// SECURITY: Dashboard stats are admin-only.
auth_require_admin();

$database = new Database();
$conn = $database->getConnection();

if (!$conn) {
    http_response_code(503);
    echo json_encode(["success" => false, "message" => "Service unavailable"]);
    exit;
}

try {
    $stats = [
        'total_posts'     => 0,
        'published_posts' => 0,
        'draft_posts'     => 0,
        'total_users'     => 0,
        'total_views'     => 0,
    ];

    if ($r = $conn->query("SELECT COUNT(*) AS t FROM blog_posts")) $stats['total_posts'] = (int)$r->fetch_assoc()['t'];
    if ($r = $conn->query("SELECT COUNT(*) AS t FROM blog_posts WHERE status='published'")) $stats['published_posts'] = (int)$r->fetch_assoc()['t'];
    if ($r = $conn->query("SELECT COUNT(*) AS t FROM blog_posts WHERE status='draft'")) $stats['draft_posts'] = (int)$r->fetch_assoc()['t'];
    if ($r = $conn->query("SELECT COUNT(*) AS t FROM admin_users")) $stats['total_users'] = (int)$r->fetch_assoc()['t'];
    if ($r = $conn->query("SELECT COALESCE(SUM(view_count),0) AS t FROM blog_posts")) $stats['total_views'] = (int)$r->fetch_assoc()['t'];

    $recent_posts = [];
    if ($r = $conn->query("SELECT title, created_at, view_count FROM blog_posts ORDER BY created_at DESC LIMIT 5")) {
        while ($row = $r->fetch_assoc()) $recent_posts[] = $row;
    }

    echo json_encode([
        "success" => true,
        "stats" => $stats,
        "recent_posts" => $recent_posts,
    ]);
} catch (Exception $e) {
    error_log('[get-dashboard-stats] ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Error fetching dashboard data"]);
}

$conn->close();
