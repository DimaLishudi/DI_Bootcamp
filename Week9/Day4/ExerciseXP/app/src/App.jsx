import './App.css'

import About from "./components/About";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Products from "./components/Products";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/">Home</Link>
      </header>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:id" element={<Products/>}/>
      </Routes>
    </>
  )
}

export default App
