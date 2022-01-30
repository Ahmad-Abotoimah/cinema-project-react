<?php
header("Access-Control-Allow-Origin: * ");

$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "project7_movies";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
    $sql = "INSERT INTO bookings (email, name,password)
        VALUES ('".$_POST['myEmail']."', '".$_POST['myUsername']."', '".$_POST['password']."')";
    if (mysqli_query($conn,$sql)) {
    $data = array("data" => "You Data added successfully");
        echo json_encode($data);
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
?>