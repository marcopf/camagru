<?php

$servername = "db"; // Change this if your MySQL server is hosted elsewhere
$username = "root"; // Change this if your MySQL username is different
$password = "root"; // Change this if your MySQL password is set
$dbname = "camagru"; // Change this to your desired database name
$tableName = "users"; // Change this to your desired table name
echo "Initializing database...\n";
// Create connection
$conn = new mysqli($servername, $username, $password);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database
$sql = "CREATE DATABASE IF NOT EXISTS $dbname";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully<br>";
} else {
    echo "Error creating database: " . $conn->error . "<br>";
}

$conn->select_db($dbname);

// Create table
$sql = "CREATE TABLE IF NOT EXISTS $tableName (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username CHAR(255) NOT NULL,
    user_password CHAR(255) NOT NULL,
    email CHAR(255) NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Table $tableName created successfully<br>";
} else {
    echo "Error creating table: " . $conn->error . "<br>";
}

// Close connection
$conn->close();

?>
