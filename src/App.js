import "./App.scss";
import ToDo from "./components/ToDo";

function App() {
  return (
    <div className="App">
      <h1 className="title">To Do with React.js</h1>
      <div className="container-main">
        <ToDo />
      </div>
    </div>
  );
}

export default App;
