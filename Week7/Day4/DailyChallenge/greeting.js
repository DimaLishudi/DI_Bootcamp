// Instructions
// Create a directory named daily-challenge.

// Task 1: Basic Module System

// Inside the daily-challenge directory, create a file named greeting.js.

// In greeting.js, define a function called greet that takes a name as a parameter and returns a personalized greeting message.

// Export the greet function using the Node.js module system.

// Create another file named app.js in the same directory.

// In app.js, require the greeting.js module and use the greet function to greet a user.

// Run app.js using Node.js and see the greeting message.


export function greet(name) {
    return "Hello, " + name;
}