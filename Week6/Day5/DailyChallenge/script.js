function sortString(str) {
    return str.toLowerCase().replace(/ /g, "").split("").sort().join("")
}

function checkIfAnagrams(first, second) {
    return sortString(first) === sortString(second)
}

// let's print some examples:

class Input {
    constructor(first, second) {
        this.first = first
        this.second = second
    }
}

const inputs = [
    new Input("Astronomer", "Moon starer"),
    new Input("School master", "The classroom"),
    new Input("The Morse Code", "Here come dots"),
    new Input("Abra", "cadabra"),
]

for (let {first, second} of inputs) {
    const relation = checkIfAnagrams(first, second) ? "are" : "aren't" 
    console.log(`${first} and ${second} ${relation} anagrams`)
}
