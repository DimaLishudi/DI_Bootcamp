import './App.css'
import { Route, Routes, useParams } from "react-router-dom";
import ImageGrid from "./components/ImageGrid"
import Search from "./components/Search"
import { base_categories } from './config';


// wrapper aroung ImageGrid to parse params
function SearchImageGrid() {
  const {category} = useParams();
  return (
    <ImageGrid category={category}/>
  )
}

function App() {
  return (
    <>
      <Search/>
      <Routes>
      {
        base_categories.map(category => (
          <Route key={category} path={"/" + category} element={<ImageGrid category={category}/>}/>
        ))
      }
        <Route path="/search/:category" element={<SearchImageGrid/>}></Route>
        <Route path={"/"} element={<ImageGrid category={base_categories[0]}/>}/>
      </Routes>
      <a href="https://www.pexels.com" className="pexelLogo">
        <img src="https://images.pexels.com/lib/api/pexels-white.png" alt="Photos provided by Pexels"/>
      </a>
    </>
  )
}

export default App;
