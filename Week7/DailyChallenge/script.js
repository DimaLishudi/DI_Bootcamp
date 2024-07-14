// Instructions
// 1rst Daily Challenge
// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.

function makeAllCaps(arr) {
    return new Promise((resolve, reject) => {
        if (arr.constructor !== Array) {
            reject("Argument is not array")
            return
        }

        // I prefer for loop instead of .map when working with reject
        const result = []
        for (let element of arr) {
            if (element.constructor !== String) {
                reject("Array element is not a string")
                return
            }
            result.push(element.toUpperCase())            
        }
        resolve(result)
    })
}

// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.

function sortWords(words) {
    return new Promise((resolve, reject) => {
        if (words.constructor !== Array) {
            reject("Argument is not array")
            return
        }
        if (words.length <= 4) {
            reject("Array length too small")
            return
        }
        const result = [...words]
        result.sort()
        resolve(result)
    })
}

// else, reject the promise with a reason.
// Test:

// //in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

// //in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

// //in this example, you should see in the console, 
// // the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))


// 2nd Daily Challenge
const morse = `{
  "0": "-----",
  "1": ".----/",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`
// Create three functions. The two first functions should return a promise..

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)

function toJs() {
    return new Promise((resolve, reject) => {
        let obj;
        try {
            obj = JSON.parse(morse)
        } catch (error) {
            reject(error)
            return
        }
        if (obj.length === 0) {
            reject("Empty object")
        } else {
            resolve(obj)
        }
    })   
}

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object


function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
        const input = prompt("Enter your word or sentence").trim().toLowerCase()

        const result = []
        for (let char of input) {
            if (!(char in morseJS)) {
                reject(char + " is not part of morse alphabet")
                return
            }
            result.push(morseJS[char])

        }
        resolve(result)
    })
}

// The third function called joinWords(morseTranslation), takes one argument: the morse translation array

// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

function joinWords(morseTranslation) {
    return morseTranslation.join("\n")
}

// Chain the three functions.
// Example:
// "Hello" gives you
// ....
// .
// .-..
// .-..
// ---

toJs()
    .then(toMorse)
    .then(joinWords)
    .then(console.log)
