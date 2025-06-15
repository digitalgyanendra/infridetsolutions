
-- Run this SQL in phpMyAdmin to create the required tables

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
