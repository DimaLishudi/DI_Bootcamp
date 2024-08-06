import { useRef } from "react"
import { useDispatch } from "react-redux";

import { addTaskAction } from "./TaskSlice";

function TaskAdder() {
  const dispatch = useDispatch();
  const taskTextRef = useRef();
  
  const addTask = () => {
    const text = taskTextRef.current.value;
    if (!text) {
      return;
    }
    taskTextRef.current.value = "";
    dispatch(addTaskAction({text}));
  }
  
  return (
    <>
      <input
      type="text"
      placeholder="Add a new task"
      ref={taskTextRef}
      />
      <button onClick={ addTask }>Add Task</button>
    </>
  )
}

export default TaskAdder;
