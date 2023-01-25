import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export const UserId = () => {
  const { userId } = useParams();
  console.log(userId);
  return (
    <div>
      UserId: {userId} <br />
      <Link to="/Home">Home</Link>
    </div>
  );
};
