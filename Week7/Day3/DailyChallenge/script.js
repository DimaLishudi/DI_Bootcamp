
// Note
// The program should take the currency which the user currently has and the currency in which they would like to receive, as well as the amount of money. Afterwards, the program will output the correct exchange rate based on the data from the APIs.

// First, you need to fetch all the supported currencies, in order to add the currencies options (ie FROM - To) in the currency converter. Check out this page on Supported Codes Endpoint from the ExchangeRate API documentation.

// To convert from a currency, to another one, you need to fetch conversion rate from the Pair Conversion API endpoint. Check out this page on Pair conversion requests from the ExchangeRate API documentation.
// Hint: You could also supply an optional AMOUNT variable in the query of the request.

// Bonus: Add this “switch” button on the page, when clicked on it will switch the currencies and display the new amount converted.
// Example : if the conversion was from EUR to GBP, as soon as the button is clicked on, the conversion should be from GBP to EUR.


const base_url = new URL("https://v6.exchangerate-api.com/v6/559cad25d27755726e288ba4/");
const form = document.querySelector("form");
const fromCurrency = document.getElementById("from");
const toCurrency = document.getElementById("to");
const errContainer = document.getElementById("errContainer");
const output = document.getElementById("output").getElementsByTagName("p")[0];


class Currency {
    constructor(code, name) {
        this.code = code;
        this.name = name;
    }
}


async function fetchJson(url) {
    const resp = await fetch(url);
    if (resp.status != 200) {
        throw new Error("Non-ok API response status: " + resp.status);
    }
    // await for error throw
    const json_data = await resp.json();
    if (json_data.result !== "success") {
        throw new Error("Non-success API response result: " + json_data.result);
    }
    return json_data;
}

function fillDropdown(currencies, dropdown) {
    for (let currency of currencies) {
        const option = document.createElement("option");
        option.innerHTML = currency.name;
        option.setAttribute("value", currency.code);
        dropdown.appendChild(option);
    }
}

async function getSupportedCurrencies() {
    // no try catch -- if we fail here, might as fail
    const resp_json = await fetchJson(new URL(base_url + "codes"));
    const currencies = resp_json.supported_codes.map(([code, name]) => new Currency(code, name));

    fillDropdown(currencies, fromCurrency);
    fillDropdown(currencies, toCurrency);

    return currencies
}

function displayResult(resp, amount) {
    const converted = (amount * resp.conversion_rate).toFixed(2);
    output.innerHTML = converted + " " + resp.target_code;
    errContainer.style.display = "none";
}

function displayError(err) {
    console.log(err);
    output.innerHTML = "";
    errContainer.style.display = "block";
}

async function convertCurrencies(event) {
    event.preventDefault();
    const data = Object.fromEntries((new FormData(form)).entries());
    const resp_json = await fetchJson(new URL(base_url + "pair" + "/" + data.from + "/" + data.to)); 
    console.log(resp_json);
    console.log(data);
    displayResult(resp_json, data.amount);
}

getSupportedCurrencies()
    .then(form.addEventListener("submit", convertCurrencies))
    .catch(err => displayError(err, ))
