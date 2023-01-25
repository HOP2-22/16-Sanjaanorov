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
      <p className="topSignupText">Бүртгүүлэх</p>
      <div>
        <p className="emailP">Цахим хаяг</p>
        <input placeholder="name@mail.domain" className="emailInput"></input>
      </div>
      <div>
        <p className="passP">Нууц үг</p>
        <input type="password" className="passInput" />
        <p className="passP2">Нууц үгээ давтна уу?</p>
        <input type="password" className="passInput2" />
        <button className="signup">
          <p className="signupText">Бүртгүүлэх</p>
        </button>
      </div>
    </div>
  );
};
export default Signup;
