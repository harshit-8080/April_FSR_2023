const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json()); // To Parse the JSON request data.

let books = [];

// home api
app.get("/", (req, res) => {
  res.send({ message: "ok" });
});

// get books
app.get("/books", (req, res) => {
  if (books.length == 0) {
    return res.json({ response: "No BOOKS", sucess: true });
  }
  return res.json({ response: books, sucess: true });
});

// create - Add a book
app.post("/books", (req, res) => {
  //   console.log(req.body);

  let newBook = req.body;
  newBook["id"] = uuidv4();

  if (newBook.price > 3000) {
    books.push(newBook);
    return res.json({ message: "Added a New Book" });
  }

  return res.json({ error: "Book Price is less than 3000" });
});

// get a book by ID
app.get("/books/:id", (req, res) => {
  const bookId = req.params.id;

  const book = books.find((b) => {
    if (b.id == bookId) {
      return b;
    }
  });

  if (!book) {
    return res.json({ error: "Book ID is INVALID" });
  }

  return res.json({ message: book });
});

// update a specific book
app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const updatedPrice = req.body.price;

  const book = books.find((b) => {
    if (b.id == bookId) {
      return b;
    }
  });

  if (!book) {
    return res.json({ error: "Can't update price as BookId is INVALID" });
  }

  book["price"] = updatedPrice;
  return res.json({ message: "Price Updated", book: book });
});

// delete a book
app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;

  const book = books.find((b) => {
    if (b.id == bookId) {
      return b;
    }
  });

  if (!book) {
    return res.json({ error: "Can't delete book as BookId is INVALID" });
  }

  books = books.filter((item) => item.name != book.name);

  return res.json({ message: "delete sucessfully", books: books });
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
