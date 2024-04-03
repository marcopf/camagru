<?php

// Database connection parameters
$servername = "db"; // Change this to your database server
$username = "root"; // Change this to your database username
$password = "root"; // Change this to your database password
$database = "camagru"; // Change this to your database name

$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if JSON data was successfully decoded
if ($data === null && json_last_error() !== JSON_ERROR_NONE) {
    // Error decoding JSON
    http_response_code(400); // Bad Request
    echo json_encode(array("error" => "Invalid JSON data"));
    exit;
}

$username = $data['username'];
$password = hash('sha256', $data['password']);

if (!preg_match("/^[a-z0-9]{5,}$/", $username)){
    http_response_code(401);
    exit;
}
// Prepare a SQL statement with a parameter placeholder
$stmt = $conn->prepare("SELECT * FROM users WHERE username = ? AND user_password = ?");

// Bind parameters
$stmt->bind_param("ss", $username, $password);


// Execute the prepared statement
$stmt->execute();

// Get the result
$result = $stmt->get_result();

// Check if any rows were returned
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    session_id($row['id']);
    session_start();
    http_response_code(200);
} else {
    // No matching user found
    http_response_code(401);
    echo "Username and password do not match";
}

// Close statement
$stmt->close();

// Close connection
$conn->close();

?>
