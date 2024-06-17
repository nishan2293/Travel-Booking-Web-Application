CREATE TABLE cars (
    carID INT PRIMARY KEY AUTO_INCREMENT,
    car_name VARCHAR(255) NOT NULL,
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);
