import React from "react";
import users from "../users.json";
import userData from "./AllUser";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const SeeDetail = () => {
  const { username } = useParams();
  let [detailcard, setdetailcard] = useState();
  useEffect(() => {
    users.map((el) => {
      if (el.first_name === username) {
        setdetailcard(el);
      }
    });
  }, []);
  console.log(detailcard);
  const [output, setOutput] = useState(users);
  return (
    <div>
      {
        <div>
          <div className="AppDetailed">
            <img
              src={detailcard.avatar}
              width={180}
              height={150}
              alt={detailcard.username}
            ></img>{" "}
            <br />
            <Link to={detailcard.first_name}>
              {detailcard.first_name + " " + detailcard.last_name}
            </Link>
            <br />
            <p>{detailcard.username}</p>
            <br />
            <p>{detailcard.email}</p>
            <br />
            <p>{detailcard.gender}</p>
            <br />
          </div>
        </div>
      }
    </div>
  );
};

export default SeeDetail;
