import React from "react";
import "../styles/App.css";
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Ubuntu"
        rel="stylesheet"
      ></link>
      <p className="loginHerhen">Хэрхэн ажилладаг вэ?</p>
      <Link to="/">
        <img className="loginLogo" src={logo} alt="" />
      </Link>
      <p className="topForgotText">Нууц үг сэргээх</p>
      <p className="forgotText">
        Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.
      </p>
      <div>
        <p className="emailP">Цахим хаяг</p>
        <input placeholder="name@mail.domain" className="emailInput"></input>
      </div>
      <div>
        <button className="forgotButton">
          <p className="sendText">Илгээх</p>
        </button>
      </div>
    </div>
  );
};
export default Signup;
