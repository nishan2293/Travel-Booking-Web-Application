<?php
include 'db_connection.php';

// Connection to the database
$mysqli = new mysqli("localhost", "username", "password", "database");

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $passengerID = $_POST['passengerID'];
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $age = $_POST['age'];
    $email = $_POST['email'];
    $password1 = $_POST['password1'];
    $password2 = $_POST['password2'];
    
    // Validate fields
    if (empty($passengerID) || empty($firstName) || empty($lastName) || empty($age) || empty($email) || empty($password1)) {
        echo "All fields are required!";
    } elseif ($password1 !== $password2) {
        echo "Passwords do not match!";
    } elseif (strlen($password1) < 8) {
        echo "Password must be at least 8 characters!";
    } elseif (!preg_match("/^\(\d{3}\) \d{3}-\d{4}$/", $passengerID)) {
        echo "Passenger ID must be formatted as (123) 456-7890!";
    } elseif (!strstr($email, '@') || !strstr($email, '.edu')) {
        echo "Email must contain @ and .edu!";
    } else {
        // Insert into database
        $stmt = $mysqli->prepare("INSERT INTO users (passengerID, firstName, lastName, age, email, password) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssss", $passengerID, $firstName, $lastName, $age, $email, password_hash($password1, PASSWORD_DEFAULT));
        
        if ($stmt->execute()) {
            echo "Registered successfully!";
        } else {
            echo "Error: " . $stmt->error;
        }
        
        $stmt->close();
    }
}

$mysqli->close();
?>

