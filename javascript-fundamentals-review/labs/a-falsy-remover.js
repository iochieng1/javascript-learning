/*Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a bouncer function that takes an array as argument.
The bouncer function should return a new array that contains the same elements as the array passed in as argument with the falsy elements removed.
The bouncer function should not change the array passed in as an argument*/

function bouncer(arr) {
  return arr.filter(function(element) {
    return Boolean(element);
  });
}
