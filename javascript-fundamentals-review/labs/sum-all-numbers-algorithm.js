/*Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function named sumAll that accepts an array of two numbers.
sumAll([n, m]) should return the sum of n and m plus the sum 
of all the numbers between them. The lowest number will not always 
come first. 
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.*/

function sumAll(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);

  let total = 0;

  for (let i = min; i <= max; i++) {
    total += i;
  }

  return total;
}
