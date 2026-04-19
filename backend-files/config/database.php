<?php
class Database {
    private $host;
    private $username;
    private $password;
    private $database;
    private $conn;

    public function __construct() {
        // Load credentials from environment variables.
        // Set these on your server (e.g. via cPanel env vars, Apache SetEnv, or a .env loader).
        $this->host     = getenv('DB_HOST') ?: 'localhost';
        $this->username = getenv('DB_USER') ?: '';
        $this->password = getenv('DB_PASS') ?: '';
        $this->database = getenv('DB_NAME') ?: '';
    }

    public function getConnection() {
        $this->conn = null;
        try {
            // Suppress default mysqli warnings; we throw our own.
            $this->conn = @new mysqli($this->host, $this->username, $this->password, $this->database);

            if ($this->conn->connect_error) {
                throw new Exception("DB connect failed: " . $this->conn->connect_error);
            }

            $this->conn->set_charset("utf8");
        } catch (Exception $e) {
            // Log server-side only. Never echo infra details to the client.
            error_log('[database.php] ' . $e->getMessage());
            $this->conn = null;
        }
        return $this->conn;
    }
}
?>
