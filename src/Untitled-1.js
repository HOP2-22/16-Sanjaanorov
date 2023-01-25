import "./App.css";
import react, { useState } from "react";
import users from "./users.json";

const InputBar = () => {
  return <input placeholder="Lookup"></input>;
};
const UserCard = ({ userData }) => {
  return (
    <div>
      <div className="App">
        <img
          src={userData.avatar}
          width={180}
          height={150}
          alt={userData.username}
        ></img>{" "}
        <br />
        <p>{userData.first_name + " " + userData.last_name}</p>
        <br />
        <p>{userData.username}</p>
        <br />
        <p>{userData.email}</p>
        <br />
        <p>{userData.gender}</p>
        <br />
      </div>
    </div>
  );
};
const App = () => {
  console.log(users);
  const [output, setOutput] = useState(users);
  const Search = (val) => {
    setOutput(() => {
      return users.filter((user) => {
        return user.username.toLowerCase().includes(val.toLowerCase());
      });
    });
  };
  return (
    <div>
      <input
        placeholder="Search"
        onChange={(e) => {
          Search(e.target.value);
        }}
      />
      <div>
        {output.length === 0 ? (
          <div> No user found</div>
        ) : (
          output.map((userData, index) => {
            return <UserCard userData={userData} key={index} />;
          })
        )}
      </div>{" "}
    </div>
  );
};

export default App;
