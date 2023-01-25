import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = ({ el }) => {
  return (
    <div>
      <div class="Home">
        <Link to="LogIn">Login</Link>
        <Link to="Contact">Contact</Link>
        <Link to="Products">Products</Link>
        <Link to="Services">Services</Link>
        <button>Get Access</button>
      </div>
    </div>
  );
};

export default Home;
