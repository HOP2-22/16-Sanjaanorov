import React from "react";
import "../styles/ListStyle.css";
const Comment = (props) => {
  const { commentText } = props;
  return (
    <div className="boxbottom">
      <div className="comment">
        <input type="checkbox" />
        {commentText}
      </div>
      <button className="xbutton">❌</button>
    </div>
  );
};
export default Comment;
