CREATE TABLE BookingCar (
    BookID INT PRIMARY KEY AUTO_INCREMENT,
    CarID INT NOT NULL,
    PassengerID VARCHAR(15) NOT NULL,
    Status ENUM('Booked', 'Cancelled', 'Completed') NOT NULL,
    FOREIGN KEY (CarID) REFERENCES cars(carID)
);
