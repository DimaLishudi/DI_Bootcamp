// 🌟 Exercise 3 : Transform The Sentence
// Instructions
// Add this sentence to your HTML file then follow the steps :

// <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
// <strong>end</strong> you <strong>will</strong> be great Developers!
// <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>


// In the JS file:

// Declare a global variable named allBoldItems.

let allBoldItems = []

// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

const paragraph = document.getElementsByTagName("p")[0]

function getBoldItems() {
    for (item of paragraph.getElementsByTagName("strong")) {
        allBoldItems.push(item)
    }
}
// In our case we can run this function just once
getBoldItems()

// Create a function called highlight() that changes the color of all the bold text to blue.

function highlight() {
    // getBoldItems()
    for (item of allBoldItems) {
        item.style.color = "blue"
    }
}

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

function returnItemsToDefault() {
    // getBoldItems()
    for (item of allBoldItems) {
        item.style.color = "black"
    }
}

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);
