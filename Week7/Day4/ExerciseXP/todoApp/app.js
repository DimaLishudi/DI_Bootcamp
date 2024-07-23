import { TodoList } from "./todo.js"

const list = new TodoList()
console.log("No tasks added: " + list.listTasks());

list.addTasks("Exercise 1", "Exercise 2", "Exercise 3");
console.log("3 uncompleted task:", list.listTasks());

list.markComplete("Exercise 1", "Exercise 3", "Exercise 4")
console.log("task 1, 3 and 4 completed:", list.listTasks());
