// 🌟 Exercise 2 : Work With Forms
// Instructions
// Copy the code below, into a structured HTML file:

// <form>
//   <label for="fname">First name:</label><br>
//   <input type="text" id="fname" name="firstname"><br>
//   <label for="lname">Last name:</label><br>
//   <input type="text" id="lname" name="lastname"><br><br>
//   <input type="submit" value="Submit" id="submit">
// </form> 
// <ul class="usersAnswer"></ul>


// Retrieve the form and console.log it.

// Retrieve the inputs by their id and console.log them.

// Retrieve the inputs by their name attribute and console.log them.

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>

const form = document.getElementsByTagName("form")[0]
console.log(form)

let first_name = document.getElementById("fname")
console.log(first_name)
first_name = document.getElementsByName("firstname")[0]
console.log(first_name)

let last_name = document.getElementById("lname")
console.log(last_name)
last_name = document.getElementsByName("lastname")[0]
console.log(last_name)

const user_answers = document.getElementsByClassName("usersAnswer")[0]

function makeLi(text) {
    const created = document.createElement("li")
    created.innerHTML = text
    return created
}

form.addEventListener("submit", (event) => {
    if (first_name.value.length === 0 ||
        last_name.value.length === 0) {
        return
    }
    user_answers.appendChild(makeLi(first_name.value))
    user_answers.appendChild(makeLi(last_name.value))
    event.preventDefault()
})
