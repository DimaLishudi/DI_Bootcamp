// 🌟 Exercise 2 : Building A Basic CRUD API With Database Connection
// Instructions
// In this exercise, you’ll build a basic CRUD (Create, Read, Update, Delete) API using Express.js. Your task is to create routes to manage a collection of books.

// Create a new directory named book-api.

// Inside the book-api directory, initialize a new Node.js project and install the express package.

// Create a new file named app.js in the book-api directory.

// In app.js, import the express module and create an instance of an Express app.

// Define a basic data books table with properties like id, title, author, and publishedYear.

// Create this directory structure:

// server
//     |_ config
//     |_ controllers
//     |_ models
//     |_ routes

// Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.

// Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.
// Implement the “Read” route by defining a route at GET /api/books/:bookId. Extract the bookId parameter from the URL and use it to find the corresponding book in the books array. If the book is found, send a JSON response with the book details and a status code of 200 (OK). If the book is not found, send a 404 status with a “Book not found” message.
// Implement the “Create” route at POST /api/books.


import express from "express"
import { router } from "./src/routes/routes.js"
import cors from "cors"

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api", router);

app.listen(process.env.PORT || 5000, () => {
    console.log("Start listening");
})