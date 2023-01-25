import "./App.css";
import List, {Temp} from "./components/List";
function App() {
    const names = ["Bob", "Mary", "Nasaa"];
    return(
        <div className="App">
            <p>hello world</p>
            {names.map((name)=>{
                return <div>{name}</div>
            })}
            </div>
    )
}
export default App;