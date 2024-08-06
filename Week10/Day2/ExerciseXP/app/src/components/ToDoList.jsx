import { connect } from "react-redux";
import { addToDoAction } from "../redux/actions";
import { useRef } from "react"

import ToDoElement from "./ToDoElement";


function ToDoListUnconnected({todos, addToDo}) {
    const todoTextRef = useRef();

    return (
        <div>
        <input
            type="text"
            placeholder="Add a new todo"
            ref={todoTextRef}
        />
        <button onClick={ () => addToDo(todoTextRef.current.value)}>Add Todo</button>
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

function mapStateToProps(state) {
    return { todos: state };
}

function mapDispatchToProps(dispatch) {
    return {
        addToDo: (text) => {
            dispatch(addToDoAction(text))
        }
    }
}

const ToDoList = connect(mapStateToProps, mapDispatchToProps)(ToDoListUnconnected);

export default ToDoList;
