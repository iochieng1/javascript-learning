/* Write a function named chunkArrayInGroups that takes an array as first argument and a number as second argument. The function should split the array into smaller arrays of length equal to the second argument and returns them as a two-dimensional array*/

function chunkArrayInGroups(arr, size) {
  let chunkedResult = [];

  for (let i = 0; i < arr.length; i += size) {
    chunkedResult.push(arr.slice(i, i + size));
  }

  return chunkedResult;
}
