// 🌟 Exercise 3: Building A Basic CRUD API With Express And Axios Using A Data Module
// Instructions
// In this exercise, you’ll build a basic CRUD (Create, Read, Update, Delete) API using Express.js and Axios to retrieve data from the JSONPlaceholder API and respond with that data in your own API. You’ll also create a separate module to handle data retrieval using Axios.

// Part 1: Setting Up the Express Server

// Create a new directory named crud-api.

// Inside the crud-api directory, initialize a new Node.js project and install the express and axios packages.

// Create a new file named app.js in the crud-api directory.

// In app.js, import the express module and create an instance of an Express app.

// Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.

import express from "express";

const app = express();
app.listen(5000);
console.log("Server starts listening");

// Part 3: Using the Data Module in the Express App

// Inside app.js, import the dataService module you created.

// Create an endpoint in your Express app that uses the fetchPosts function from the dataService module to retrieve data from the JSONPlaceholder API.

// Respond with the fetched data from the JSONPlaceholder API. https://jsonplaceholder.typicode.com/posts

// Print a message in the console to indicate that the data has been successfully retrieved and sent as a response.

import { fetchPosts } from "./data/dataService.js";

app.get("/posts", async (req, res) => { 
    try {
        const posts = await fetchPosts();
        res.json(posts);
        console.log("Data sent")
    } catch (err) {
        console.log(err);
        res.status(500).send("Could not fetch posts for you");
    }
});