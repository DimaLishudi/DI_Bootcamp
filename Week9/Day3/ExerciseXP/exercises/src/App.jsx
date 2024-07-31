import React from 'react'
import './App.css'
import {ErrorBoundary} from "./ErrorBoundary";

// Exercise 1 : React Error Boundary Simulation
// Instructions
// In the App.js file create a class component named BuggyCounter.

// This component :
// will hold a counter property in the state. The counter value starts at 0.
// will render the counter. Every time the users clicks on it, the function handleClick() will be called, and add +1 to the counter property.

// If the counter reaches 5, you will throw an error ‘I crashed!’

// In another Javascript file, create the ErrorBoundary class component, it will hold an error property in the state. The error value is set to null.
// Use the componentDidCatch lifecycle to set the value of the error property.
// Render an error message with some details. (We will use this component to wrap the BuggyCounter component in our below simulations)
// Use this below code to show the Error

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
  }

  render() {
    const handleClick = () => {
      this.setState((state) => {
        if (state.counter === 5) {
          throw "I crashed!";
        }
        return {counter: state.counter + 1}
      });
    }
    return (
      <h1 onClick={handleClick}>
        {[this.props.name]}: {this.state.counter}
      </h1>
    )
  }
}


class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoriteColor: "red", show: true};
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
    console.log("did mount");
    setTimeout(() => this.setState({favoriteColor: "yellow"}), 1000);
  }

  componentDidUpdate() {
    console.log("after update");
  }

  getSnapshotBeforeUpdate() {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  render() {
    return (
      <>
        <h1>
          My favorite color is <i>{this.state.favoriteColor}</i>
        </h1>
        <button onClick={() => this.setState({favoriteColor: "blue"})}>
          Change color
        </button>

        {
          this.state.show && this.props.children
        }
        <button onClick={() => this.setState({show: false})}>
        DELETE
        </button>
      </>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("Child component is unmounting");
  }

  render() {
    return (
      <h3>
        Hello World!
      </h3>
    )
  }
}


function App() {
  return (
    <>
      <ErrorBoundary>
        <BuggyCounter name="Counter 1.1"/>
        <BuggyCounter name="Counter 1.2"/>
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter name="Counter 2"/>
      </ErrorBoundary>
      <BuggyCounter name="Counter 3"/>

      <Color>
        <Child/>
      </Color>
    </>
  )
}

export default App;