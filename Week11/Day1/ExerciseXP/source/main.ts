// 🌟 Exercise 1: Hello, World! Program
// Instructions
// Create a TypeScript program that logs the message “Hello, World!” to the console.

function ex1() {
  console.log("Hello, World");
}
ex1();


// 🌟 Exercise 2: Type Annotations
// Instructions
// Define a variable age of type number and a variable name of type string, and log them to the console.

function ex2() {
  const age: number = 10;
  const name: string = "Dmitrii";
  console.log(age, name);
}
ex2();


// 🌟 Exercise 3: Union Types
// Instructions
// Define a variable id that can be either a string or a number.
function ex3() {
  let id: string | number = 5;
  console.log(id);
  id = "ID";
  console.log(id);
}
ex3();


// 🌟 Exercise 4: Control Flow with if...else
// Instructions
// Write a function that takes a number as input and returns a string indicating whether the number is positive, negative, or zero.
function ex4(input: number): string {
  if (input > 0) {
    return "positive";
  }
  if (input < 0) {
    return "negative";
  }
  return "zero";
}
ex4(12.5);
ex4(0);


// 🌟 Exercise 5: Function Overloading
// Instructions
// Create a function called add that can add two numbers together or concatenate two strings.

type addable = number | string;

function ex5(first: number, second: number): number;
function ex5(first: string, second: string): string;
function ex5(first: addable, second: addable): addable {
  if (typeof first === "number" && typeof second === "number") {
    return first + second;
  }
  if (typeof first === "string" && typeof second === "string") {
    return first + second;
  }
  throw new Error(`Types ${typeof first} and ${typeof second} should not differ` )
}

console.log(ex5(5, 6));
console.log(ex5("Hello, ", "World"));
// compile error:
// ex5("Hello, ", 6) 


// 🌟 Exercise 6: Tuple Types

// Instructions
// Create a function getDetails that takes a name and age as input and returns a tuple containing the input values and a greeting message.

function getDetails(name: string, age: number): [string, number, string] {
  return [name, age, "Hello, " + name];
}
console.log(getDetails("Dmitrii", 22));

// 🌟 Exercise 7: Object Type Annotations

// Instructions
// Create a function createPerson that returns an object representing a person, with properties for name and age, using object type annotations.

interface Person {
  name: string;
  age: number;
}

function createPerson(): Person {
  return {name: "Dmitrii", age: 22};
}
console.log(createPerson());


// 🌟 Exercise 8: Type Assertions
// Instructions
// Given an HTML element, use a type assertion to cast it to a specific type and access its properties.

function ex8(): HTMLFormElement {
  const form = document.getElementById("login") as HTMLFormElement;
  console.log(form)
  return form;
}
ex8();


// 🌟 Exercise 9: switch Statement with Complex Conditions
// Instructions
// Create a function getAction that takes a string representing a user role and returns an action for the user. Use a switch statement with complex conditions to handle multiple roles.


// I'm not sure what exactly is expected in this task
type UserRole = "guest" | "user" | "admin";
enum UserAction {
  REGISTER,
  LOGIN,
  EDIT
}

function getAction(role: UserRole): UserAction {
  switch (role) {
    case "guest":
      return UserAction.REGISTER;
    case "user":
      return UserAction.LOGIN;
    case "admin":
      return UserAction.EDIT;
  }
}


// 🌟 Exercise 10: Function Overloading with Default Parameters
// Instructions
// Create an overloaded function greet that can either take a name and greet the person, or take no arguments and return a default greeting.

function ex10(name?: string): void {
  if (name !== undefined) {
    console.log("Hello, " + name);
    return;
  }
  console.log("You can register in the form below");
}