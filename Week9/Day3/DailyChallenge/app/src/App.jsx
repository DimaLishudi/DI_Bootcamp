import { useState } from 'react'
import './App.css'

// Daily Challenge : Form Container
// In this challenge you will process Form data as the user enters or selects any option of the given form.

// In the App.js You will create a stateful component with 

// Create a function named handleChange:
// that retrieves the event.target of the inputs.
// and checks the status of the checkboxes (ie. “checked” or not). Use a ternary operator.

// Render a FormComponent that displays the form, and the value of the inputs.

function FormResult({first, last, age, gender, destination, diet}) {
  return (
    <>
    <p>Your name: {first} {last}</p>
    <p>Your age: {age}</p>
    <p>Your gender: {gender}</p>
    <p>Your destination: {destination}</p>
    <p>Your dietary restrictions:</p>
    {
      diet.map((checkbox, index) => (
        <p key={index}>**{checkbox.value}: {checkbox.checked ? "Yes" : "No"} </p>
      ))
    }
    </>
  )
}

function App() {
  const [formInputs, setFormInputs] = useState(null);


  const handleSubmit = (event) => {
    event.preventDefault();
    setFormInputs({
      first: event.target.first.value,
      last: event.target.last.value,
      age: event.target.age.value,
      gender: event.target.gender.value,
      destination: event.target.destination.value,
      diet: [...event.target.diet]
    });
    // [...event.target.diet] turns iterable (RadioNodeList) into a list (so we can use .map)
  }

  const form = (
    <>
      <h1>Sample Form</h1>
      <form onSubmit={handleSubmit}>
        <h4>Personal information</h4>
        <input type="text" name="first" placeholder="First Name" required/><br/>
        <input type="text" name="last" placeholder="Last Name" /><br/>
        <input type="number" name="age" placeholder="Age" min={0} max={130} required/><br/>

        <h4>Select your gender</h4>
        <div>
          <input type="radio" name="gender" value="male" id="male" required/>
          <label htmlFor="male">Male</label><br/>
          <input type="radio" name="gender" value="female" id="female"/>
          <label htmlFor="female">Female</label><br/>
          <input type="radio" name="gender" value="other" id="other"/>
          <label htmlFor="other">Other</label><br/>
          {/* <label for="huey">Huey</label> */}
        </div>

        <h4>Select your destination</h4>
        <select name="destination" defaultValue={"default"} required>
          <option value="default" disabled>-- Select destination --</option>
          <option value="USA">USA</option>
          <option value="Japan">Japan</option>
          <option value="France">France</option>
        </select>
        <br/>


        <h4>Dietary Restrictions</h4>
        <input type="checkbox" name="diet" value="Nuts free" id="nuts"/>
        <label htmlFor="nuts">Nuts free</label><br/>
        <input type="checkbox" name="diet" value="Lactose free" id="lactose"/>
        <label htmlFor="lactose">Lactose free</label><br/>
        <input type="checkbox" name="diet" value="Vegan meal" id="vegan"/>
        <label htmlFor="vegan">Vegan</label><br/>

        <button type="submit">Submit</button>
      </form>
    </>
  );

  return formInputs ? FormResult(formInputs) : form;
}

export default App
