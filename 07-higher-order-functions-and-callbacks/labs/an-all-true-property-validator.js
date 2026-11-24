/*
You should have a function named truthCheck.
The truthCheck function takes two arguments: 
an array of objects and a string representing 
a property name found in those objects.
The function should check if the property with 
the name equal to the second argument has a truthy 
value in all the objects of the array, and return 
true if it has, and false otherwise.*/

function truthCheck(collection, pre) {
  return collection.every(function (obj) {
    return Boolean(obj[pre]);
  });
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
