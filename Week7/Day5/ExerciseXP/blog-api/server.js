// 🌟 Exercise 1: Building A RESTful API
// Instructions
// You’re tasked with building a RESTful API for a blog platform.
// Users should be able to create, read, update, and delete blog posts using different endpoints.

// Create a directory named blog-api.

// Inside the blog-api directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

// Install the express package by running npm install express in the terminal.

// Create a file named server.js.

// In server.js, require the express package and set up an Express app.

// Create a data array to simulate a database. Each item in the array should represent a blog post with properties like id, title, and content.

// Implement the following routes using Express:
// GET /posts: Return a list of all blog posts.
// GET /posts/:id: Return a specific blog post based on its id.
// POST /posts: Create a new blog post.
// PUT /posts/:id: Update an existing blog post.
// DELETE /posts/:id: Delete a blog post.

// Implement error handling for invalid routes and server errors.

// Start the Express app and listen on a specified port (e.g., 3000).

import express from "express";
const app = express();

app.use(express.json());

// Object (used as key-value map) give much better performance here
const data = {};
let last_id = 0;


app.get("/posts", (req, res) => {
    res.json(Object.values(data))
});

app.get("/posts/:id", returnBlog);
app.post("/posts", createPost);
app.put("/posts/:id", updatePost);
app.delete("/posts/:id", deletePost);

app.listen(5500)

function returnBlog(req, res) {
    const id = req.params["id"];
    const value = data[id];
    if (value === undefined) {
        return res.status(404).send("Blog not found");
    } else {
        res.json(value);
    }
}

function createPost(req, res) {
    const blog = {
        "id" : last_id,
        "blog" : req.body["blog"],
    }

    data[last_id] = blog;
    res.status(201).json(blog);
    last_id++;
}

function updatePost(req, res) {
    const id = req.params["id"];
    if (data[id] === undefined) {
        return res.status(404).send("Blog not found");
    } else {
        data[id] = req.body["blog"];
        res.send("Ok");
    }
}

function deletePost(req, res) {
    const id = req.params["id"];
    if (data[id] === undefined) {
        return res.status(404).send("Blog not found");
    } else {
        delete data[id];
        res.send("Ok");
    }
}
