
let questions = [
    { text: "Have you flown on at least 10 flights in the past year?", offer: "$100 off your flight!" },
    { text: "Are you a senior flyer?", offer: "$50 off your next booking!" },
    { text: "Have you booked a hotel with us in the last 6 months?", offer: "Free breakfast with your next hotel booking!" }
];

let currentQuestionIndex = 0;
let startTime;
let offers = [];
let flightData;

function setupQuiz() {
    document.getElementById("startButton").addEventListener("click", startQuiz);
    document.getElementById("nextButton").addEventListener("click", nextQuestion);
    document.getElementById("skipButton").addEventListener("click", skipQuestion);

    document.getElementById("bgColor").addEventListener("change", function() {
        document.body.style.backgroundColor = this.value;
    });

    document.getElementById("fontSize").addEventListener("change", function() {
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

function changeBackgroundColor() {
    var selectedColor = document.getElementById('bgColor').value;
    localStorage.setItem('selectedBgColor', selectedColor);
    // Apply the color immediately
    document.querySelector('header').style.backgroundColor = selectedColor;
    document.querySelector('footer').style.backgroundColor = selectedColor;
}



window.onload = function() {
    setupQuiz();
    changeBackgroundColor();
}

function startQuiz() {
    startTime = Date.now();

    document.getElementById("startButton").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    displayQuestion();
}

function displayQuestion() {
    document.getElementById("question").innerText = questions[currentQuestionIndex].text;
}

function nextQuestion() {
    if (document.getElementById("yes").checked && questions[currentQuestionIndex].offer) {
        offers.push(questions[currentQuestionIndex].offer);
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function skipQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    let timeSpent = Math.round((Date.now() - startTime) / 1000);

    let result = `You qualify for the following offers because of your answers: ${offers.join(", ")}<br>You spent ${timeSpent} seconds on the questions.`;

    document.getElementById("result").innerHTML = result;
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
}



