/* Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:
You should have a function named uniteUnique.
The uniteUnique function should accept two or more arrays as arguments.
The function should return a new array that contains unique values from 
the argument arrays, in the order they are first found in the arguments. 
For example, an input like [1, 2, 4], [2, 3, 5] would have an output of [1, 2, 4, 3, 5].*/

function uniteUnique(...arrays) {
  let result = [];

  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      
      if (!result.includes(arrays[i][j])) {
        result.push(arrays[i][j]);
      }

    }
  }
  return result;
}
