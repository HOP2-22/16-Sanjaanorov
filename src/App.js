import React, { useState } from "react";
import "./App.css";
import Comment from "./components/List";
function App() {
  const [list, setList] = useState([]);
  const [inputValue, setValue] = useState("");
  return (
    <div class="container">
      <h3 class="header">SIGN UP</h3> <div class="line"></div> <br />
      <p>Name</p>
      <input></input>
      <div class="line"></div>
    </div>
  );
}

export default App;
