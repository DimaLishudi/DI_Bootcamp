// Instructions
// Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.



const base_url = new URL("https://api.giphy.com/v1/gifs/random");
base_url.searchParams.append("api_key", "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
base_url.searchParams.append("rating", "g");

async function fetchGiphy(query) {
    try {
        const resp = await fetch(query)
        if (resp.status != 200) {
            console.log("Non-ok response status: " + resp.status);
            return null;
        }
        // return await instead of return to catch err
        return await resp.json();
    } catch (err) {
        console.log(err);
        return null;     
    }
}

function buildUrl(text) {
    const url = new URL(base_url);
    url.searchParams.append("tag", text);
    return url;
}


const form = document.querySelector("form");
const form_input = form.getElementsByTagName("input")[0];
const image_list = document.querySelector("#imageList");


form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const text = (new FormData(form)).get("search")
    if (text.length === 0) {
        return;
    }

    // clear form
    form_input.value = ""

    const gif = await fetchGiphy(buildUrl(text));
    if (gif === null) {
        return;
    }

    appendGifToDOM(gif);
})

form.addEventListener("reset", (event) => {
    event.preventDefault();

    // clear form and images
    form_input.value = ""
    image_list.innerHTML = ""
})


function appendGifToDOM(gif) {
    const gif_url = gif.data.images.fixed_width_small.url;

    const image = document.createElement("img");
    image.setAttribute("src", gif_url);

    const del_button = document.createElement("button");
    del_button.setAttribute("type", "button");
    del_button.setAttribute("class", "deleteButton");
    del_button.innerHTML = "DELETE"
    del_button.addEventListener("click", deleteImage);

    const container = document.createElement("div");
    container.setAttribute("class", "imageContainer");
    container.appendChild(image);
    container.appendChild(del_button);

    image_list.appendChild(container);
}

function deleteImage(event) {
    event.preventDefault();
    console.log(event.target.parentElement);
    event.target.parentElement.remove();
}