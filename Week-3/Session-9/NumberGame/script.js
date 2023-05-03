const numb = prompt("Enter a number between 1 to 10");

const playGuessingGame = (numToGuess, totalGuess) => {
  if (numb < numToGuess) {
    alert(`${numb} is too small, Guess a larger number`);
  } else if (numb > numToGuess) {
    alert(`${numb} is too large. Guess a smaller number`);
  } else if (numb == isNaN) {
    alert("Please enter a number");
  } else if (numb == numToGuess) {
    return totalGuess;
  } else {
    return 0;
  }
};
playGuessingGame(7,5)
//ask again to enter number
// number of tries