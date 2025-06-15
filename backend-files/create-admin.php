
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
