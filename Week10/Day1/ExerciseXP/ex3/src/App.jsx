import react, { useReducer, useState } from "react";
import "./App.css"

// 🌟 Exercise 3: Implement a Todo List
// Instructions
// Objective: Create a React component that allows users to add and remove todo items using useReducer.
// Set up a new React project using create-react-app or your preferred method.
// Create a component that includes an input field for adding todos, a list to display todos, and a way to remove todos.
// Use the useReducer hook to manage the state of the todo list.
// Implement actions for adding and removing todos in your reducer.

// Hints:
// You can represent each todo as an object with properties like id and text.
// Use a unique id for each todo to identify them when removing.
// Example Starter Code:
// Here’s a simplified example to get you started:

// Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      // Add a new todo to the state
      return [...state, { id: Date.now(), text: action.text }];
    case "REMOVE_TODO":
      // Remove a todo by its id
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: todoText });
    setTodoText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
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
            {todo.text}
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
