// String.fromCharCode() | check against unicode #s for a-z
// alert("Enter a letter.")

// declare variables and reset function:

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

function reset () {
    guessCounter = 9;
    guessesLeftText.textContent = guessCounter;
    userGuesses = [];
    yourGuessesText.textContent = userGuesses;
    compChoice = letters[Math.floor(Math.random() * letters.length)];
}

// reset everything and give user instructions:

winsText.textContent = wins;
lossesText.textContent = losses;

alert("Press any letter key to guess. Good Luck!");

reset();

// define what happens when a key is pressed:

document.onkeyup = function(event) {
    if(event.keyCode >= 65 && event.keyCode <= 90) {
    
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
    } else {
        alert("Please press a letter key to guess.")
    }
}