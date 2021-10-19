let randomNumber = getRandomNumber();
let output = document.querySelector(".final-output");
let newGameButton = document.querySelector(".btnNewGame");
let currentTries = 1;
const maxTries = 7;

newGameButton.addEventListener("click", newGame);

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function guessNumber() {
  let guess = document.querySelector(".inputs-Values").value;
  console.log(randomNumber);
  //Collect input from the user
  console.log('currentTries= ', currentTries);
  console.log('maxTries= ', maxTries);

  if (currentTries < maxTries) {

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
    if (!isNaN(guess) && guess > 0 && guess <= 100) {
      if (guess < randomNumber) {
        output.innerText = `Number is too low, try again\nYou still have ${maxTries - currentTries} tries left`;
      } else if (guess > randomNumber) {
        output.innerText = `Number is too high, try again\nYou still have ${maxTries - currentTries} tries left`;
      } else if (Number(guess) === randomNumber) {
        output.innerText = `Guess is correct. You win!\nIt took you ${currentTries} tries!`;
      }
    } else {
      output.innerText = "Please enter a number between 1 and 100";
    }
    currentTries++;
  } else {
    output.innerText = `You Lose, the number was ${randomNumber}`;
  }
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user
  randomNumber = getRandomNumber();
  document.querySelector(".inputs-Values").value = "";
  output.innerText = "Guess a number between 1 and 100";
  currentTries = 1;
}


//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
