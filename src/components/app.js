import "../App.css";
import { Comment } from "./components/list";
function App() {
  const names = ["Bob", "Mary", "Nasaa"];
  return (
    <div className="App">
      {names.map((name) => {
        return <Comment commentText={name} />;
      })}
    </div>
  );
}

export default App;
