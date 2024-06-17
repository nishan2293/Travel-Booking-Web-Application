
window.onload = function () {
  document.getElementById("checkStatusButton").addEventListener("click", checkOrderStatus);
}

function checkOrderStatus() {
  // Retrieve the flight, hotel, and rental car selections from Local Storage
  let flightSelection = JSON.parse(localStorage.getItem('flightSelection'));
  let hotelSelection = JSON.parse(localStorage.getItem('hotelSelection'));
  let carSelection = JSON.parse(localStorage.getItem('carSelection'));

  if (flightSelection && hotelSelection && carSelection) {
    // Display the order status table
    displayOrderStatus(flightSelection, hotelSelection, carSelection);
  } else {
    alert("No order found or incomplete selection.");
  }
}

function displayOrderStatus(flightSelection, hotelSelection, carSelection) {
  let orderStatusDiv = document.getElementById("orderStatus");

  let html = `<h3>Order Status</h3>
    <table>
      <tr>
        <th>Flight</th>
        <th>Hotel</th>
        <th>Rental Car</th>
      </tr>
      <tr>
        <td>${flightSelection ? flightSelection.origin + ' to ' + flightSelection.destination : 'Not available'}</td>
        <td>${hotelSelection ? hotelSelection.destination + ' (' + hotelSelection.checkin + ' - ' + hotelSelection.checkout + ')' : 'Not available'}</td>
        <td>${carSelection ? carSelection.pickup + ' - ' + carSelection.returnLocation + ' (' + carSelection.pickupDate + ' - ' + carSelection.returnDate + ')' : 'Not available'}</td>
      </tr>
    </table>`;

  orderStatusDiv.innerHTML = html;
}

///////////////////////////
let currentQuestionIndex = 0;
let startTime;
let offers = [];
let flightData;

function setupQuiz() {
  document.getElementById("startButton").addEventListener("click", startQuiz);
  document.getElementById("nextButton").addEventListener("click", nextQuestion);
  document.getElementById("skipButton").addEventListener("click", skipQuestion);

  document.getElementById("bgColor").addEventListener("change", function () {
    document.body.style.backgroundColor = this.value;
  });

  document.getElementById("fontSize").addEventListener("change", function () {
    document.body.style.fontSize = this.value + "px";
  });

  flightData = JSON.parse(localStorage.getItem('flightSelection'));  // Retrieve flight data

  if (flightData) {
    console.log(flightData);  // Log the flight data to the console for testing
  }
  else {
    console.log('No flight data found.');
  }
}

function setupFlightDetails() {
  var flightDetails = JSON.parse(localStorage.getItem('flightDetails'));
  if (flightDetails !== null) {
    var flightDetailsDiv = document.createElement('div');
    flightDetailsDiv.textContent = 'Flight details: ' + flightDetails.origin + ' to ' + flightDetails.destination +
      ', Departure: ' + flightDetails.departure + ', Return: ' + flightDetails.return;

    flightDetailsDiv.style.fontSize = '20px'; // Increase the font size
    flightDetailsDiv.style.fontWeight = 'bold'; // Make the text bold
    flightDetailsDiv.style.color = 'coral'; // Change the color to coral
    document.body.appendChild(flightDetailsDiv);
  }
}

function setupHotelDetails() {
  var hotelDetails = JSON.parse(localStorage.getItem('hotelDetails'));
  if (hotelDetails !== null) {
    var hotelDetailsDiv = document.createElement('div');
    hotelDetailsDiv.textContent = 'Hotel details: ' + hotelDetails.hotel + ' in ' + hotelDetails.destination +
      ', Check-in: ' + hotelDetails.checkin + ', Check-out: ' + hotelDetails.checkout;
      hotelDetailsDiv.style.fontSize = '20px'; // Increase the font size
      hotelDetailsDiv.style.fontWeight = 'bold'; // Make the text bold
      hotelDetailsDiv.style.color = 'coral'; // Change the color to coral
    document.body.appendChild(hotelDetailsDiv);
  }
}

function setupCarDetails() {
  var carDetails = JSON.parse(localStorage.getItem('carDetails'));
  if (carDetails !== null) {
    var carDetailsDiv = document.createElement('div');
    carDetailsDiv.textContent = 'Rental car details: ' + carDetails.car +
      ', Pickup: ' + carDetails.pickup + ', Return: ' + carDetails.returnLocation +
      ', Pickup Date: ' + carDetails.pickupDate + ', Return Date: ' + carDetails.returnDate;
      carDetailsDiv.style.fontSize = '20px'; // Increase the font size
      carDetailsDiv.style.fontWeight = 'bold'; // Make the text bold
      carDetailsDiv.style.color = 'coral'; // Change the color to coral
    document.body.appendChild(carDetailsDiv);
  }
}

function applySavedStyles() {
  var color = localStorage.getItem('selectedBgColor');
  if (color) {
    document.querySelector('header').style.backgroundColor = color;
    document.querySelector('footer').style.backgroundColor = color;
  }
}


window.onload = function () {
  setupFlightDetails();
  setupHotelDetails();
  setupCarDetails();
  applySavedStyles();
}

