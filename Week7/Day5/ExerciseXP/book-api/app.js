// 🌟 Exercise 2: Building A Basic CRUD API With Express.Js
// Instructions
// In this exercise, you’ll build a basic CRUD (Create, Read, Update, Delete) API using Express.js. Your task is to create routes to manage a collection of books.

// Create a new directory named book-api.

// Inside the book-api directory, initialize a new Node.js project and install the express package.

// Create a new file named app.js in the book-api directory.

// In app.js, import the express module and create an instance of an Express app.

// Define a basic data array containing a few book objects. Each book object should have properties like id, title, author, and publishedYear.

// Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.

// Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.

// Implement the “Read” route by defining a route at GET /api/books/:bookId. Extract the bookId parameter from the URL and use it to find the corresponding book in the books array. If the book is found, send a JSON response with the book details and a status code of 200 (OK). If the book is not found, send a 404 status with a “Book not found” message.

// Implement the “Create” route at POST /api/books. Use the express.json() middleware to parse JSON body content. Inside the route handler, create a new book object with an incremented ID and the data from the request body. Add the new book to the books array and return a JSON response with the new book and a status code of 201 (Created).

import express from "express";
const app = express();

app.use(express.json());

class Book {
    constructor(id, title, author, publishedYear) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }
};

const books = {};
let last_id = 0;

app.get("/api/books", getAll);
app.get("/api/books/:id", getBook);
app.post("/api/books", createBook);

app.listen(5000);

function getAll(req, res) {
    res.json(books);
}

function getBook(req, res) {
    const id = req.params["id"];
    const value = books[id];
    if (value === undefined) {
        return res.status(404).send("Book not found");
    } else {
        res.json(value);
    }
    res.json(books);
}


function createBook(req, res) {
    // Maybe I should check that these fields
    // and return BadRequest if any are undefined
    // Still, I think that making these fields optional is OK
    const book = new Book(last_id, req.body["title"], req.body["author"], req.body["publishedYear"]);

    books[last_id] = book;
    res.status(201).json(book);
    last_id++;
}