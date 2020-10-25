//Task #1 isEquals() function
function isEquals (firstNumber, secondNumber) {
  return firstNumber === secondNumber;
}

//Task #2 numberToString() function
function numberToString(number) {
  return String(number);
}

//Task #3 storeNames() function
function storeNames() {
  let arrayOfNames = [];

  for (let i = 0; i < arguments.length; i++) {
    arrayOfNames[i] = arguments[i];
  }

  return arrayOfNames;
}

//Task #4 getDivision() function
function getDivision(dividend, devider) {
  if (dividend < devider) {
    return devider / dividend;
  } else {
    return dividend / devider;
  }
} 

//Task #5 negativeCount() function
function negativeCount(arrayOfNumbers) {
  let countOfNegatives = 0;

  for (let i = 0; i < arrayOfNumbers.length; i++) {

    if (arrayOfNumbers[i] < 0) {
      countOfNegatives++;
    }

  }

  return countOfNegatives;
}

//Task #6 letterCount() function
function letterCount(stringToExplore, letterInTheString) {
  let countOfOccurances = 0;

  for (let i = 0; i < stringToExplore.length; i++) {

    if (stringToExplore[i].toLowerCase() === letterInTheString.toLowerCase()) {
      countOfOccurances++;
    }

  }

  return countOfOccurances;
}

//Task #7 countPoints() function
function countPoints(arrayOfTheMatchResults) {
  let pointsCounter = 0;
  let splitArray = [];
  const winnerPoint = 3;

  for (let i = 0; i < arrayOfTheMatchResults.length; i++) {
    splitArray[i] = arrayOfTheMatchResults[i].split(':');

    for(let j = 0; j < splitArray[i].length; j++) {

      if (Number(splitArray[i][j]) > Number(splitArray[i][j + 1])) {
        pointsCounter += winnerPoint;
      } else if (Number(splitArray[i][j]) === Number(splitArray[i][j + 1])) {
        pointsCounter++;
      }

    }

  }

  return pointsCounter;
}