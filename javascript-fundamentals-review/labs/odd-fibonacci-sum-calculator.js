/*User Stories:

You should have a sumFibs function that accepts a number as an argument.
The sumFibs function should return the sum of all odd Fibonacci numbers that are less than or equal to the given number.
The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two previous ones.
Only the odd Fibonacci numbers should be added to the sum.
*/
function sumFibs(num) {
  let a = 0;
  let b = 1;
  let sum = 0;

  while (a <= num) {
    if (a % 2 !== 0) {
      sum += a;
    }

    let next = a + b;
    a = b;
    b = next;
  }

  return sum;
}
