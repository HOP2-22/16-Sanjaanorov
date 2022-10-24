import React from "react";
import { Link } from "react-router-dom";
const SeeDetail = ({ el }) => {
  return (
    <div>
      {
        <div>
          <div className="AppDetailed">
            <img
              src={el.avatar}
              width={180}
              height={150}
              alt={el.username}
            ></img>{" "}
            <br />
            <Link to={el.first_name}>{el.first_name + " " + el.last_name}</Link>
            <br />
            <p>{el.username}</p>
            <br />
            <p>{el.email}</p>
            <br />
            <p>{el.gender}</p>
            <br />
          </div>
        </div>
      }
    </div>
  );
};

export default SeeDetail;
