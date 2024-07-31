import { useState, useEffect } from 'react'
import axios from "axios";
import './App.css'

const api = "http://localhost:5566/api/"

function App() {
  const [title, setTitle] = useState("");
  const [response, setResponse] = useState("");

  useEffect(() => {
    fetch(api + "hello")
    .then(resp => resp.json())
    .then(setTitle)
    .catch(console.log);
  }, []);

  const submit = (event) => {
    event.preventDefault();
    const body = {"message": event.target.message.value};
    axios.post(api + "world", body)
    .then(data => data.data)
    .then(setResponse)
    .catch(console.log);
  }

  return (
    <>
    <h1>Daily Challenge</h1>
    <h2>{title}</h2>
    <form onSubmit={submit}>
      <h3>Post to Server:</h3>
      <input type="text" name="message" id="Your message to server"/>
      <button>Submit</button>
    </form>
    <h2>{response}</h2>
    </>
  )
}

export default App
