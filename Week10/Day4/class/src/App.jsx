import Counter from "./features/counter/Counter";
import Users from "./features/users/Users";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h2>Redux Toolkit</h2>
        <Users />
        <Counter />
      </div>
    </>
  );
}

export default App;
