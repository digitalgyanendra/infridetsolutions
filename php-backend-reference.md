
# PHP Backend Implementation Guide

## File Structure
```
/api/
├── config/
│   └── database.php       # Database connection
├── login.php             # Admin login endpoint
├── verify-token.php      # Token verification
├── get-posts.php         # Fetch blog posts
├── create-post.php       # Create blog post
├── get-courses.php       # Fetch courses
├── upload.php           # File upload handler
├── admin-users.php      # Admin user management
└── create-admin.php     # One-time admin creation (delete after use)
```

## Required PHP Files:

### 1. config/database.php
```php
<?php
class Database {
    private $host = "localhost";
    private $username = "rnbjdezz_blog_user";
    private $password = "1Shivd8853$$$$";
    private $database = "rnbjdezz_blog_system";
    private $conn;
    
    public function getConnection() {
        $this->conn = null;
        try {
            $this->conn = new mysqli($this->host, $this->username, $this->password, $this->database);
            $this->conn->set_charset("utf8");
        } catch(Exception $e) {
            echo "Connection error: " . $e->getMessage();
        }
        return $this->conn;
    }
}
?>
```

### 2. login.php
```php
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
```

### 3. verify-token.php
```php
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
```

### 4. get-posts.php
```php
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
$tag = isset($_GET['tag']) ? $_GET['tag'] : null;
$search = isset($_GET['search']) ? $_GET['search'] : null;
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

    // Filter by tag (if you have tags)
    if ($tag) {
        $where_conditions[] = "FIND_IN_SET(?, tags)";
        $params[] = $tag;
        $types .= "s";
    }

    // Search functionality
    if ($search) {
        $where_conditions[] = "(title LIKE ? OR content LIKE ? OR excerpt LIKE ?)";
        $search_term = "%$search%";
        $params[] = $search_term;
        $params[] = $search_term;
        $params[] = $search_term;
        $types .= "sss";
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
```

### 5. create-admin.php (Run once, then delete)
```php
<?php
require_once 'config/database.php';

$database = new Database();
$conn = $database->getConnection();

$username = "admin";
$email = "admin@infridetsolutions.com";
$password = password_hash("admin123", PASSWORD_DEFAULT);

$stmt = $conn->prepare("INSERT INTO admin_users (username, email, password, role) VALUES (?, ?, ?, 'admin')");
$stmt->bind_param("sss", $username, $email, $password);

if ($stmt->execute()) {
    echo "Admin user created successfully!<br>";
    echo "Username: admin<br>";
    echo "Password: admin123<br>";
    echo "<strong>Please delete this file immediately after running!</strong>";
} else {
    echo "Error creating admin user: " . $stmt->error;
}

$conn->close();
?>
```

## Database Schema
Run this in phpMyAdmin:

```sql
CREATE TABLE IF NOT EXISTS admin_users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(150),
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'editor') DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS blog_posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content LONGTEXT NOT NULL,
  excerpt TEXT,
  slug VARCHAR(255) NOT NULL UNIQUE,
  status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
  featured_image VARCHAR(500),
  author VARCHAR(100) DEFAULT 'Admin',
  category VARCHAR(100),
  tags VARCHAR(500),
  meta_title VARCHAR(255),
  meta_description TEXT,
  view_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  published_at TIMESTAMP NULL
);
```

## Implementation Steps:
1. Upload PHP files to your server's /api/ directory
2. Run the SQL schema in phpMyAdmin
3. Access create-admin.php once to create the initial admin user
4. Delete create-admin.php immediately after use
5. Test the blog posts API by visiting: https://infridetsolutions.com/api/get-posts.php
6. Test login functionality with the React frontend

## Security Notes:
- Use proper JWT tokens in production
- Implement rate limiting for login attempts
- Use HTTPS for all API communications
- Validate and sanitize all inputs
- Implement proper CORS policies
