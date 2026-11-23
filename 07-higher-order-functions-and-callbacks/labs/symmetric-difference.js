/*
Your function diffArray should return an array.
Your function should take two arguments, both of which are arrays.
Your function should make use of the filter method.
Your function should return the symmetric difference of the two arrays.
Your function should return an empty array if there is no symmetric difference.
Your function should list the items found only in the first array before the items found only in the second array, preserving their original order within each array.
*/

function diffArray(arr1, arr2) {

  let firstDifference = arr1.filter(function(item) {
    return !arr2.includes(item);
  });

  let secondDifference = arr2.filter(function(item) {
    return !arr1.includes(item);
  });

  return firstDifference.concat(secondDifference);
}
