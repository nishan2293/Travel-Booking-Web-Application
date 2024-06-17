

// $(document).ready(function () {
//     $('#searchButton').on("click", function() {
//       showCarSelection();
//     });
  
//     var color = localStorage.getItem('selectedBgColor');
//     if (color) {
//       $('header').css('backgroundColor', color);
//       $('footer').css('backgroundColor', color);
//     }
  
//     $('#carSelection form').on('submit', function(event) {
//       event.preventDefault();
//       var pickup = $('#pickup').val();
//       var returnLocation = $('#return').val();
//       var pickupDate = $('#pickup-date').val();
//       var returnDate = $('#return-date').val();
//       var car = $('#car').val();
  
//       var carData = {
//         pickup: pickup,
//         returnLocation: returnLocation,
//         pickupDate: pickupDate,
//         returnDate: returnDate,
//         car: car
//       };
  
//       localStorage.setItem('carDetails', JSON.stringify(carData));
  
//       alert('Rental car booking saved successfully!');
//     });
//   });
  
//   function showCarSelection() {
//     var pickupLocation = $('#pickup').val();
//     var returnLocation = $('#return').val();
//     var pickupDate = $('#pickup-date').val();
//     var returnDate = $('#return-date').val();
  
//     if (!pickupLocation || !returnLocation || !pickupDate || !returnDate) {
//       alert('Please fill out all fields before searching.');
//       return;
//     }
  
//     var cars = [
//       { name: "Car 1", price: "$300" },
//       { name: "Car 2", price: "$350" },
//       { name: "Car 3", price: "$400" },
//       { name: "Car 4", price: "$450" },
//       { name: "Car 5", price: "$500" },
//       { name: "Car 6", price: "$550" },
//       { name: "Car 7", price: "$600" },
//       { name: "Car 8", price: "$650" },
//       { name: "Car 9", price: "$700" },
//       { name: "Car 10", price: "$750" }
//     ];
  
//     var table = $("<table></table>").attr({border: '1', width: '100%'});
//     var headers = ["Name", "Pickup Date", "Return Date", "Price", "Choose Car"];
    
//     var tr = $("<tr></tr>");
//     $.each(headers, function(index, header) {
//       tr.append($("<th></th>").text(header));
//     });
//     table.append(tr);
  
//     $.each(cars, function(index, car) {
//       var tr = $("<tr></tr>");
//       $.each(headers, function(index, header) {
//         var td = $("<td></td>");
//         if (header === "Choose Car") {
//           td.append($("<button></button>").text('Choose Car'));
//         } else if (header === "Pickup Date") {
//           td.text(pickupDate);
//         } else if (header === "Return Date") {
//           td.text(returnDate);
//         } else {
//           td.text(car[header.replace(" ", "").toLowerCase()]);
//         }
//         tr.append(td);
//       });
//       table.append(tr);
//     });
  
//     $('#carSelection').empty();
//     $('#carSelection').append(table);
//     $('#carSelection').show();
//   }
  
$(document).ready(function () {
    $('#searchButton').on("click", function() {
      showCarSelection();
    });

    var color = localStorage.getItem('selectedBgColor');
    if (color) {
      $('header').css('backgroundColor', color);
      $('footer').css('backgroundColor', color);
    }

    $('#carSelection form').on('submit', function(event) {
      event.preventDefault();
      var pickup = $('#pickup').val();
      var returnLocation = $('#return').val();
      var pickupDate = $('#pickup-date').val();
      var returnDate = $('#return-date').val();
      var selectedCar = $('#car').val();

      var cars = getCars();
      var car = cars.find(c => c.id === selectedCar);

      var carData = {
        pickup: pickup,
        returnLocation: returnLocation,
        pickupDate: pickupDate,
        returnDate: returnDate,
        car: car
      };

      localStorage.setItem('carDetails', JSON.stringify(carData));

      alert('Rental car booking saved successfully!');
    });
});
  
function showCarSelection() {
    var pickupLocation = $('#pickup').val();
    var returnLocation = $('#return').val();
    var pickupDate = $('#pickup-date').val();
    var returnDate = $('#return-date').val();
  
    if (!pickupLocation || !returnLocation || !pickupDate || !returnDate) {
      alert('Please fill out all fields before searching.');
      return;
    }

    var cars = getCars();
  
    var table = $("<table></table>").attr({border: '1', width: '100%'});
    var headers = ["Name", "Description", "Price", "Choose Car", "check_in_date", "check_out_date"];
    
    var tr = $("<tr></tr>");
    $.each(headers, function(index, header) {
      tr.append($("<th></th>").text(header));
    });
    table.append(tr);
  
    $.each(cars, function(index, car) {
      var tr = $("<tr></tr>");
      $.each(headers, function(index, header) {
        var td = $("<td></td>");
        if (header === "Choose Car") {
          td.append($("<button></button>").text('Choose Car'));
        } else {
          td.text(car[header.replace(" ", "").toLowerCase()]);
        }
        tr.append(td);
      });
      table.append(tr);
    });
  
    $('#carSelection').empty();
    $('#carSelection').append(table);
    $('#carSelection').show();
}

function getCars() {
    return [
      { id: "car1", name: "Car 1", description: "A compact car, perfect for city driving.", price: "$300", check_in_date: "2023-08-01", check_out_date: "2023-08-05" },
      { id: "car2", name: "Car 2", description: "A midsize car, great for families.", price: "$350", check_in_date: "2023-08-06", check_out_date: "2023-08-10" },
      { id: "car3", name: "Car 3", description: "A luxury sedan, for those who want to travel in style.", price: "$400", check_in_date: "2023-08-11", check_out_date: "2023-08-15" },
      { id: "car4", name: "Car 4", description: "An economy car, great for saving on fuel.", price: "$250", check_in_date: "2023-08-16", check_out_date: "2023-08-20" },
      { id: "car5", name: "Car 5", description: "A full-size car, for those who need more space.", price: "$375", check_in_date: "2023-08-21", check_out_date: "2023-08-25" },
      { id: "car6", name: "Car 6", description: "A convertible, perfect for sunny weather.", price: "$450", check_in_date: "2023-08-26", check_out_date: "2023-08-30" },
      { id: "car7", name: "Car 7", description: "A sports car, for those who want a fast ride.", price: "$500", check_in_date: "2023-09-01", check_out_date: "2023-09-05" },
      { id: "car8", name: "Car 8", description: "A hybrid car, for the environmentally conscious.", price: "$400", check_in_date: "2023-09-06", check_out_date: "2023-09-10" },
      { id: "car9", name: "Car 9", description: "An SUV, for those who want off-road capabilities.", price: "$425", check_in_date: "2023-09-11", check_out_date: "2023-09-15" },
      { id: "car10", name: "Car 10", description: "A minivan, perfect for larger groups or families.", price: "$385", check_in_date: "2023-09-16", check_out_date: "2023-09-20" }
    ];
}

$(document).ready(function(){
  $.ajax({
      type: "GET",
      url: "cars.xml", // Assuming the XML data is stored in cars.xml file
      dataType: "xml",
      success: function(xml) {
          var table = $('<table></table>').attr({ id: "carTable", class: "table" });
          $(xml).find('car').each(function(){
              var row = $('<tr></tr>');
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