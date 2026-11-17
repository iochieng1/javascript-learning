/*User Stories:

You should have a function named pyramid that takes three arguments.
The first argument should be a string representing the pattern character to repeat in your pyramid.
The second argument should be an integer representing the number of rows in the pyramid.
The third argument should be a Boolean value.
The pyramid function should return a string in which the pattern character is repeated and arranged to form a pyramid having the vertex facing upwards when the third argument is false.
When the third argument is true the pyramid should have the vertex facing downwards.
The vertex row should have a single pattern character, and each other row should have two pattern characters more than the previous one.
Each row should start with a number of spaces sufficient to put the center character of each row in the same column and there should not be any spaces at the end of each row.
The pyramid should start and end with a newline character.*/

function pyramid(character, count, isInverted) {
  let result = "\n";

  for (let i = 0; i < count; i++) {
    let spaces;
    let chars;

    if (isInverted) {
      spaces = i;
      chars = 2 * (count - i) - 1;
    } else {
      spaces = count - 1 - i;
      chars = 2 * i + 1;
    }

    result += " ".repeat(spaces) + character.repeat(chars) + "\n";
  }

  return result;
}
