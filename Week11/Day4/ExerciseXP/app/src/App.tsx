import "./App.css"
import Greeting from "./components/Greetings";
import Counter from "./components/Counter";
import UserCard from "./components/UserCard";
import UserList from "./components/UserList";


function App() {
  return (
    <>
      <Greeting name={"Dmitrii"}/>
      <Counter/>
      <UserCard/>
      <UserList/>
    </>
  )
}

export default App
