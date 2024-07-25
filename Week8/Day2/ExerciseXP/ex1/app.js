// 🌟 Exercise 1 : Building A RESTful API With Database Connection
// Instructions
// You’re tasked with building a RESTful API for a blog platform.
// Users should be able to create, read, update, and delete blog posts using different endpoints.

// Create a directory named blog-api.

// Inside the blog-api directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

// Install the express package by running npm install express in the terminal.

// Create a file named server.js.

// In server.js, require the express package and set up an Express app.

// Create a posts table in postgres database, with the properties like id, title, and content.

// Implement the following routes using Express:

// GET /posts: Return a list of all blog posts.
// GET /posts/:id: Return a specific blog post based on its id.
// POST /posts: Create a new blog post.
// PUT /posts/:id: Update an existing blog post.
// DELETE /posts/:id: Delete a blog post.

// Create this directory structure:

// server
//     |_ config
//     |_ controllers
//     |_ models
//     |_ routes

// Implement error handling for invalid routes and server errors.

// Start the Express app and listen on a specified port (e.g., 3000).


import express from "express"
import { router } from "./src/routes/routes.js"
import cors from "cors"

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/", router);

app.listen(process.env.PORT || 5000, () => {
    console.log("Start listening");
})