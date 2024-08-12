// 🌟 Exercise 1: Class with Access Modifiers
// Instructions
// Create a class Person with the following properties:

// A private property firstName of type string.
// A private property lastName of type string.
// A public property age of type number.
// A protected property address of type string.
// Also, include a constructor to initialize these properties and a method getFullName that returns the full name of the person.

class Person {
  private firstName: string;
  private lastName: string;
  public age: number;
  protected address: string;

  constructor(firstName: string, lastName: string, age: number, address:string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}


// 🌟 Exercise 2: Extending Interfaces
// Instructions
// Create an interface Vehicle with properties make and model, both of type string, and a method start that returns a string. Then create an interface Car that extends Vehicle and includes an additional property numberOfDoors of type number.

interface Vehicle {
  maker: string;
  model: string;

  start(): void;
};

interface Car extends Vehicle {
  numberOfDoors: number;
}

class Sedan implements Vehicle {
  public maker: string;
  public model: string;

  constructor(maker: string, model: string) {
    this.maker = maker;
    this.model = model;
  }

  public start(): void {
    console.log("Brrrrr");
  }
}


// 🌟 Exercise 3: Using Intersection Types
// Instructions
// Create a function combineObjects that accepts two objects and combines them using intersection types. The function should return a new object containing all properties from both input objects.

function combineObjects<T, U>(first: T, second: U): T & U {
  return {...first, ...second};
}

console.log(combineObjects(
  new Person("John", "Smith", 30, "Brown street"),
  new Sedan("Toyota", "Camry")
));


// 🌟 Exercise 4: Using Generics with Classes
// Instructions
// Create a generic class Stack<T> that supports the following operations:

// A push method that adds an element of type T to the stack.
// A pop method that removes the top element from the stack and returns it.
// An isEmpty method that checks whether the stack is empty.

class Stack<T> {
  private buf: T[]

  constructor() {
    this.buf = [];
  }

  public push(value: T) {
    this.buf.push(value);
  }

  public pop(): T {
    if (this.isEmpty()) {
      throw new Error("pop called on empty array");
    }
    // we can safely type assert here
    return this.buf.pop() as T;
  }

  public isEmpty(): boolean {
    return this.buf.length === 0;
  }
}


// 🌟 Exercise 5: Using Generics with Functions
// Instructions
// Create a generic function filterArray<T> that accepts an array of type T and a predicate function (element: T) => boolean. The function should return a new array containing elements that satisfy the predicate.

function filterArray<T>(arr: T[], predicate: (element: T) => boolean) {
  return arr.filter(predicate);
}

console.log(
  filterArray(["AAAA", "BBBBBBBB", "C", ""], (element: string) => element.length < 5)
);
