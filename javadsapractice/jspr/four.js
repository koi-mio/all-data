// const myObject = {
//   jav: "java",
//   js: "script",
//   css: "style",
//   html: "hypertext",
// };

// for (const key in myObject) {
//   if (Object.hasOwnProperty.call(myObject, key)) {
//     const element = myObject[key];
//     console.log(`${key}: ${element}`);
//   }
//   console.log("=-=-=-=-=-=-=-=-=-=-=-==");

//   console.log(` ${key}  shortcut is for ${myObject}`);
// }

const programming = ["js", "java", "python", "cpp", "c"];

for (const key in programming) {
  console.log(key);
  console.log(programming[key]);
}

const coding = ["js", "java", "python ", "cpp", "rust", "golang"];

coding.forEach(function greet(val) {
  console.log(val);
});

coding.forEach((item) => {
  console.log(item);
});

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
  }

  listBooks() {
    console.log("Book List:");
    this.books.forEach((book) => {
      console.log(`${book.title} by ${book.author}, ${book.year}`);
    });
  }
}

// Example usage:
let library = new Library();

library.addBook(new Book("To Kill a Mockingbird", "Harper Lee", 1960));
library.addBook(new Book("1984", "George Orwell", 1949));
library.addBook(new Book("Pride and Prejudice", "Jane Austen", 1813));

library.listBooks();

library.removeBook("1984");

library.listBooks();
