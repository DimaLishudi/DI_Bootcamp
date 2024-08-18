import { ReactElement } from "react";

// Exercise 4: Creating a React Component with Optional Props
// What You Will Learn:

// Instructions
// Create a React component called UserCard that accepts optional props name and age and displays them in a card. If the props are not provided, the component should display a default message.


type UserCardProps = Readonly<{
  name?: string;
  age?: number;
}>

function UserCard(props: UserCardProps): ReactElement {
  const age = props.age
    ? props.age + " years old"
    : (<a href="placeholder.com">Add your age here</a>);

  return (
    <>
      <h3>{props.name ?? "Guest"}</h3>
      <h4>{age}</h4>
    </>
  )
}

export default UserCard;
