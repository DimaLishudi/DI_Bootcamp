// Instructions
// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.

// Follow these steps :

// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

const story = document.getElementById("story")
const form = document.getElementById("libform")
const noun = document.getElementById("noun")
const adje = document.getElementById("adjective")
const pers = document.getElementById("person")
const verb = document.getElementById("verb")
const place = document.getElementById("place")

const fields = [noun, adje, pers, verb, place]

form.addEventListener("submit", (event) => {
    event.preventDefault()
    for (let field of fields) {
        if (field.value.length === 0) {
            return
        }
    }
    story.innerHTML = `Today ${noun.value} is going to ${verb.value}\
                       right next to the ${pers.value} right in the \
                       ${adje.value} ${place.value}!`
})