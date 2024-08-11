"use strict";
// Daily Challenge: Type Guard with Union Types
// Description: Create a function that uses type guards to handle different types of inputs from a union type and perform specific operations based on the input type.
function processInput(input) {
    switch (typeof input) {
        case "number":
            return input ** 2;
        case "string":
            return input.toUpperCase();
        case "boolean":
            return !input;
    }
}
console.log(processInput("hello, world!"));
console.log(processInput(false));
console.log(processInput(8));
