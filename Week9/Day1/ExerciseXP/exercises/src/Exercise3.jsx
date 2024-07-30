// In a separate Javascript file, named Exercise3.js, create a new Class Component called Exercise that contains some HTML tags.
// create a <h1> tag and set its color to red, and the background color to lightblue.
// create a paragraph, a link, a form, an image and a list.
// Import Exercise component to the App.js file and display it.
import React from "react"
import reactLogo from './assets/react.svg'
import './Exercise.css'


export class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };
  }

  render() {
    return (
      <>
      <h1 style={{color: "red", backgroundColor: "lightblue"}}>
        This is a Header
      </h1>

      <h1 style={this.style_header}>
        This is a Header too!
      </h1>

      <p className="para">This is a Paragraph</p>
    
      <a href="www.google.com"> This is a link</a><br/>

      <form>
        This is a form.<br/>
        <input placeholder="Input"></input>
        <button>Submit</button>
      </form>

      <img src={reactLogo} className="logo react" alt="React logo" />

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      </>
    )
  }
}

export default Exercise;