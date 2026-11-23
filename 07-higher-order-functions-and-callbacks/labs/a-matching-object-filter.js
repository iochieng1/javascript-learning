/*User Stories:
You should have a whatIsInAName function that accepts two arguments, an array of objects and a source object.
The whatIsInAName function should return a new array containing only the objects from the collection that have all the key–value pairs present in the source object.
If no objects match all the key–value pairs from the source, the function should return an empty array. For example:*/

function whatIsInAName(collection, source) {
  let sourceKeys = Object.keys(source);

  let result = collection.filter(function (obj) {
    return sourceKeys.every(function (key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });

  return result;
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  )
);
