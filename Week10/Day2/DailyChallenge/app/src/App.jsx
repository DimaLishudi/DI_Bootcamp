import Calendar from "./components/Calendar";
import TaskAdder from "./components/TaskAdder";
import TaskList from "./components/TaskList";
import './App.css'

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <Calendar/>
      <TaskList/>
      <TaskAdder/>
    </>
  );
}

export default App;
