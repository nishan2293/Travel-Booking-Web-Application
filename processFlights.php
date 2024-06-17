<?php
include 'db_connection.php';

// Assuming the XML is received via POST request
$xml = simplexml_load_string($_POST['xmlString']);

foreach ($xml->flight as $flight) {
    $query = "INSERT INTO flights (origin, destination, departure_date, departure_time, arrival_date, arrival_time, price) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $mysqli->prepare($query);
    $stmt->bind_param("sssssss", $flight->origin, $flight->destination, $flight->departure_date, $flight->departure_time, $flight->arrival_date, $flight->arrival_time, $flight->price);
    $stmt->execute();
}

$query = "SELECT * FROM flights";
$result = $mysqli->query($query);
$flights = [];

while ($row = $result->fetch_assoc()) {
    $flights[] = $row;
}

echo json_encode($flights);

$mysqli->close();
?>
