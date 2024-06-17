
// window.onload = function() {
//   fillInfo();
//   applySavedStyles();
// }

// function fillInfo(){
//   var form = $('#hotelForm');
//   var hotelSelectForm = $('#hotelSelectForm');
//   var searchButton = $('#searchButton');

//   searchButton.click(function (e) {
//     e.preventDefault();

//     var destination = $('#destination').val();
//     var checkin = $('#checkin').val();
//     var checkout = $('#checkout').val();

//     if (new Date(checkin) > new Date(checkout)) {
//       alert("Check-out date should be after check-in date.");
//     } else {
//       // Generate hotel list when search button is clicked
//       generateHotelList(destination, checkin, checkout);

//       // Show the hotelSelectForm after generating the hotel list
//       hotelSelectForm.show();
//     }
//   });
// }

// function generateHotelList(destination, checkin, checkout) {
//   var hotels = [
//     {city: "London", name: "Hotel London 1", checkIn: "2023-08-01", checkOut: "2023-08-10", price: "$800"},
//     {city: "London", name: "Hotel London 2", checkIn: "2023-08-01", checkOut: "2023-08-10", price: "$850"},
//     {city: "London", name: "Hotel London 3", checkIn: "2023-08-01", checkOut: "2023-08-10", price: "$900"},
//     {city: "London", name: "Hotel London 4", checkIn: "2023-08-01", checkOut: "2023-08-10", price: "$750"},
//     {city: "London", name: "Hotel London 5", checkIn: "2023-08-01", checkOut: "2023-08-10", price: "$950"},
//     {city: "London", name: "Hotel London 6", checkIn: "2023-08-01", checkOut: "2023-08-10", price: "$1050"},
//     {city: "London", name: "Hotel London 7", checkIn: "2023-08-01", checkOut: "2023-08-10", price: "$1100"},
//     {city: "London", name: "Hotel London 8", checkIn: "2023-08-01", checkOut: "2023-08-10", price: "$1200"},
//     {city: "London", name: "Hotel London 9", checkIn: "2023-08-01", checkOut: "2023-08-10", price: "$1250"},
//     {city: "London", name: "Hotel London 10", checkIn: "2023-08-01", checkOut: "2023-08-10", price: "$1300"},
//   ];

//   var table = $('<table>').attr({ border: '1', width: '100%' });

//   var tr = $('<tr>');
//   var headers = ["City", "Hotel Name", "Check In Date", "Check Out Date", "Price", "Choose"];
//   headers.forEach(function(header) {
//     var th = $('<th>').text(header);
//     tr.append(th);
//   });
//   table.append(tr);

//   hotels.forEach(function(hotel, index) {
//     var tr = $('<tr>');
//     tr.append($('<td>').text(hotel.city));
//     tr.append($('<td>').text(hotel.name));
//     tr.append($('<td>').text(hotel.checkIn));
//     tr.append($('<td>').text(hotel.checkOut));
//     tr.append($('<td>').text(hotel.price));
//     tr.append($('<td>').append($('<input>').attr({ type: 'radio', name: 'hotel', value: hotel.name, id: 'hotel'+index })));
//     table.append(tr);
//   });

//   $('#hotelResults').empty().append(table);
// }

// function applySavedStyles() {
//   var color = localStorage.getItem('selectedBgColor');
//   if (color) {
//     $('header').css('backgroundColor', color);
//     $('footer').css('backgroundColor', color);
//   }
// }


window.onload = function() {
  fillInfo();
  applySavedStyles();
}

var hotels = [
  {city: "London", name: "Hotel London 1", checkIn: "2023-08-01", checkOut: "2023-08-10", price: "$800"},
    {city: "London", name: "Hotel London 2", checkIn: "2023-08-01", checkOut: "2023-08-10", price: "$850"},
    {city: "London", name: "Hotel London 3", checkIn: "2023-08-01", checkOut: "2023-08-10", price: "$900"},
    {city: "London", name: "Hotel London 4", checkIn: "2023-08-01", checkOut: "2023-08-10", price: "$750"},
    {city: "London", name: "Hotel London 5", checkIn: "2023-08-01", checkOut: "2023-08-10", price: "$950"},
    {city: "London", name: "Hotel London 6", checkIn: "2023-08-01", checkOut: "2023-08-10", price: "$1050"},
    {city: "London", name: "Hotel London 7", checkIn: "2023-08-01", checkOut: "2023-08-10", price: "$1100"},
    {city: "London", name: "Hotel London 8", checkIn: "2023-08-01", checkOut: "2023-08-10", price: "$1200"},
    {city: "London", name: "Hotel London 9", checkIn: "2023-08-01", checkOut: "2023-08-10", price: "$1250"},
    {city: "London", name: "Hotel London 10", checkIn: "2023-08-01", checkOut: "2023-08-10", price: "$1300"},
];

function fillInfo(){
  var form = $('#hotelForm');
  var hotelSelectForm = $('#hotelSelectForm');
  var searchButton = $('#searchButton');

  searchButton.click(function (e) {
    e.preventDefault();

    var destination = $('#destination').val();
    var checkin = $('#checkin').val();
    var checkout = $('#checkout').val();

    if (new Date(checkin) > new Date(checkout)) {
      alert("Check-out date should be after check-in date.");
    } else {
      generateHotelList(destination, checkin, checkout);
      hotelSelectForm.show();
    }
  });

  $('#hotelSelectForm').submit(function(e) {
    e.preventDefault();

    var selectedHotel = $('input[name="hotel"]:checked').val();
    var hotelDetails = hotels.find(hotel => hotel.name === selectedHotel);

    localStorage.setItem('hotelDetails', JSON.stringify(hotelDetails));
  });
}

function generateHotelList(destination, checkin, checkout) {
  var table = $('<table>').attr({ border: '1', width: '100%' });

  var tr = $('<tr>');
  var headers = ["City", "Hotel Name", "Check In Date", "Check Out Date", "Price", "Choose"];
  headers.forEach(function(header) {
    var th = $('<th>').text(header);
    tr.append(th);
  });
  table.append(tr);

  hotels.forEach(function(hotel, index) {
    var tr = $('<tr>');
    tr.append($('<td>').text(hotel.city));
    tr.append($('<td>').text(hotel.name));
    tr.append($('<td>').text(hotel.checkIn));
    tr.append($('<td>').text(hotel.checkOut));
    tr.append($('<td>').text(hotel.price));
    tr.append($('<td>').append($('<input>').attr({ type: 'radio', name: 'hotel', value: hotel.name, id: 'hotel'+index })));
    table.append(tr);
  });

  $('#hotelResults').empty().append(table);
}

function applySavedStyles() {
  var color = localStorage.getItem('selectedBgColor');
  if (color) {
    $('header').css('backgroundColor', color);
    $('footer').css('backgroundColor', color);
  }
}

$(document).ready(function(){
  $.ajax({
      type: "GET",
      url: "hotels.xml", // Assuming the XML data is stored in hotels.xml file
      dataType: "xml",
      success: function(xml) {
          var table = $('<table></table>').attr({ id: "hotelTable", class: "table" });
          $(xml).find('hotel').each(function(){
              var row = $('<tr></tr>');
              row.append($('<td></td>').text($(this).find('city').text()));
              row.append($('<td></td>').text($(this).find('name').text()));
              row.append($('<td></td>').text($(this).find('check_in_date').text()));
              row.append($('<td></td>').text($(this).find('check_out_date').text()));
              row.append($('<td></td>').text($(this).find('price').text()));
              table.append(row);
          });
          $('#displayTable').append(table);
      }
  });
});