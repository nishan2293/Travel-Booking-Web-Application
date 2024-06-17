CREATE TABLE BookingFlight (
    BookID INT PRIMARY KEY AUTO_INCREMENT,
    flightID INT NOT NULL,
    PassengerID VARCHAR(15) NOT NULL,
    Status ENUM('Booked', 'Cancelled', 'Completed') NOT NULL,
    FOREIGN KEY (flightID) REFERENCES flights(flightID)
);
