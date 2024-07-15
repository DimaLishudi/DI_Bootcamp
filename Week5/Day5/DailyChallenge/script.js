
// Recreate the todo list above:

// Create an HTML, CSS and a JS file.

// In the HTML file
// create a form with one input type="text", and a “Submit” button.
// add an empty div below the form
// <div class="listTasks"></div>

class Task {
    constructor(task_id, text) {
        this.task_id = task_id
        this.text = text
        this.done = false
    }
}

// In the js file, you must add the following functionalities:
// Create an empty array : 
const tasks = []
const form = document.getElementById("addForm")
const listTasksElement = document.getElementsByClassName("listTasks")[0]

// Create a function called addTask(). As soon as the user clicks on the button:
// check that the input is not empty,
// then add it to the array (ie. add the text of the task)
// then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
// Each new task added should have (starting from left to right - check out the image at the top of the page)
// a “X” button. Use font awesome for the “X” button.
// an input type="checkbox". The label of the input is the task added by the user.

function doneTask(event) {
    event.preventDefault()
    const checkbox = event.target
    const id = checkbox.getAttribute("id").split("_")[1]
    const label = checkbox.parentElement.getElementsByTagName("label")[0]

    // colors work, but I don't like how it looks
    if (!tasks[id].done) {
        tasks[id].done = true
        label.style.textDecoration = "line-through"
        // label.style.color = "red"
    } else {
        tasks[id].done = false
        label.style.textDecorationLine = "none"
        // label.style.color = "black"
    }

}

function addTask(event) {
    event.preventDefault()
    const text = (new FormData(form)).get("text")
    if (text.length === 0) {
        return
    }
    tasks.push(new Task(tasks.length, text))

    // create checkbox
    const check_id = "checkbox_" + (tasks.length - 1).toString()
    const checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("id", check_id)
    checkbox.addEventListener("change", doneTask)

    // create checkbox label with text
    const label = document.createElement("label")
    label.setAttribute("for", check_id)
    label.innerHTML = text
    
    // create x button
    const icon = document.createElement("i")
    icon.setAttribute("class", "fa-solid fa-square-xmark")
    const button = document.createElement("button")
    button.setAttribute("type", button)
    button.setAttribute("class", "delButton")
    button.appendChild(icon)

    // create div container
    const div = document.createElement("div")
    div.setAttribute("class", "todoTask")
    div.appendChild(button)
    div.appendChild(checkbox)
    div.appendChild(label)
    listTasksElement.appendChild(div)

    // clear text from input form
    form.getElementsByTagName("input")[0].value = ""
}

form.addEventListener("submit", addTask)
// addEventListener("oncheck", checkTask)

// BONUS I (not mandatory):
// Change the variable tasks to an array of task objects.
// Each new task added to the array should have the properties : task_id, text and done (a boolean - false by default).
// Every new task object should have a task_id, starting from 0, and a data-task-id attribute, which value is the same as the task_id. Check out data-* attributes here.
// Create a function named doneTask(), that as soon as the user clicks on the “checkbox” input, the done property should change from false to true in the object, and from black to crossed out red in the DOM.
