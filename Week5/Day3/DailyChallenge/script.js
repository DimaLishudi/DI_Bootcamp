// Instructions
// In this exercise we will be creating a webpage with a black background as the solar system and we will fill the solar system with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).

class Planet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}

const planets = [
    new Planet("Mercury", "grey"),
    new Planet("Venus", "brown"),
    new Planet("Earth", "blue"),
    new Planet("Mars", "red"),
    new Planet("Jupyter", "lightbrown"),
    new Planet("Saturn", "yellow"),
    new Planet("Uranus", "aquamarine"),
    new Planet("Neptune", "lightblue"),
]

const section = document.getElementsByClassName("listPlanets")[0]

for (const planet of planets) {
    const div = document.createElement("div")
    div.setAttribute("class", "planet")
    div.style.backgroundColor = planet.color
    section.appendChild(div)
}