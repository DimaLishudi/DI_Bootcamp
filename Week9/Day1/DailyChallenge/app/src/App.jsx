// import { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './App.css'

const images = [
  {
    link:  "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg",
    legend: "Hong Kong",
  },
  {
    link: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp",
    legend: "Macao",
  },
  {
    link: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp",
    legend: "Japan",
  },
  {
    link: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp",
    legend: "Las Vegas",
  },
];

//  style={{width: 480, height: 384}}

function App() {
  return (
    <Carousel width={480}>
      {
        images.map(({link, legend}, index) => (
          <div key={index}>
            <img src={link} alt={legend}/>
            <p className="legend">{legend}</p>
          </div>
        ))
      }
        {/* <div>
            <img src="assets/1.jpeg" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src="assets/2.jpeg" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src="assets/3.jpeg" />
            <p className="legend">Legend 3</p>
        </div> */}
    </Carousel>
  )
}

export default App
