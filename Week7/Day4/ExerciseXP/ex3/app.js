// 🌟 Exercise 3: File Management Using CommonJS Syntax
// Instructions
// Create a file named fileManager.js.

// Inside fileManager.js, define a module that exports functions for reading and writing files.
// Export functions named readFile and writeFile.
// Implement the readFile function to read the content of a specified file using the fs module.
// Implement the writeFile function to write content to a specified file using the fs module.

// Create a file “Hello World.txt” containing the sentence “Hello World !! “

// Create a file “Bye World.txt” containing the sentence “Bye World !! “

// Create another file named app.js.

// In app.js, import the functions from the fileManager.js module.

// Use the imported functions to read the content of the “Hello World.txt” text file and then write to the “Bye World.txt” with the content “Writing to the file”.

// Run app.js and verify that the file reading and writing operations are successful.


const {readFile, writeFile} = require("./fileManager.js");

readFile("Hello World.txt")
    .then(console.log)
    .then(() => writeFile("Bye World.txt", "Writing to the file\n"))
    .then(console.log)
    .catch(console.log);
