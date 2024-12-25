import { useState } from "react";
// import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed inset-x-0 flex-wrap justify-center px-2 bottom-12">
        <div className="flex flex-wrap justify-center gap-3 px-2 py-2 bg-white shadow-lg rounded-3xl">
          <button
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
            style={{ backgroundColor: "gray" }}
            onClick={() => setColor("gray")}
          >
            Gray
          </button>
          <button
            className="px-4 py-1 text-black rounded-full shadow-lg outline-none"
            style={{ backgroundColor: "white" }}
            onClick={() => setColor("white")}
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
