import { ReactElement } from "react";

// Exercise 2: Creating a React Component with TypeScript
// Instructions
// Create a simple React component called Greeting that accepts a name prop (a string) and displays a greeting message using that prop.


interface GreetingProps {
  name: string;
};

export function Greeting(props: Readonly<GreetingProps>): ReactElement {
  return (
    <h1>Hello, {props.name}</h1>
  )
}

export default Greeting;
