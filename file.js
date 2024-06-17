function renderTime() {
    var mydate = new Date();
    var year = mydate.getYear();
    if (year < 1000) {
      year += 1900;
    }
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var montharray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

    // Date End
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    if (h == 24) {
      h = 0;
    } else if (h > 12) {
      h = h - 0;
    }
    if (h < 10) {
      h = "0" + h;
    }
    if (m < 10) {
      m = "0" + m;
    }
    if (s < 10) {
      s = "0" + s;
    }
    var myClock = document.getElementById("date_time");
    myClock.textContent = "" + dayarray[day] + " " + daym + " " + montharray[month] + " " + year + " | " + h + ":" + m + ":" + s;
    myClock.innerText = "" + dayarray[day] + " " + daym + " " + montharray[month] + " " + year + " | " + h + ":" + m + ":" + s;
    setTimeout("renderTime()", 1000);
  }
  renderTime();


  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // First name and last name should be alphabetic only
    if (!/^[A-Za-z]+$/.test(firstName) || !/^[A-Za-z]+$/.test(lastName)) {
      alert("First name and last name should be alphabetic only.");
      return;
    }
  
    // The first letter of first name and last name should be capital
    if (firstName[0] !== firstName[0].toUpperCase() || lastName[0] !== lastName[0].toUpperCase()) {
      alert("The first letter of first name and last name should be capital.");
      return;
    }
  
    // The first name and the name name can not be the same
    if (firstName === lastName) {
      alert("The first name and the last name can not be the same.");
      return;
    }
  
    // Phone number must be formatted as (ddd) ddd-dddd
    if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(phone)) {
      alert("Phone number must be formatted as (ddd) ddd-dddd.");
      return;
    }
  
    // Email address must contain @ and .
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      alert("Email address must contain @ and .");
      return;
    }
  
    // The comment must be at least 10 characters
    if (message.length < 10) {
      alert("The comment must be at least 10 characters.");
      return;
    }
  
    alert("Form submitted successfully!");
  });
  