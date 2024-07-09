// 🌟 Exercise 2 : Ternary Operator
// Instructions
// Using the code below:

function winBattle(){
    return true;
}

// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

winBattle = () => true
let experiencePoints = winBattle() ? 10 : 1
console.log(experiencePoints)
// 10


// 🌟 Exercise 3 : Is It A String ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output
// Example:

isString = arg => typeof(arg) === "string"

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false


// 🌟 Exercise 4 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

findTheSum = (a, b) => a + b
console.log(findTheSum(2, 5))


// 🌟 Exercise 5 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.


function declared(kg) {
    return kg * 1000
}
console.log(declared(1))

expression = function(kg) {
    return kg * 1000
}
console.log(expression(2))
// In expression anonymous function is declared and bound to some variable, in declaration it is implicitly bound to local variable

arrow = kg => kg * 1000
console.log(arrow(3));

// 🌟 Exercise 6 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function (numChildren, partnerName, location, job) {
    let div = document.createElement("div")
    div.innerHTML = `You will be a ${job} in ${location},
                     and married to ${partnerName} with ${numChildren} kids.`
    document.body.appendChild(div)
})(3, "Maria", "Rome", "programmer");

// 🌟 Exercise 7 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

(function (userName) {
    let div = document.createElement("div")
    div.innerHTML = userName
    let image = document.createElement("img")
    image.setAttribute("alt", "user profile picture")
    div.appendChild(image)
    document.body.appendChild(div)
})("John");


// 🌟 Exercise 8 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

function makeJuice(beverageSize) {
    (function addIngredients(ing1, ing2, ing3) {
        let div = document.createElement("div")
        div.innerHTML = `The client wants a ${beverageSize} juice, containing ${ing1}, ${ing2}, ${ing3}`
        document.body.appendChild(div)
    })("orange", "apple", "pear")
}

makeJuice("medium")

// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.


function makeJuiceV2(beverageSize) {
    const ingredients = [] 
    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3)
    }

    function displayJuice() {
        let div = document.createElement("div")
        div.innerHTML = `The client wants a ${beverageSize} juice, containing`
        for (ing of ingredients) {
            div.innerHTML += " " + ing
        }
        document.body.appendChild(div)
    }
    addIngredients("orange", "apple", "pear")
    addIngredients("peach", "pineapple", "watermelon")

    displayJuice()

}

makeJuiceV2("large")