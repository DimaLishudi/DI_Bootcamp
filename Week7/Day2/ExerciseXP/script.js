// 🌟 Exercise 1 : Giphy API
// Instructions
// With your knewly accumulated knowledge of the Fetch API lets write some cool code!

// You will work with this part of the documention

// You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

// Explanation of the Gif URL and the queries

// q Request Parameter: Search query term or phrase. Above, the URL is searching for “hilarious” gifs

// rating Request Parameter: Filters results by specified rating. We are searching for Level 1 gifs. Check out the ratings documentation

// api_key Request Paramater : GIPHY API Key. Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

// Create a program to retrieve the data from the API URL provided above.
// Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
// Make sure to check the status of the Response and to catch any occuring errors.

const gif_url = "https://api.giphy.com/v1/gifs/search?";
const api_key = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

async function fetchGiphy(query) {
    try {
        const resp = await fetch(gif_url + query)
        if (resp.status != 200) {
            console.log("Non-ok response status: " + resp.status);
            return;
        }
        const data = await resp.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

const query1 = new URLSearchParams({
    q: "funny",
    rating: "g",
    api_key: api_key,
});
fetchGiphy(query1);


// 🌟 Exercise 2 : Giphy API
// Instructions
// Read carefully the documention to understand all the possible queries that the URL accept.
// Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
// Console.log the Javascript Object that you receive.

const query2 = new URLSearchParams({
    q: "sun",
    rating: "g",
    limit: 20,
    offset: 2,
    api_key: api_key,
});
fetchGiphy(query2);

// 🌟 Exercise 3 : Async Function
// Instructions
// Improve the program below :

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));
// Create an async function, that will await for the above GET request.
// The program shouldn’t contain any then() method.
// Make sure to check the status of the Response and to catch any occuring errors.

async function fetchData(url="https://www.swapi.tech/api/starships/9/") {
    const resp = await fetch(url)
    const data = await resp.json()
    console.log(data.result)
}
fetchData()


// 🌟 Exercise 4: Analyze
// Instructions
// Analyse the code provided below - what will be the outcome?

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();

// "calling" instantly => (wait for 2 seconds timeout) => "resolved"