// 🌟 Exercise 5: Creating And Using A Custom Module
// Instructions
// Create a directory named math-app.

// Inside the math-app directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

// Install the lodash package, a utility library, by running npm install lodash in the terminal.

// Create a file named math.js inside the math-app directory.

// In math.js, define a simple custom module that exports functions for addition and multiplication.

// Create a file named app.js in the same directory.

// In app.js, require the lodash package and the custom math module.

// Use the exported functions from the math module and the utility functions from the lodash package to perform calculations.

// Run app.js using Node.js and verify that the calculations are correct.


// I'm really confused about this tasks instruction
// So I tried to compare my implementation and lodash

import lodash_math from "lodash/math.js";
import * as custom_math from "./math.js"

const arr = [5, 12, -6, 23.5, 9];

console.log(lodash_math.sum(arr),
            custom_math.sum(arr));
// 43.5 43.5

console.log(lodash_math.min(arr),
            custom_math.min(arr));
// -6 -6

console.log(lodash_math.max(arr),
            custom_math.max(arr));
// 23.5 23.5
