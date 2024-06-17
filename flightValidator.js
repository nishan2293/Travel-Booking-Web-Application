

// function validateFlightForm() {
//     // existing form validation logic here...

//     // Get flight details and save in localStorage
//     var origin = document.getElementById('origin').value;
//     var destination = document.getElementById('destination').value;
//     var departure = document.getElementById('departure').value;
//     var returnDate = document.getElementById('return').value;

//     // Save data in an object
//     var flightDetails = {
//         origin: origin,
//         destination: destination,
//         departure: departure,
//         return: returnDate
//     };

//     // Store the flight details in localStorage
//     localStorage.setItem('flightDetails', JSON.stringify(flightDetails));

//     // existing form submission logic here...
// }


function validateFlightForm() {
    // existing form validation logic here...

    // Get flight details and save in localStorage
    var origin = document.getElementById('origin').value;
    var destination = document.getElementById('destination').value;
    var departure = document.getElementById('departure').value;
    var returnDate = document.getElementById('return').value;

    // Save data in an object
    var flightDetails = {
        origin: origin,
        destination: destination,
        departure: departure,
        return: returnDate
    };

    // Store the flight details in localStorage
    localStorage.setItem('flightDetails', JSON.stringify(flightDetails));

    // existing form submission logic here...
    return false; // Prevent the form from submitting since we are handling it with JS
}
