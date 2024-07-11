// Instructions
// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.

const div = document.querySelector("div")
const form = div.querySelector("form")


function displayFormData(event) {
    event.preventDefault()

    const newPar = document.createElement("p")
    newPar.innerHTML = JSON.stringify(Object.fromEntries(new FormData(form).entries()))
    div.appendChild(newPar)
}

form.addEventListener("submit", displayFormData)
