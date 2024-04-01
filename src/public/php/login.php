<?php

// Database connection parameters
$servername = "db"; // Change this to your database server
$username = "root"; // Change this to your database username
$password = "root"; // Change this to your database password
$database = "camagru"; // Change this to your database name

$json = file_get_contents('php://input');
$data = json_decode($json, true);

print_r($data['username'])
// // Create connection
// $conn = new mysqli($servername, $username, $password, $database);

// // Check connection
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }

// // Check if JSON data was successfully decoded
// if ($data === null && json_last_error() !== JSON_ERROR_NONE) {
//     // Error decoding JSON
//     http_response_code(400); // Bad Request
//     echo json_encode(array("error" => "Invalid JSON data"));
//     exit;
// }

// $username = $data['username'];
// $email = $data['email'];
// $password = $data['password'];

// $sql = "INSERT INTO users (username, email, user_password) VALUES ('$username', '$email', '$password')";

// if ($conn->query($sql) === TRUE) {
//     echo "New record inserted successfully";
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }

// // Close connection
// $conn->close();
?>