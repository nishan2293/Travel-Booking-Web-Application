


$(document).ready(function() {
  var color = localStorage.getItem('selectedBgColor');
  if (color) {
    $('header, footer').css('backgroundColor', color);
  }

  $('#flightForm').on('submit', function(event) {
    event.preventDefault();

    var flights = [
      {origin: "New York", destination: "London", departureDate: "2023-08-01", departureTime: "15:00", arrivalDate: "2023-08-02", arrivalTime: "09:00", price: "$800"},
                {origin: "New York", destination: "London", departureDate: "2023-08-02", departureTime: "10:00", arrivalDate: "2023-08-03", arrivalTime: "04:00", price: "$850"},
                {origin: "New York", destination: "London", departureDate: "2023-08-03", departureTime: "16:00", arrivalDate: "2023-08-04", arrivalTime: "10:00", price: "$900"},
                {origin: "New York", destination: "London", departureDate: "2023-08-04", departureTime: "17:00", arrivalDate: "2023-08-05", arrivalTime: "11:00", price: "$950"},
                {origin: "New York", destination: "London", departureDate: "2023-08-05", departureTime: "18:00", arrivalDate: "2023-08-06", arrivalTime: "12:00", price: "$1000"},
                {origin: "New York", destination: "London", departureDate: "2023-08-06", departureTime: "19:00", arrivalDate: "2023-08-07", arrivalTime: "13:00", price: "$1050"},
                {origin: "New York", destination: "London", departureDate: "2023-08-07", departureTime: "20:00", arrivalDate: "2023-08-08", arrivalTime: "14:00", price: "$1100"},
                {origin: "New York", destination: "London", departureDate: "2023-08-08", departureTime: "21:00", arrivalDate: "2023-08-09", arrivalTime: "15:00", price: "$1150"},
                {origin: "New York", destination: "London", departureDate: "2023-08-09", departureTime: "22:00", arrivalDate: "2023-08-10", arrivalTime: "16:00", price: "$1200"},
                {origin: "New York", destination: "London", departureDate: "2023-08-10", departureTime: "23:00", arrivalDate: "2023-08-11", arrivalTime: "17:00", price: "$1250"},
    ];

    $('#flightResults').empty();

    var $table = $('<table>');
    var $thead = $('<thead>');
    var $headerRow = $('<tr>');

    ["Cart", "Origin", "Destination", "Departure Date", "Departure Time", "Arrival Date", "Arrival Time", "Price", "Choose Flight"].forEach(function(header) {
      var $th = $('<th>').text(header);
      $headerRow.append($th);
    });

    $thead.append($headerRow);
    $table.append($thead);

    var $tbody = $('<tbody>');

    flights.forEach(function(flight, index) {
      var $row = $('<tr>');

      var $carIconTd = $('<td>');
      var $carIconImg = $('<img>')
        .attr('src', 'https://previews.123rf.com/images/val2014/val20141603/val2014160300005/54302312-shopping-cart-icon.jpg')  // replace 'car_icon_url' with your actual car icon URL
        .attr('alt', 'Cart Icon')
        .attr('class', 'small-icon');  // adjust the size in your CSS

      $carIconTd.append($carIconImg);
      $row.append($carIconTd);

      Object.values(flight).forEach(function(value) {
        var $td = $('<td>').text(value);
        $row.append($td);
      });

      var $chooseFlightTd = $('<td>');
      var $chooseFlightInput = $('<input>')
        .attr('type', 'radio')
        .attr('name', 'flight')
        .attr('value', index)
        .on('click', function () {
          // When a flight is selected, change the opacity of all rows to 0.5, then change the opacity of the selected row to 1
          $('input[name="flight"]').parent().parent().css('opacity', 0.5);
          $(this).parent().parent().css('opacity', 1);

          localStorage.setItem('flightDetails', JSON.stringify(flight));
        });

      $chooseFlightTd.append($chooseFlightInput);
      $row.append($chooseFlightTd);

      $tbody.append($row);
    });

    $table.append($tbody);
    $('#flightResults').append($table);
  });
});

$(document).ready(function(){
  $.ajax({
      type: "GET",
      url: "flights.xml", // Assuming the XML data is stored in flights.xml file
      dataType: "xml",
      success: function(xml) {
          var table = $('<table></table>').attr({ id: "flightTable", class: "table" });
          $(xml).find('flight').each(function(){
              var row = $('<tr></tr>');
              row.append($('<td></td>').text($(this).find('origin').text()));
              row.append($('<td></td>').text($(this).find('destination').text()));
              row.append($('<td></td>').text($(this).find('departure_date').text()));
              row.append($('<td></td>').text($(this).find('departure_time').text()));
              row.append($('<td></td>').text($(this).find('arrival_date').text()));
              row.append($('<td></td>').text($(this).find('arrival_time').text()));
              row.append($('<td></td>').text($(this).find('price').text()));
              table.append(row);
          });
          $('#displayTable').append(table);
      }
  });
});
