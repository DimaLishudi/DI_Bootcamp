// 🌟 Exercise 2: Advanced Module Usage Using ES6 Module Syntax
// Instructions
// Create a file named data.js.

// Inside data.js, define an array of objects, each representing a person with properties like name, age, and location.

// Export the array using the ES6 module syntax.

// Create another file named app.js.

// In app.js, import the array of person objects from the data.js module.

// Write a function that calculates and prints the average age of all the persons in the array.

// Use the imported array and the average age function in app.js.

// Run app.js and confirm that the average age is correctly calculated and displayed.


const { products } = require("./products.js")

function getProductInfo(product_name) {
    product_name = product_name.toLowerCase();
    const idx = products.findIndex(product => product.name.toLowerCase() === product_name);
    if (idx === -1) {
        throw Error(`product with name ${product_name} is not found`)
    }

    return products[idx]
}

try {
    console.log(getProductInfo("apples"));
    console.log(getProductInfo("hummus"));
    console.log(getProductInfo("oranges"));
} catch (err) {
    console.log(err);
}
