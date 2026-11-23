/*You should have an array of objects named books where each object in the array should have a string title, another string authorName, and a number releaseYear.
Your books array should have a minimum of three objects.
You should have a callback function named sortByYear that accepts two books as parameter for sorting the array.
The sortByYear function should return -1 if the releaseYear of the first book is smaller than that of the second book.
The sortByYear function should return 1 if the releaseYear of the first book is bigger than that of the second book.
The sortByYear function should return 0 if both releaseYear values are equal.
You should filter out books written after a certain year such as 1950 from the books array and save the filtered array in a new array named filteredBooks.
You should sort the books in the filteredBooks array according to their releaseYear in ascending order. You learned in a prior lesson that the sort() method will sort 
the array in place. This means the filteredBooks array will be mutated.*/

let books = [
  {
    title: "Things Fall Apart",
    authorName: "Chinua Achebe",
    releaseYear: 1958
  },

  {
   title: "Animal Farm",
    authorName: "George Orwell",
    releaseYear: 1945
  },

  {
    title: "To Kill a MockingBird",
    authorName: "Harper Lee",
    releaseYear: 1960
  }
];

function sortByYear(book1, book2){
  if (book1.releaseYear < book2.releaseYear){
    return -1
  } else if (book1.releaseYear > book2.releaseYear){
    return 1
  } else {
    return 0;
  }
}

let filteredBooks = books.filter(function(book) {
  return book.releaseYear <= 1950;
});

filteredBooks.sort(sortByYear);

console.log(filteredBooks);
