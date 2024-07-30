import { useState } from 'react'
import './App.css'

function App() {
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ]);

  const addVote = (event, index) => {
    event.preventDefault();
    languages[index].votes++;
    setLanguages([...languages]);
  } 
  

  return (
    <>
      <h1> Vote for Your Favourite Language!</h1>
      {
      languages.map(({name, votes}, index) => (
        <div className="languageWrapper" key={index}>
          <div>{votes}</div>
          <div>{name}</div>
          <button onClick={(event) => addVote(event, index)}>Click Here</button>
        </div>
      ))
      }
    </>
  )
}

export default App
