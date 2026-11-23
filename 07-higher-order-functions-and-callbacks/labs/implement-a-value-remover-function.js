/*You should have a destroyer function that accepts an array and one or more additional arguments.
The destroyer function should return a new array excluding all elements from the first argument that match any of the subsequent arguments.
The function must accept an indeterminate number of arguments.*/

function destroyer(arr, ...valuesToRemove) {

  let newArray = arr.filter(function(item) {
    return !valuesToRemove.includes(item);
  });

  return newArray;
}
