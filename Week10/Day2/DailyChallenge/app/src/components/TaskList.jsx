import { useSelector } from "react-redux";
import Task from "./Task";

function TaskList() {
  const date = useSelector(state => state.task.selectedDate);
  const tasks = useSelector(state => state.task.tasks[state.task.selectedDate]);
  if (!date) {
    return null;
  }
  return (
    <>
      <h2>
        Your tasks for {date}:
      </h2>
      <ul>
      {
        tasks?.map((task) => (
          <Task id={task.id} key={task.id} />
        ))
      }
      </ul>
    </>
  );
}

export default TaskList;
