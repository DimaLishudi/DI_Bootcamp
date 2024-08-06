import { useSelector, useDispatch } from "react-redux";
import { toggleTaskAction, removeTaskAction, editTaskAction } from "./TaskSlice";
import { useState, useRef } from "react";

export function Task({id}) {
  const [isEditMode, setIsEditMode] = useState(false);
  const {text, isCompleted} = useSelector(
    (state) => state.task.tasks[state.task.selectedDate].find(value => value.id === id)
  );
  const dispatch = useDispatch();
  const textRef = useRef();

  const remove = () => dispatch(removeTaskAction({id}));
  const toggle = () => dispatch(toggleTaskAction({id}));

  const discardEdit = () => {
    textRef.current.value = text;
    setIsEditMode(false)
  };
  const saveEdit = () => {
    dispatch(editTaskAction({id, text: textRef.current.value}));
    setIsEditMode(false);
  }

  return (
    <div className="task">
      <li>
        <input type="checkbox" onChange={toggle}/>
          <input
            type="text"
            defaultValue={text}
            className={isCompleted ? "completed" : "uncompleted"}
            readOnly={!isEditMode}
            ref={textRef}/>
          <button onClick={remove}>X</button>
          {/* <button onClick={toggle}>Mark as {isCompleted ? "uncompleted" : "completed"}</button> */}
          {
            isEditMode
            ? <>
                <button onClick={discardEdit}>Discard</button>
                <button onClick={saveEdit}>Save</button>
              </>
            : <button onClick={() => setIsEditMode(true)}>Edit</button>
          }
      </li>
    </div>
  )
}


export default Task;
