function loadFlights() {
    var xmlString = `
    <flights>
        <flight>
            <flightID>1</flightID>
            <origin>New York</origin>
            <destination>London</destination>
            <departure_date>2023-08-10</departure_date>
            <departure_time>10:30:00</departure_time>
            <arrival_date>2023-08-11</arrival_date>
            <arrival_time>11:00:00</arrival_time>
            <price>500.00</price>
        </flight>
        <!-- Add more flights as needed -->
    </flights>`
    `;

    $.ajax({
        url: 'processFlights.php',
        method: 'POST',
        data: { xmlString: xmlString },
        success: function(response) {
            var flights = JSON.parse(response);

            // Create a table to hold the flight data
            var table = '<table class="table table-bordered">';
            table += '<tr><th>Flight ID</th><th>Origin</th><th>Destination</th><th>Departure Date</th><th>Departure Time</th><th>Arrival Date</th><th>Arrival Time</th><th>Price</th></tr>';

            // Iterate through the flights and add each one as a row
            flights.forEach(flight => {
                table += '<tr>';
                table += `<td>${flight.flightID}</td>`;
                table += `<td>${flight.origin}</td>`;
                table += `<td>${flight.destination}</td>`;
                table += `<td>${flight.departure_date}</td>`;
                table += `<td>${flight.departure_time}</td>`;
                table += `<td>${flight.arrival_date}</td>`;
                table += `<td>${flight.arrival_time}</td>`;
                table += `<td>${flight.price}</td>`;
                table += '</tr>';
            });

            table += '</table>';

            // Insert the table into the HTML
            document.getElementById('displayTable').innerHTML = table;
        }
    });
}
