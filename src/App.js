import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
function App() {
  const [number, setNumber] = useState(0);
  return (
    <div class="container">
      <h1 class="haha">ToDo list</h1>
      <div class="input">
        <input id="input" type="text" />
        <button class="addbutton">Add</button>
      </div>

      <div class="bottomdiv">
        <div class="containercheck">
          <input type="checkbox"></input>
          haha
        </div>
        <div class="containercheck">
          <input type="checkbox"></input>
          hehe
        </div>
        <div class="containercheck">
          <input type="checkbox"></input>
          hoho
        </div>
      </div>
    </div>
  );
}

export default App;
// <div className="App">
//   {" "}
//   <p>{number}</p>{" "}
//   <button
//     onClick={() => {
//       setNumber(number + 1);
//     }}
//   >
//     {" "}
//     Plus{" "}
//   </button>{" "}
//   <button
//     onClick={() => {
//       setNumber(number - 1);
//     }}
//   >
//     {" "}
//     minus{" "}
//   </button>{" "}
// </div>
