import { useSelector, useDispatch } from "react-redux";
import { toggleToDoAction, removeToDoAction } from "./ToDoSlice";

export function ToDoElement({id}) {
    const {text, isCompleted} = useSelector((state) => state.todo.todos.find(value => value.id === id));
    const dispatch = useDispatch();

    const remove = () => dispatch(removeToDoAction({id}));
    const toggle = () => dispatch(toggleToDoAction({id}));
    return (
        <li>
            <span className={isCompleted ? "completed" : "uncompleted"}>
                {text}
            </span>
            <button onClick={remove}>Remove</button>
            <button onClick={toggle}>Mark as {isCompleted ? "uncompleted" : "completed"}</button>
        </li>
    )
}


export default ToDoElement;
