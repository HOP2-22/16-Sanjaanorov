import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      this is main <br></br>
      <Link to={"/UserId"}>click here</Link>
    </div>
  );
}
export default Home;
