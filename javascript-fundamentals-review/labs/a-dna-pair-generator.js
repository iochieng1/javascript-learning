/*Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a pairElement function that takes a string of any length as an argument.
The pairElement function should return a 2d array, where each inner array has two strings inside, the first string is one base from the input, and the second string the paired base.
When given A, the function should pair it with T.
When given T, the function should pair it with A.
When given C, the function should pair it with G.
When given G, the function should pair it with C.*/

function pairElement(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "A") {
      result.push(["A", "T"]);
    } else if (str[i] === "T") {
      result.push(["T", "A"]);
    } else if (str[i] === "C") {
      result.push(["C", "G"]);
    } else if (str[i] === "G") {
      result.push(["G", "C"]);
    }
  }

  return result;
}
