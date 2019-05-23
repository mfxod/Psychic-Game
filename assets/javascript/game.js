// psuedocode:
// alert("Instructions")
// assign comp's letter choice to a variable
// let user guess up to 8 times
// display user guesses in HTML
// guessCounter++ in HTML
// if user doesn't guess within 8 tries: losses++ in HTML; reset
// if user guess correctly: wins++ in HTML; reset 


var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var compChoice = letters[Math.floor(Math.random() * letters.length)];

var wins = 0;
var losses = 0;
var guessCounter = 8;

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var yourGuessesText = document.getElementById("your-guesses-text");

document.onkeyup = function(event) {
    var userGuess = event.key;



}

winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessesLeftText.textContent = "Guesses left: " + guessCounter;
// yourGuessesText.textContent = ???