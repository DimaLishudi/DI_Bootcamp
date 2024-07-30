import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Car from "./Components/Car"

function Ex1() {
  const carinfo = {name: "Ford", model: "Mustang"};
  return Car(carinfo);
}

// Exercise 2 : Events
// Instructions
// Part I:
// Create a new Functional component named Events.
// Create an arrow function called clickMe. It should alert the string ‘I was clicked’.
// In the return, create a button that when clicked on, calls the clickMe function. Use the onClick event handler.


// Part II:
// In the Events Functional component, in the return, create an input tag that has an onKeyDown event handler, that listens to a function called handleKeyDown.
// When you type something in the input field and press the ‘Enter key’, the handleKeyDown function will check if the ‘Enter key’ was pressed and will alert a message with the input text value:

// Part III:
// In the Events Functional component, using the state hook, declare a state variable named isToggleOn and set it to true.
// In the return, create a button that has an onClick event that will switch the state variable between ‘ON’ and ‘OFF’
// Create a function that will be called by the onClick event handler. In the function you should toggle the value of the isToggleOn state variable.
function Events() {
  const clickMe = () => alert("I was clicked");
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert(event.target.value);
    }
  }

  const [isToggleOn, setIsToggleOn] = React.useState(true);

  return (
    <>
    <button onClick={clickMe}>
      Click me!
    </button>
    <br/>
    <input type="text" onKeyDown={handleKeyDown}>
    </input>
    <br/>
    <button onClick={() => setIsToggleOn(!isToggleOn)}>
      {isToggleOn ? "ON" : "OFF"}!
    </button>
    </>
  );
}


// Exercise 3 : Phone And Components
// Instructions

// Part I : Phone
// Create a new Functional Component named Phone. Use the state hook to create the following state variables:

// brand: "Samsung"
// model: "Galaxy S20"
// color: "black"
// year: 2020

// In the return of the Phone component, display the values of the state variables.
// Import the Phone component and display it in your App.js.

// Part II : Change the Phone
// In the Phone component create a function named changeColor that updates the state variable to ‘blue’
// In the return, add a button with an onClick event that will call the changeColor function to change the color state variable.
function Phone() {
  const [brand, setBrand] = React.useState(["Samsung"]);
  const [model, setModel] = React.useState(["Galaxy S20"]);
  const [color, setColor] = React.useState(["black"]);
  const [year,  setYear]  = React.useState([2020]);

  return (
    <>
      <h1>
        My phone is a {brand}
      </h1>
      <p>
        It is {color} {model} from {year}
      </p>

      <button onClick={() => setColor(["blue"])}>
        Change color
      </button>
    </>
  );
}

// Exercise 4 : UseEffect Hook
// Instructions
// Create a new Functional Component named Color, with a state variable favoriteColor which value is “red”.
// Output the value in a header tag.

// Note : The useEffect() hook is called after the component is rendered.
// In the useEffect(), alert “useEffect reached”


// Note: The return is called when a component gets updated. It re-renders the DOM, with the new changes.
// Create a button that when clicked on, calls a function that changes the value of the favoriteColor property to “blue”.
function Color() {
  const [favoriteColor, setFavoriteColor] = React.useState(["red"]);
  React.useEffect(() => console.log("useEffect reached"), [favoriteColor]);

  return (
    <>
      <h1>
        My favorite color is <i>{favoriteColor}</i>
      </h1>
      <button onClick={() => setFavoriteColor(["blue"])}>
        Change color
      </button>
    </>
  );
}



function App() {
  return (
    <>
      <Ex1/>
      <Events/>
      <Phone/>
      <Color/>
    </>
  )
}

export default App
