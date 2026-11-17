/*User Stories:

Create a frankenSplice function that accepts two arrays and an index.
Copy each element of the first array into the second array, in order, beginning at the given index, and return the resulting array.
The input arrays should remain the same after the function runs.*/

function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice();

  newArr.splice(n, 0, ...arr1);

  return newArr;
}
