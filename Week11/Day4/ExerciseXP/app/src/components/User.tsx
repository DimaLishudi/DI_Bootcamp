import { ReactElement } from "react";

// id is not used in the component currently, but could be needed in the future
export interface UserInfo {
  id: number;
  name: string;
  username: string;
  email: string;
};

export default function User({name, username, email}: Readonly<UserInfo>): ReactElement {
  return (
    <div className="card">
      <h1>{username}</h1>
      <h2>{name}</h2>
      <h3>{email}</h3>
    </div>
  )
}
