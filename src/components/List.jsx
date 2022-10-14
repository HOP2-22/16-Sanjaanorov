import React from "react";
import "../styles/ListStyle.css"
export const List = () => {return <div>Temp</div>};
export const Comment = (props) => {
    const {commentText} = props;
    return <div className="comment">{commentText}</div>
}
export default List;