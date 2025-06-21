
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
            
            if ($this->conn->connect_error) {
                throw new Exception("Connection failed: " . $this->conn->connect_error);
            }
            
            $this->conn->set_charset("utf8");
            echo "Database connected successfully!<br>";
            
        } catch(Exception $e) {
            echo "Connection error: " . $e->getMessage() . "<br>";
            echo "Please check your database credentials and permissions.<br>";
            echo "Database: " . $this->database . "<br>";
            echo "Username: " . $this->username . "<br>";
        }
        return $this->conn;
    }
}
?>
