/*You should have a getIndexToIns function that takes two arguments: an array and a number.
You should use the sort method to sort the array in ascending order.
Your getIndexToIns function should return the lowest index at which the number should be inserted by using the findIndex method.
Your getIndexToIns function should always return a number.*/

function getIndexToIns(arr, num){

  arr.sort((a, b) => a - b);

  let index = arr.findIndex((element) => element >= num);

  if (index === -1) {
    return arr.length;
  }
  return index;
}
