import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ userData }) => {
  return (
    <div>
      <div className="App">
        <img
          src={userData.avatar}
          width={180}
          height={150}
          alt={userData.username}
        ></img>{" "}
        <br />
        <Link to={userData.first_name}>
          {userData.first_name + " " + userData.last_name}
        </Link>
        <br />
        <p>{userData.username}</p>
        <br />
        <p>{userData.email}</p>
        <br />
        <p>{userData.gender}</p>
        <br />
      </div>
    </div>
  );
};

export default UserCard;
