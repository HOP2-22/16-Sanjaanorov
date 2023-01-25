import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [desc, setDesc] = useState("");
  const [succes, setSucces] = useState("");
  const [dataa, setDataa] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:8800/post");
        setDataa(data);
      } catch (error) {
        console.log("erer");
      }
    };
    fetchData();
  }, [succes]);
  const createPost = async () => {
    try {
      await axios
        .post("http://localhost:8800/post/create", {
          text: desc,
          owneriD: inputValue,
        })
        .then((el) => setSucces(el));
    } catch (error) {
      console.log("erer");
    }
  };

  const DeletePost = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8800/post/${id}`);
      console.log(response);
      const temp = dataa.filter((item) => item._id !== id);
      setDataa(temp);
    } catch (error) {
      console.log("erer");
    }
  };
  return (
    <div style={{ padding: 0, margin: 0 }}>
      <div
        style={{
          display: "flex",

          alignItems: "center",
          height: "100vh",
          background: "linear-gradient(#e66465, #9198e5);",
          flexDirection: "column",
        }}
      >
        <p style={{ color: "aqua", fontSize: "55px" }}>Todo list</p>
        <div style={{ display: "flex", gap: "30px" }}>
          <input
            type="text"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <input
            type="text"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              createPost();
              console.log("done");
            }}
          ></button>
        </div>
        <div>
          {dataa.map((el) => {
            console.log(el);
            return (
              <div
                style={{
                  display: "flex",
                  width: "100vw",
                  flexDirection: "row",
                  gap: "20px",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    border: "1px solid black",
                    borderRadius: "2px",
                    marginTop: "10PX",
                    width: "70px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p>{el.text}</p>
                </div>

                <div
                  style={{
                    border: "1px solid black",
                    borderRadius: "2px",
                    marginTop: "10PX",
                    width: "250px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p>{el.owneriD}</p>
                </div>
                <p
                  style={{ fontSize: "25px" }}
                  onClick={() => {
                    DeletePost(el._id);
                  }}
                >
                  🗑️{" "}
                </p>
                <p style={{ fontSize: "25px" }}>🖊️</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
