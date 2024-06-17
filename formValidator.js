// function validateForm() {
//     // Regular expressions
//     var nameFormat = /^[A-Z][a-z]*$/;
//     var phoneFormat = /^\(\d{3}\) \d{3}-\d{4}$/;
//     var emailFormat = /\S+@\S+\.\S+/;
  
//     // Get form values
//     var firstName = document.getElementById('firstName').value;
//     var lastName = document.getElementById('lastName').value;
//     var phone = document.getElementById('phone').value;
//     var gender = document.querySelector('input[name="gender"]:checked');
//     var email = document.getElementById('email').value;
//     var message = document.getElementById('message').value;
    
//     // Validate first name and last name
//     if (!nameFormat.test(firstName)) {
//       alert("First name should start with a capital letter and be alphabetic only");
//       return false;
//     }
  
//     if (!nameFormat.test(lastName)) {
//       alert("Last name should start with a capital letter and be alphabetic only");
//       return false;
//     }
  
//     if (firstName === lastName) {
//       alert("First name and last name cannot be the same");
//       return false;
//     }
  
//     // Validate phone
//     if (!phoneFormat.test(phone)) {
//       alert("Phone number must be formatted as (ddd) ddd-dddd");
//       return false;
//     }
  
//     // Validate gender
//     if (!gender) {
//       alert("Please select a gender");
//       return false;
//     }
  
//     // Validate email
//     if (!emailFormat.test(email)) {
//       alert("Please enter a valid email address");
//       return false;
//     }
  
//     // Validate message
//     if (message.length < 10) {
//       alert("The comment must be at least 10 characters");
//       return false;
//     }
  
//     return true;
//   }

//   window.onload = function() {
//     var color = localStorage.getItem('selectedBgColor');
//     if (color) {
//       document.querySelector('header').style.backgroundColor = color;
//       document.querySelector('footer').style.backgroundColor = color;
//     }
//     // Rest of your onload code
//   };
  
  
function validateForm() {
  // Regular expressions
  var nameFormat = /^[A-Z][a-z]*$/;
  var phoneFormat = /^\(\d{3}\) \d{3}-\d{4}$/;
  var emailFormat = /\S+@\S+\.\S+/;

  // Get form values
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var phone = document.getElementById('phone').value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  
  // Validate first name and last name
  if (!nameFormat.test(firstName)) {
    alert("First name should start with a capital letter and be alphabetic only");
    return false;
  }

  if (!nameFormat.test(lastName)) {
    alert("Last name should start with a capital letter and be alphabetic only");
    return false;
  }

  if (firstName === lastName) {
    alert("First name and last name cannot be the same");
    return false;
  }

  // Validate phone
  if (!phoneFormat.test(phone)) {
    alert("Phone number must be formatted as (ddd) ddd-dddd");
    return false;
  }

  // Validate gender
  if (!gender) {
    alert("Please select a gender");
    return false;
  }

  // Validate email
  if (!emailFormat.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  // Validate message
  if (message.length < 10) {
    alert("The comment must be at least 10 characters");
    return false;
  }

  return true;
}

function generateJson() {
  // First validate the form
  if (validateForm()) {
    // Get form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var phone = document.getElementById('phone').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Create JSON object
    var jsonObject = {
      "firstName": firstName,
      "lastName": lastName,
      "phone": phone,
      "gender": gender,
      "email": email,
      "message": message
    };

    // Convert JSON object to a string
    var jsonString = JSON.stringify(jsonObject, null, 2);

    // Display JSON string to user
    document.getElementById('jsonOutput').innerText = jsonString;
  }
}

window.onload = function() {
  var color = localStorage.getItem('selectedBgColor');
  if (color) {
    document.querySelector('header').style.backgroundColor = color;
    document.querySelector('footer').style.backgroundColor = color;
  }
  // Rest of your onload code
};
