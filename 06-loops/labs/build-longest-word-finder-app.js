/*You should create a function named findLongestWordLength that takes a string as an argument.
The function should return the length of the longest word in the string.
*/

function findLongestWordLength(str) {
  const words = str.split(" ");
  let longestLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestLength) {
      longestLength = words[i].length;
    }
  }

  return longestLength;
}
