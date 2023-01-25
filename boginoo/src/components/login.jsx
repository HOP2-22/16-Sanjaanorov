import React from "react";
import "../styles/App.css";
import logo from "../assets/logo2.png";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../App";
import Header from "./header";
let text = "";
let text2;
const Login = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);
  const [user2, setUser] = useState();
  const [password2, setPassword] = useState();
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5050/auth/login", {
        email: user2,
        password: password2,
      });
      setCurrentUser(response.data.user);
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  const onchange = (el) => {
    text = el.target.value;
    function reverse(str) {
      str.split("").reverse().join("");
      return str;
    }
    setUser(reverse(text));
    console.log(user2);
  };
  const onchange2 = (el) => {
    text = el.target.value;
    function reverse(str) {
      str.split("").reverse().join("");
      return str;
    }
    setPassword(reverse(text));
    console.log(password2);
  };

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Ubuntu"
        rel="stylesheet"
      ></link>
      <p className="topLoginText">Нэвтрэх</p>
      <div>
        <p className="emailP">Цахим хаяг</p>
        <input
          placeholder="name@mail.domain"
          className="emailInput"
          onChange={onchange}
        ></input>
      </div>
      <div>
        <p className="passP">Нууц үг</p>
        <input type="password" className="passInput" onChange={onchange2} />
      </div>
      <div>
        <input type="checkbox" className="rememberCheck" />
        <p className="rememberP">Намайг сана</p>
        <Link to="/forgotpass">
          <button className="forgotPassTextOnLogin">Нууц үгээ мартсан</button>
        </Link>
      </div>
      <button className="loginButtonOnLogin" onClick={handleLogin}>
        <p className="loginButtonOnLoginText">Нэвтрэх</p>
      </button>
      <Link to="/signup">
        <button className="signupOnLogin">
          <p>Шинэ хэрэглэгч бол энд дарна уу?</p>
        </button>
      </Link>
    </div>
  );
};
export default Login;
