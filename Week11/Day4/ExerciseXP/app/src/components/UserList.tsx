import { useEffect, useState, ReactElement } from "react";
import axios from "axios";

import User, { UserInfo } from "./User";


// Exercise 5: Using useEffect Hook with TypeScript in React
// Instructions
// Create a functional React component that uses the useEffect hook to fetch data from an API when the component mounts. Display the fetched data in the component.

// Also see components/User


function jsonObjToUser(jsonUsers: Record<string, string>[]): UserInfo[] {
  const users: UserInfo[] = [];

  for (const jsonUser of jsonUsers) {
    const id = parseInt(jsonUser["id"]);
    const name = jsonUser["name"];
    const username = jsonUser["username"];
    const email = jsonUser["email"];
    if (!id || !name || !username || !email) {
      throw new Error("Cannot parse ")
    }
    users.push({id, name, username, email})
  }
  console.log(users);
  return users;
}

export default function UserList(): ReactElement {
  const [users, setUsers] = useState<UserInfo[]>([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(data => jsonObjToUser(data.data))
      .then(setUsers)
      .catch(console.log);
  }, []);

  return (
    <>
    {
      users.map(user => (
        <User key={user.id} {...user}/>
      ))
    }
    </>
  );
}
