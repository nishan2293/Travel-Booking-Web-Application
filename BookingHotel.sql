CREATE TABLE BookingHotel (
    BookID INT PRIMARY KEY AUTO_INCREMENT,
    HotelID INT NOT NULL,
    PassengerID VARCHAR(15) NOT NULL,
    Status ENUM('Booked', 'Cancelled', 'Completed') NOT NULL,
    FOREIGN KEY (HotelID) REFERENCES hotel(hotelID)
);
