console.log("Yay, our JavaScript file has loaded!");

// Set state variables for our program -- these intialize the state of our system for this game
let correctAnswer = "a";
let guessesRemaining = 5;

// Convert HTML elements to JS objects
let userInput = document.getElementById("userinput").value;
let submitElem = document.getElementById("submit");
let outcomeElem = document.getElementById("outcome");

// Setup the event listener: wait until user clicks the button,
//    and then run the compareAndDisplayOutcome function
submitElem.addEventListener("click", compareAndDisplayOutcome);

// This function compares user input against the correct answer,
//   counts down the number of guesses remaining,
//   and displays a message to the user accordingly:
function compareAndDisplayOutcome() {
    
    // Every time the user submits a guess, count down the guesses remaining.
    //    Remember: this is a shortcut for guessesRemaining = guessesRemaining - 1;
    guessesRemaining--;
    
    // If userInput matches correctAnswer:
    if (userInput === correctAnswer) {

        outcomeElem.textContent = "You win!!!";

        // Stop responding to clicks on the button, since the game is over now!
        submitElem.removeEventListener("click", compareAndDisplayOutcome);

    // Otherwise (if correctAnswer and userInput DON'T match),
    //   and if there are more than 0 guesses remaining:
    } else if (guessesRemaining > 0) {
        
        outcomeElem.textContent = "Wrong, guess again! Guesses left: " + guessesRemaining;

    // Otherwise (only possibility left is that the user guessed incorrectly
    //   and there are NO guesses remaining):
    } else {
        
        outcomeElem.textContent = "You lose!!! Refresh the page to play again.";
        
        // Stop responding to clicks on the button, since the game is over now!
        submitElem.removeEventListener("click", compareAndDisplayOutcome);
    }

}
