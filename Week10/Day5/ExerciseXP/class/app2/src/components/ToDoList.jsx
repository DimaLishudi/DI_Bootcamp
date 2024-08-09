import { useState, useRef } from "react";
import Counter from "./Counter";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const taskRef = useRef();

  const addToDo = () => {
    setTasks([...tasks, taskRef.current.value]);
  }

  return (
    <>
    <Counter/>
    <h2>To Do:</h2>
    <input type="text" placeholder="New task..." ref={taskRef}/>
    <button onClick={addToDo}>Add Task</button>
    <ul>
    {
      tasks?.map((task, idx) => (
        <li key={idx}>{task}</li>
      ))
    }
    </ul>
    </>
  )
}

export default ToDoList;