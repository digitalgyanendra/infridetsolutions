<?php
/**
 * One-time admin setup script.
 *
 * SECURITY:
 *   1. Set the SETUP_KEY environment variable on your server BEFORE running this.
 *   2. Visit: https://infridetsolutions.com/api/setup-admin.php?key=YOUR_SETUP_KEY&email=you@x.com&password=NewPassword123
 *   3. DELETE this file immediately after use.
 *
 * Will not run unless SETUP_KEY env is set AND matches the ?key= parameter.
 * Will not run if any admin already exists (use phpMyAdmin to reset).
 */
require_once 'config/database.php';

header('Content-Type: text/plain');

$expected = getenv('SETUP_KEY');
$provided = $_GET['key'] ?? '';

if (!$expected || strlen($expected) < 16) {
    http_response_code(503);
    exit("SETUP_KEY environment variable not configured (must be 16+ chars).");
}

if (!hash_equals($expected, $provided)) {
    http_response_code(403);
    exit("Forbidden.");
}

$email    = filter_var($_GET['email'] ?? '', FILTER_VALIDATE_EMAIL);
$password = $_GET['password'] ?? '';
$username = $_GET['username'] ?? 'admin';

if (!$email || strlen($password) < 8) {
    exit("Provide ?email=valid@email.com&password=Min8Chars (and optional ?username=admin)");
}

$db = (new Database())->getConnection();
if (!$db) exit("Database unavailable.");

$existing = $db->query("SELECT COUNT(*) AS c FROM admin_users")->fetch_assoc();
if ((int)$existing['c'] > 0) {
    exit("Admin user already exists. Use phpMyAdmin to manage further accounts.");
}

$hash = password_hash($password, PASSWORD_DEFAULT);
$stmt = $db->prepare("INSERT INTO admin_users (username, email, password, role) VALUES (?, ?, ?, 'admin')");
$stmt->bind_param("sss", $username, $email, $hash);

if (!$stmt->execute()) exit("Insert failed: " . $stmt->error);

$uid = $db->insert_id;
$db->query("INSERT IGNORE INTO user_roles (user_id, role) VALUES ($uid, 'admin')");

echo "Admin created successfully.\n";
echo "Username: $username\n";
echo "Email:    $email\n";
echo "\n>>> NOW DELETE THIS FILE FROM /api/ IMMEDIATELY. <<<\n";
