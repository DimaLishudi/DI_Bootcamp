import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux";

import { addTaskAction } from "../redux/actions";

function TaskAdder() {
  const date = useSelector(state => state.task.selectedDate);
  const dispatch = useDispatch();
  const taskTextRef = useRef();

  if (!date) {
    return null;
  }
  
  const addTask = () => {
    const text = taskTextRef.current.value;
    if (!text) {
      return;
    }
    taskTextRef.current.value = "";
    dispatch(addTaskAction(text));
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
