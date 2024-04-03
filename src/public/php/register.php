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
    http_build_query(400);
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
$email = $data['email'];
$password = hash('sha256', $data['password']);

$emailPattern = '/(?:[a-z0-9!#$%&\'*+\/=?^_{|}~-]+(?:\.[a-z0-9!#$%&\'*+\/=?^_{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/';
if (!preg_match("/^[a-z0-9]{5,}$/", $username) || !preg_match($emailPattern, $email)){
    http_build_query(400);
    echo "error evalueting data";
    $conn->close();
    exit;
}
$unique_id = uniqid();
$sql = "INSERT INTO users (id, username, email, user_password) VALUES ('$unique_id', '$username', '$email', '$password')";

try {
    $sqlVal = $conn->query($sql);
    if ($sqlVal === TRUE){
        http_response_code(200);
        echo "New record inserted successfully";
    }
    else{
        http_response_code(400);
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} catch (\Throwable $th) {
    http_response_code(400);
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>