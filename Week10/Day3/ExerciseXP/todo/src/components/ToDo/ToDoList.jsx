import { useRef } from "react"
import { useSelector, useDispatch } from "react-redux";

import { addToDoAction } from "./ToDoSlice";
import ToDoElement from "./ToDoElement";


function ToDoList() {
    const todos = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();
    const todoTextRef = useRef();

    const addToDo = (text) => dispatch(addToDoAction({text}));

    return (
        <div>
        <input
            type="text"
            placeholder="Add a new todo"
            ref={todoTextRef}
        />
        <button onClick={ () => addToDo(todoTextRef.current.value) }>Add Todo</button>
        <ul>
        {
            todos?.map((todo) => (
                <ToDoElement id={todo.id} key={todo.id}/>
            ))
        }
        </ul>
        </div>
    )
}

export default ToDoList;
