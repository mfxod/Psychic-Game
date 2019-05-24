// psuedocode:
// alert("Instructions")
// assign comp's letter choice to a variable
// let user guess up to 9 times
// display user guesses in HTML
// guessCounter-- in HTML
// if user guess correctly: wins++ in HTML; reset 
// if user doesn't guess within 9 tries: losses++ in HTML; reset


var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var compChoice = "";
var wins = 0;
var losses = 0;
var guessCounter = "";
var userGuesses = "";

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var yourGuessesText = document.getElementById("your-guesses-text");

winsText.textContent = wins;
lossesText.textContent = losses;

function reset () {
    guessCounter = 9;
    guessesLeftText.textContent = guessCounter;
    userGuesses = [];
    yourGuessesText.textContent = userGuesses;
    compChoice = letters[Math.floor(Math.random() * letters.length)];
}

reset();

document.onkeyup = function(event) {
    var letterGuess = event.key;

    guessCounter--;
    guessesLeftText.textContent = guessCounter;
    userGuesses.push(letterGuess);
    yourGuessesText.textContent = userGuesses.join(" "); 
    // why doesn't this make counter go to zero and show 9th guess?
    
    if (letterGuess === compChoice) {
        alert("You win! The correct answer is " + letterGuess + ".");
        winsText.textContent = wins += 1;
        reset();
    }
    // why does it have to be "+= 1" instead of "wins++"?

    if (guessCounter === 0) {
        alert("You lose. The correct answer was " + compChoice + ". Try again!");
        lossesText.textContent = losses += 1;
        reset();
    }
}