import {useRef} from "react";
// import "./App.css";
// import Comment from "./components/List";
export function Input() {
  const inputref.current = useRef()
function focus(){
    console.log(inputRef.current)
}
  return (
    <div>
<input ref={inputRef.current}></input>
<button onClick={focus}>Focus</button>
    </div>
  );
}
export default Input;
