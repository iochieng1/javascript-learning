let num = 5;

function factorialCalculator(number) {

  let result = 1;

  for (let i = 1; i <= number; i++) {
    result *= i;
  }
    return result
  }


const factorial = factorialCalculator(num);

const resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);


/*Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should declare a variable num and assign it a number of your choice. The assigned number should be between 1 and 20 inclusive.
Create a function named factorialCalculator that takes a number as an argument and returns the factorial of that number.
Inside the function, declare a result variable and assign it the value of 1. Using a loop, loop through all numbers from 1 to the input number(inclusive) and for each number, multiply the result variable by the current number and assign the result to the result variable. You can choose to use either a for loop, while loop or do...while loop here.
You should call the factorialCalculator function with num as the argument and assign the result to the variable factorial.
You should store the final output in the format Factorial of [num] is [factorial] and assign it to the variable resultMsg.
You should output the value of resultMsg to the console.*/