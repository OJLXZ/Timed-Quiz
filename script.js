// convert IDs to variables
var highscore = document.getElementById("highscore");
var timer = document.getElementById("timer");
var container = document.getElementById("container");
var para1 = document.getElementById("paragraph1");
var para2 = document.getElementById("paragraph2");
var startBtn = document.getElementById("start-button");

startBtn.addEventListener("click", function() {
    // "variable"
    // Must go to next question
});

// Attempt to set timer from 08-INs Timers Intervals EXAMPLE
var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

// First question should pop up 
function sendMessage() {
    timeEl.textContent = " ";
  
    var imgEl = document.createElement("img");
  
    imgEl.setAttribute("src", "images/image_1.jpg");
    mainEl.appendChild(imgEl);
  
  }

//   

