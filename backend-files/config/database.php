
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
