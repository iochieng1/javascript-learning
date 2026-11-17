function largestOfAll(arr) {
  let largestNumbers = [];

  for (let i = 0; i < arr.length; i++){
    let largest = Math.max(...arr[i]);
    largestNumbers.push(largest);
  } 
  return largestNumbers;
}
