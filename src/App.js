import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import AllUser from "./components/AllUser";
import "./App.css";
import SeeDetail from "./components/SeeDetail";
import UserIs from "./components/UserIs";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllUser />} />
        <Route path=":username" element={<UserIs />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
