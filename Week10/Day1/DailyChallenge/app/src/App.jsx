import react, { useReducer, useState } from "react";
import "./App.css"

// Objective: Enhance the Task Manager application by adding new features, including the ability to edit tasks and filter tasks by completion status, using useContext, useReducer, and useRef.
// Instructions
// Set up a new React project using create-react-app or your preferred method.
// Extend the existing Task Manager application (from the previous exercise) by adding the following features:
// Edit Tasks: Allow users to edit existing tasks by clicking on them.
// Filter Tasks: Implement buttons to filter tasks by completion status (e.g., show all, show completed, show active).
// Use useRef to enable task editing and update the task text when the user makes changes.
// Implement actions in the reducer for editing tasks and filtering tasks.

// Hints:
// To enable task editing, you can add an “Edit” button next to each task that, when clicked, activates an input field for editing the task text.
// Use a state variable or a ref to track the edited task text before saving.
// Implement actions like EDIT_TASK and FILTER_TASKS in the reducer to handle task editing and filtering.
// Use conditional rendering to display tasks based on the selected filter.


// Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.text, isCompleted: false}];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "EDIT_TODO":
      state.find((todo) => todo.id === action.id).text = action.value;
      return [...state];
      case "COMPLETE_TODO": {
        const idx = state.findIndex((todo) => todo.id === action.id);
        // console.log(idx);
        // console.log(state[idx]);
        state[idx].isCompleted = state[idx].isCompleted ? false : true;
        // console.log(state[idx]);
        // state[idx] = {id : state[idx].id, text: state[idx].text, isCompleted: state[idx].isCompleted};
        return [...state];
      }
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: todoText});
    setTodoText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  const handleEditTodo = (id, event) => {
    dispatch({ type: "EDIT_TODO", id, value: event.target.value });
  };

  const handleMarkCompleted = (id) => {
    dispatch({ type: "COMPLETE_TODO", id});
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="text"
                   onChange={(event) => handleEditTodo(todo.id, event)}
                   style={todo.isCompleted ? {textDecoration: "line-through"} : {}}
                   value={todo.text}
            />
            <button onClick={() => handleMarkCompleted(todo.id)}>Mark as {todo.isCompleted ? "completed" : "uncompleted"}</button>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
