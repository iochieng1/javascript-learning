/*
You should have a smallestCommons function that accepts an array of two numbers as an argument.
The smallestCommons function should return the smallest common multiple that is evenly divisible by both numbers and all sequential numbers in the range between them.
The function should handle input where the two numbers are not in numerical order.*/

function smallestCommons(arr){
  
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);

  let numbers = [];

  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }

  let multiple = max;

  while(true) {
    let isCommonMultiple = numbers.every(function(num) {
      return multiple % num === 0;
    });

    if (isCommonMultiple) {
      return multiple;
    }

    multiple += max;
  }

}

console.log(smallestCommons([1, 5])); // 60
console.log(smallestCommons([5, 1])); // 60
console.log(smallestCommons([2, 10])); // 2520
console.log(smallestCommons([3, 7])); // 420
