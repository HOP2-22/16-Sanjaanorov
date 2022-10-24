import React, { useState } from "react";
import UserCard from "./UserCard";
import users from "../users.json";

const AllUser = () => {
  const [output, setOutput] = useState(users);
  const Search = (val) => {
    setOutput(() => {
      return users.filter((user) => {
        return user.username.toLowerCase().includes(val.toLowerCase());
      });
    });
  };
  return (
    <div>
      <input
        placeholder="Search"
        onChange={(e) => {
          Search(e.target.value);
        }}
      />
      <div>
        {output.length === 0 ? (
          <div> No user found</div>
        ) : (
          output.map((userData, index) => {
            return <UserCard userData={userData} key={index} />;
          })
        )}
      </div>{" "}
    </div>
  );
};

export default AllUser;
