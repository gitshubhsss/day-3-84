let userNum = prompt("Enter a number");
let randomNum = Math.floor(Math.random() * userNum) + 1;
console.log(randomNum);
let guessNum = prompt("Guess the number");

while (true) {
  if (guessNum == "quit") {
    alert("quiting the game");
    break;
  }
  if (guessNum == randomNum) {
    alert("You have guessed it right");
    break;
  } else if (guessNum < randomNum) {
    guessNum = prompt("Hint Number is bigger that this");
  } else if (guessNum > randomNum) {
    guessNum = prompt("Hint Number is smaller than this");
  } else {
    guessNum = prompt("Please try again");
  }
}
