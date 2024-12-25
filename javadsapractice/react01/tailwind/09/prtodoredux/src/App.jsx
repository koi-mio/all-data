import "./App.css";
import AddTodo from "./components/AddTodo.jsx";
import Todos from "./components/Todos.jsx";

function App() {
  return (
    <>
      <div>
        <h1> Redux toolkit redux saga developing </h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
