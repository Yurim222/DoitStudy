import logo from "./logo.svg";
import "./App.css";

const ToDoList = () => {
  return (
    <div style={{ border: "1px solid black", width: "200px" }}>
      <h1>My Book</h1>
      <ul>
        <li>Study</li>
        <li>Exercise</li>
        <li>Read book</li>
      </ul>
    </div>
  );
};

function App() {
  return (
    <di style={{ display: "flex" }}>
      {/* <ToDoList />
      <ToDoList />
      <ToDoList /> */}
      <ToDoList />
      <ToDoList />
      <ToDoList />
    </di>
  );
}

export default App;
