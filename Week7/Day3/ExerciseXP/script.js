// Instructions
// You should use this API: https://www.swapi.tech/ to get the data and update it “randomly” in your website by clicking a button.
// Note: The API contains 83 different characters

// Create your HTML file, and add the relevant elements.

// In your JS file, create your functions :
// to retrieve the elements from the DOM.
// to get the data from the API (star wars characters).
// to display the info on the DOM: the name, height, gender, birth year, and home world of the character.

// Display the data using AJAX. Make sure to display a loading message as follows:
// You can use any of these animation icons for the loading message.
// Fontawesome link :
// https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css
// If there is an error getting the data, display a message as follows:

// You can use your own css to style the website as you see fit

const base_url = "https://www.swapi.tech/api/people/";
const infoWindow = document.getElementById("infoWindow");
const animationIcon = infoWindow.querySelector("i");
const title = infoWindow.querySelector("p");
const characterDetails = document.getElementById("characterDetails");
const button = document.querySelector("button");


async function fetchJson(url) {
    const resp = await fetch(url)
    if (resp.status != 200) {
        return new Error("Non-ok response status: " + resp.status);
    }
    // await for error throw
    return await resp.json();
}

function makeRandomId() {
    // generate random number from {1, 2 ... 83}
    return Math.floor(Math.random() * 83) + 1
}

class CharacterDetails {
    constructor(height, gender, birth_year, home_world) {
        this.height = height;
        this.gender = gender;
        this.birth_year = birth_year;
        this.home_world = home_world;
    }
}

function displayTitle(text) {
    title.innerHTML = text;
}

function snakeCaseToCapitalizedSpaced(snakeCaseText) {
    return snakeCaseText.split("_").reduce(
        (prev, cur) => prev + " " + cur[0].toUpperCase() + cur.slice(1),
        ""
    )
}

function displayDetails(details) {
    for (let detail_name in details) {
        const par = document.createElement("p");
        par.innerHTML = snakeCaseToCapitalizedSpaced(detail_name) + ": " + details[detail_name];
        characterDetails.appendChild(par);
    }
    characterDetails.style.display = "block";
}

function hideDetails() {
    characterDetails.innerHTML = ""
    characterDetails.style.display = "none";
}

function displayAnimation() {
    hideDetails();
    animationIcon.style.display = "inline-block";
    displayTitle("Loading...")
}

function hideAnimation() {
    animationIcon.style.display = "none";
}

function displayErrorMessage() {
    hideAnimation();
    displayTitle("Oh No! That Person isn't available");
}

async function displayCharacterInfo(character_id) {
    const character_data = await fetchJson(base_url + character_id);
    const properties = character_data.result.properties;
    const planet_data = await fetchJson(properties.homeworld);

    hideAnimation();
    displayTitle(properties.name);
    displayDetails({
        height: properties.height,
        gender: properties.gender,
        birth_year: properties.birth_year,
        home_world: planet_data.result.properties.name
    })
}


button.addEventListener("click", async (event) => {
    event.preventDefault();

    displayAnimation();
    try {
        const id = makeRandomId();
        await displayCharacterInfo(id);
    } catch (err) {
        console.log(err);
        displayErrorMessage();
    }
})