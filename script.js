// convert IDs to variables
var highscore = document.getElementById("highscore");
var timer = document.getElementById("timer");
var container = document.getElementById("container");
var para1 = document.getElementById("paragraph1");
var para2 = document.getElementById("paragraph2");
var startBtn = document.getElementById("start-button");

// Attempt to set timer from 08-INs Timers Intervals EXAMPLE
var secondsLeft = 60;

function setTime() {
  event.preventDefault();
  setInterval(function() {
    secondsLeft--;
    timer.textContent = "timer" + secondsLeft;
  }, 1000);
}
startBtn.addEventListener("click", function () {
  setTime();
})

// For checking results
// var time = 60;
//     var intervalID = setInterval(function(){
//         time--
//         console.log(time)
//     }, 1000)
// clearInterval(intervalID)
// time +=10;
// time -=10;

var questionArr = [
    { question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["Javascript", "terminal/bash", "for loop", "console.log"],
      answer: "for loop",
    },
    { question: "String values must be enclosed within ______ when being assigned to variables.",
      choices: ["commas", "curly brakets", "quotes", "parenthesis"],
      answer: "curly brakets",
    },
    { question: "Arrays in JavaScript can be used to store _____.",
      choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
      answer: "all of the above",
    },
    { question: "The condition in an if/else statement is enclosed within _____.",
      choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
      answer: "parenthesis",
    },
    { question: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "booleans",
    },
]

function quizChallenge(){
  for (var i = 0; i <= questionArr.length; i++);
