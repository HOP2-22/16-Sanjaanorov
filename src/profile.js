import "./App.css";
import react, { useState } from "react";
import star from "./stars.png";
import empty_star from "./star_empty.png";
import profile from "./Ellipse.png";
const App = () => {
  function starChange(e) {
    if (e.target.src === star) {
      e.target.src = empty_star;
    } else {
      e.target.src = star;
    }
  }
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Mulish"
        rel="stylesheet"
      ></link>
      <div className="container">
        <div className="pics">
          <img
            src={star}
            className="sas"
            onMouseDownCapture={starChange}
            id="1"
          ></img>
          <img
            src={star}
            className="sas"
            onMouseDownCapture={starChange}
            id="2"
          ></img>
          <img
            src={star}
            className="sas"
            onMouseDownCapture={starChange}
            id="3"
          ></img>
          <img
            src={star}
            className="sas"
            onMouseDownCapture={starChange}
            id="4"
          ></img>
          <img
            src={star}
            className="sas"
            onMouseDownCapture={starChange}
            id="4"
          ></img>
        </div>
        <div className="text">
          <p>
            Give everyone you work with—inside and outside your emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>
        </div>
        <div className="profilea">
          <img src={profile} className="profile"></img>
          <h3>Amy Klassen</h3>
        </div>
      </div>
    </div>
  );
};

export default App;
