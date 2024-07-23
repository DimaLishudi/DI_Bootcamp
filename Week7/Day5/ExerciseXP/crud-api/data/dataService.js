// Part 2: Creating a Data Module for Axios

// Inside the crud-api directory, create a new directory named data.

// Inside the data directory, create a new file named dataService.js.

// In dataService.js, import the axios module and create a function named fetchPosts that makes a GET request to the JSONPlaceholder API to fetch data for all posts.

// Export the fetchPosts function.

import axios from "axios"

export async function fetchPosts() {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
    if (resp.status != 200) {
        throw new Error("Non-OK status code: " + resp.status);
    }
    return resp.data;
}