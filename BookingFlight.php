<?php
$origin = $_POST['origin'];
$destination = $_POST['destination'];
$departure = $_POST['departure'];
$tripType = $_POST['tripType'];

if ($tripType == 'Round Trip') {
    $returnDate = $_POST['return'];
}

// Connect to the database
$mysqli = new mysqli("localhost", "username", "password", "database");

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// One-way search logic
$query = "SELECT * FROM flights WHERE origin=? AND destination=? AND departure_date=?";
$stmt = $mysqli->prepare($query);
$stmt->bind_param('sss', $origin, $destination, $departure);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "FlightID: " . $row['flightID'] . " - Price: " . $row['price'] . "<br>";
    }
} else {
    echo "No outbound flights found matching your criteria.<br>";
}

// If Round Trip, add search logic for return flight
if ($tripType == 'Round Trip') {
    $queryReturn = "SELECT * FROM flights WHERE origin=? AND destination=? AND departure_date=?";
    $stmtReturn = $mysqli->prepare($queryReturn);
    $stmtReturn->bind_param('sss', $destination, $origin, $returnDate);
    $stmtReturn->execute();
    $resultReturn = $stmtReturn->get_result();

    if ($resultReturn->num_rows > 0) {
        while ($rowReturn = $resultReturn->fetch_assoc()) {
            echo "Return FlightID: " . $rowReturn['flightID'] . " - Price: " . $rowReturn['price'] . "<br>";
        }
    } else {
        echo "No return flights found matching your criteria.<br>";
    }
}

$mysqli->close();
?>
