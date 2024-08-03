import { useState } from 'react'
import './App.css'

function App() {
  const [sum, setSum] = useState();

  function calculate(event) {
    event.preventDefault();

    setSum(parseInt(event.target.first.value) +
           parseInt(event.target.second.value));
  }

  return (
    <div>
      <form onSubmit={calculate}>
        <h3>Adding Two Numbers</h3>
        <input type="number" name="first"/>
        <input type="number" name="second"/>
        <br/>
        <button type="submit">Add Them!</button>
      </form>
      <h1>{sum}</h1>
    </div>
  )
}

export default App
