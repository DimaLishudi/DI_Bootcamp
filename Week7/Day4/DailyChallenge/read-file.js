// Task 3: Advanced File Operations

// Inside the daily-challenge directory, create a directory named files.

// Inside the files directory, create a file named file-data.txt and add some text content to it.

// Create a file named read-file.js.

// In read-file.js, require the fs module and read the content from the file-data.txt file. Display the content in the terminal.

// Create another file named app.js.

// In app.js, require the read-file.js module and call the function you’ve written to display the file’s content.

// Run app.js using Node.js and see the content of the file.

import fs from "fs/promises"

export async function displayFileContents(file_name) {
    fs.readFile(file_name, "utf-8").then(console.log);
}