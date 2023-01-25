import React from "react";
import { useParams } from "react-router-dom";
import users from "../users.json";
import SeeDetail from "./SeeDetail";

const UserIs = () => {
  const { username } = useParams();
  console.log(username);
  return (
    <div>
      {users.map((user) => {
        return user.first_name === username && <SeeDetail el={user} />;
      })}
    </div>
  );
};

export default UserIs;
