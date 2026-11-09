function repeatStringNumTimes(str, num) {
  let accumulatedString = "" ;

  for (let i = 0; i < num; i++) {
    accumulatedString += str;
  }
  return accumulatedString;
}

/*You should create a function named repeatStringNumTimes that takes two parameters: a string and a number.
The function should return the string repeated the specified number of times.
If the number is less than or equal to zero, the function should return an empty string.*/