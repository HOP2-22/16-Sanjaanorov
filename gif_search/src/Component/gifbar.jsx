import React, { useState } from "react";
import axios, { intercept } from "axios";
import { useEffect } from "react";
export const Gifbar = () => {
  const [inputValue, setInputValue] = useState();

  const giphy = axios.create({
    baseURL: `https://api.giphy.com/v1/gifs/search?api_key=W6VMUY7SK2kwYQry5FCSa8nTc7Wcgl2V&q=${inputValue}&limit=26&offset=0&rating=g&lang=en`,
  });

  const [gif, setGif] = React.useState([]);
  const getData = () => {
    const fetchPosts = async () => {
      try {
        const res = await giphy.get("/");
        setGif(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPosts();
  };
  return (
    <div>
      <input
        className="ui input search"
        type="text"
        placeholder="gifs"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={getData}> gif </button>
      <div>
        {gif.map((dataa) => {
          return (
            <div className="gifs">
              <img src={dataa?.images.fixed_height.url} alt="hho" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
