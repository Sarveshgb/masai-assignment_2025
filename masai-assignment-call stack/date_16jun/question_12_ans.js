const library = {
  books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

  addBook(book) {
    const { title, author, year } = book;

    // Validate all fields
    if (
      typeof title !== "string" ||
      title.trim() === "" ||
      typeof author !== "string" ||
      author.trim() === "" ||
      typeof year !== "number" ||
      isNaN(year)
    ) {
      console.log("Book information is incomplete or invalid.");
      return;
    }

    this.books.push({ title: title.trim(), author: author.trim(), year });
  },

  findBookByTitle(title) {
    return this.books.find((book) => book.title === title);
  },

  removeBook(title) {
    const index = this.books.findIndex((book) => book.title === title);

    if (index !== -1) {
      this.books.splice(index, 1);
      console.log(`Removed book titled "${title}".`);
    } else {
      console.log("Book not found.");
    }
  },
};

library.addBook({ author: "George Orwell", year: 1949 });

library.addBook({ title: "1984", author: "George Orwell", year: 1949 });

console.log("Total books:", library.books.length);

console.log("Books in library:", library.books);
