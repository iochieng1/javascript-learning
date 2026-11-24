/*You should have a function named steamrollArray.
The steamrollArray function should accept one argument: a nested array.
The function should flatten the nested array, accounting for varying levels of nesting.
Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
Global variables should not be used.*/

function steamrollArray(arr) {
  let flattenedArray = [];

  for (let element of arr) {
    if(Array.isArray(element)) {
      flattenedArray = flattenedArray.concat(steamrollArray(element));
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
}
// Test cases
console.log(steamrollArray([[["a"]], [["b"]]]));
// ["a", "b"]

console.log(steamrollArray([1, [2], [3, [[4]]]]));
// [1, 2, 3, 4]

console.log(steamrollArray([1, [], [2, [3, []]]]));
// [1, 2, 3]

console.log(steamrollArray([["hello"], "world", [["!"]]]));
// ["hello", "world", "!"]
