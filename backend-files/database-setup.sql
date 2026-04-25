-- ============================================================
-- INFRIDET SOLUTIONS — DATABASE SCHEMA
-- Run this in phpMyAdmin after creating your DB.
-- ============================================================

-- Admin users (login source)
CREATE TABLE IF NOT EXISTS admin_users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(150) UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'editor') DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login_at TIMESTAMP NULL,
  INDEX idx_email (email)
);

-- Separate user_roles table (prevents privilege escalation via column edits)
CREATE TABLE IF NOT EXISTS user_roles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  role ENUM('admin', 'editor', 'viewer') NOT NULL DEFAULT 'editor',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uniq_user_role (user_id, role),
  FOREIGN KEY (user_id) REFERENCES admin_users(id) ON DELETE CASCADE
);

-- Blog posts
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
  published_at TIMESTAMP NULL,
  INDEX idx_status_date (status, created_at),
  INDEX idx_category (category),
  INDEX idx_slug (slug)
);

-- Courses
CREATE TABLE IF NOT EXISTS courses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  price DECIMAL(10,2) DEFAULT 0,
  duration VARCHAR(100),
  level ENUM('beginner','intermediate','advanced') DEFAULT 'beginner',
  status ENUM('draft','published','archived') DEFAULT 'draft',
  featured_image VARCHAR(500),
  enrollment_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Optional audit log for security review
CREATE TABLE IF NOT EXISTS admin_audit_log (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  action VARCHAR(100) NOT NULL,
  target VARCHAR(255),
  ip VARCHAR(45),
  ua VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_user_date (user_id, created_at)
);
