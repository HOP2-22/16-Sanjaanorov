import React, { useEffect, useState } from "react";
import axios from "axios";
import trashicon from "./assets/trash.png";
export const Blog = () => {
  const giphy = axios.create({
    baseURL: `http://localhost:7001`,
  });
  const [deleteValue, setdeleteValue] = useState("");
  const [data1, setdata1] = React.useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await giphy.get("/posts");
        setdata1(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);
  const deleteData = async () => {
    console.log("deleting");
    try {
      const res = await axios.delete(
        `http://localhost:7001/posts/${deleteValue}`
      );
      const hoho = data1((i) => i._id === deleteValue);
      setdata1(hoho);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {data1.map((dataa) => {
        return (
          <div className="blogs">
            <p> {dataa?.text}</p>
            <p> {dataa?.tags}</p>
            <p>{dataa?.owner}</p>
            <p>{dataa?.id}</p>
            <img src={trashicon} width={"25px"} onClick={deleteData()}></img>
          </div>
        );
      })}
    </div>
  );
};
export default Blog;
