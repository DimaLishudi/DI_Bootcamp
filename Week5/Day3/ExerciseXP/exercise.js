// 🌟 Exercise 1 : Find The Numbers Divisible By 23
// Instructions
// Create a function call displayNumbersDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 
// 368 391 414 437 460 483
// Sum : 5313


// Bonus: Add a parameter divisor to the function.

// displayNumbersDivisible(divisor)

// Example:
// displayNumbersDivisible(3) : Console.log all the numbers divisible by 3, 
// and their sum
// displayNumbersDivisible(45) : Console.log all the numbers divisible by 45, 
// and their sum

function displayNumbersDivisible(divisor=23) {
    let outcome = ""
    let divisible_sum = 0
    for (let num = 0; num <= 500; ++num) {
        if (num % divisor == 0) {
            outcome += num + " "
            divisible_sum += num
        }
    }
    console.log("Outcome:", outcome)
    console.log("Sum:", divisible_sum)
}

displayNumbersDivisible()
displayNumbersDivisible(45)


// 🌟 Exercise 2 : Shopping List
// Instructions
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no parameters.

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1

let shoppingList = ["banana", "orange", "apple"]

function myBill() {
    let bill = 0
    for (item of shoppingList) {
        if (!item in stock) {
            continue
        }
        stock[item] -= 1
        if (stock[item] <= 0) {
            delete stock[item]
            continue
        }
        bill += prices[item]
    }
    return bill
}

console.log(myBill())


// Exercise 3 : What’s In My Wallet ?
// Instructions
// Note: Read the illustration (point 4), while reading the instructions

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01


// 4. To illustrate:

// After you created the function, invoke it like this:

// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)


// Examples

// changeEnough(14.11, [2,100,0,0]) => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true


function changeEnough(price, change) {
    const change_values = [0.25, 0.10, 0.05, 0.01]
    let change_sum = 0

    for (i in change) {
        change_sum += change[i] * change_values[i]
    }
    return change_sum >= price
}

console.log(changeEnough(14.11, [2,100,0,0]))
console.log(changeEnough(0.75, [0,0,20,5]))


// 🌟 Exercise 4 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

function hotelCost() {
    let num_nights
    do {
        num_nights = parseInt(prompt("How many nights would you like to stay in hotel?"))
    } while (num_nights === undefined)
    
    return 140 * num_nights
}

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

function planeRideCost() {
    const location_prices = {
        "London" : 183,
        "Paris" : 220,
    }
    other_price = 300

    let destination
    do {
        destination = prompt("What is your destination?")
    } while (destination === undefined)

    if (destination in location_prices) {
        return location_prices[destination]
    }
    return other_price
}

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

function rentalCarCost() {
    let num_days
    do {
        num_days = parseInt(prompt("For how many days would you like to rent the car?"))
    } while (num_days === undefined)

    let discount = num_days > 10 ? 0.95 : 1
    return 40 * num_days * discount
}

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

function totalVacationCost() {
    return hotelCost() + planeRideCost() + rentalCarCost()
}

// Call the function totalVacationCost()

// console.log(totalVacationCost())

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.


// 🌟 Exercise 5 : Users
// Instructions
// Create a new structured HTML file and a new Javascript file

// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>


// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Delete the second <li> of the second <ul>.
// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)

console.log(document.getElementById("container"))

for (let item of document.getElementsByTagName("li")) {
    if (item.innerHTML === "Pete") {
        item.innerHTML = "Richard"
    }
}

const ul_collection = document.getElementsByTagName("ul")

ul_collection[1].getElementsByTagName("li")[1].remove()

for (let ul of ul_collection) {
    ul.getElementsByTagName("li")[0].innerHTML = "Dmitrii"
}

// Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.

for (let ul of ul_collection) {
    ul.classList.add("student_list")
}
ul_collection[0].classList.add("university", "attendance")

// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
// Change the font size of the whole body.

let div = document.getElementsByTagName("div")[0]
div.style.backgroundColor = "lightblue"
div.style.padding = 4

ul_collection[0].getElementsByTagName("li")[1].style.display = "none"
ul_collection[1].getElementsByTagName("li")[1].style.borderStyle = "dotted"

document.body.style.fontSize = "7mm"

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).


// 🌟 Exercise 6 : Change The Navbar
// Instructions
// Create a new structured HTML file and a new Javascript file

// see navbar.js and navbar.html

// Exercise 7 : My Book List

// see exercise7.js and exercise7.html