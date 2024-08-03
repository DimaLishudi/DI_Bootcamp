import './App.css'

import ProfileScreen from "./components/Profile";
import HomeScreen from "./components/Home";
import ShopScreen from "./components/Shop";
import { Example1, Example2, Example3 } from './components/exercise3';

import { NavLink, Link, Route, Routes } from "react-router-dom";
import ErrorBoundary from './components/ErrorBoundary';
import { useEffect, useState } from 'react';


const pages = [
  {name: "Home", path: "/", comp: HomeScreen},
  {name: "Profile", path: "/profile", comp: ProfileScreen},
  {name: "Shop", path: "/shop", comp: ShopScreen},
]

function Ex1() {
  return (
  <>
  <nav>
    {
      pages.map((page, index) => (
        <NavLink key={"nav"+index} to={page.path} className={({ isActive }) => isActive ? "active" : ""}>
          {page.name}
        </NavLink>
      ))
    }
  </nav>
  <Routes>
    {
      pages.map((page, index) => (
        <Route key = {"route" + index} path={page.path} element={
          <ErrorBoundary key = {"err" + index}><page.comp/></ErrorBoundary>
        }/>
      ))
    }
  </Routes>
  </>
  )
}

// Exercise 2 : Display JSON Data In React JS
// Create a json file, and copy/paste this data.
// Create a component named PostList.js that displays the title and the content of each object from the json file.
// Render the PostList component in your App.js file.

function Ex2() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/ex2_data.json")
    .then(data => data.json())
    .then(setData)
  }, [])
  
  return (
    <>
      {
        data.map(value => 
          <div key={value.id}>
            <h2>{value.title}</h2>
            <p>{value.content}</p>
          </div>
        )
      }
    </>
  )
}


// Exercise 3 : Display JSON Data And Parse It
// Create a json file and copy/paste this data. The file contains complex data with inner arrays up-to first and second level.
// In a new Javascript file, create a Class Component named Example1 that displays the SocialMedias array data.
// In a new Javascript file, create a Class Component named Example2 that displays the Skills data.
// In a new Javascript file, create a Class Component named Example3 that displays the Experiences array data. Add a key attribute to every new <div>.
// Import those components to the App.js file.

function Ex3() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("/ex3_data.json")
    .then(data => data.json())
    .then(setData)
  }, [])
  
  return (
    <>
      <Example1 elements={data.SocialMedias}/>
      <Example2 skills={data.Skills}/>
      <Example3 experiences={data.Experiences}/>
    </>
  )
}

// Exercise 4 : Post JSON Data With React JS
// Go to webhook and copy the link of “Your unique URL”.
// Remember to turn on “Enable CORS” on the webhook website.
// In the App.js file, create an async await function to fetch the json data from the URL you copied.
// Use a POST method and some headers.
// In the App.js file, create a button, that when clicked on, displays the response in the console.

const webhookURL = "https://webhook.site/69c13973-0099-42ec-913d-04cadc6947a9";

function Ex4() {
  return (
    <button onClick={sendData}>
      Post Some Data
    </button>
  )
}

async function sendData() {
  const data = {
    key1: 'myusername',
    email: 'mymail@gmail.com',
    name: 'Isaac',
    lastname: 'Doe',
    age: 27
  };

  const response = await fetch(webhookURL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })

  console.log(await response.text());
}

function App() {
  return (
    <>
      <Ex1/>
      <Ex2/>
      <Ex3/>
      <Ex4/>
    </>
  )
}

export default App
