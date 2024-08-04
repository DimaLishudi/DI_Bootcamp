import { useState, useEffect } from 'react'
import './App.css'
import quotes from './quotes';


function randInt(max) {
  return Math.floor(Math.random() * max);
}


const colors = [
  "black",
  "grey",
  "red",
  "blue",
  "green",
  "white",
  "purple",
];

function randColor() {
  return colors[randInt(colors.length)];
}

// stolen from:
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = randInt(i + 1);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}


function App() {
  const [shuffled, setShuffled] = useState([
    quotes[1], quotes[2], quotes[3]
  ]);
  const [state, setState] = useState({});

  function generateNextQuote() {
    if (shuffled.length === 0) {
      setState({exhausted: true});
      return;
    }

    const {quote, author} = shuffled.pop();
    setShuffled([...shuffled]);
    setState({
      quote,
      author,
      backgroundColor: randColor(),
      headerColor: randColor(),
      buttonColor: randColor(),
    });
  }

  useEffect(() => {
    shuffleArray(shuffled);
    generateNextQuote();
  }, []);

  if (!state) {
    return null;
  }

  if (state.exhausted === true) {
    return (
      <h2>Sorry, we're out of quotes.<br/>Refresh the page to get more!</h2>
    )
  }

  return (
    <div className="quote" style={{backgroundColor: state.backgroundColor}}>
      <h1 style={{color: state.headerColor}}>
        {state.quote}
      </h1>
      <p>-{state.author}-</p>
      <div className="buttonWrapper">
        <button onClick={generateNextQuote} style={{backgroundColor: state.buttonColor}}>
          New quote
        </button>
      </div>
    </div>
  )
}

export default App
