import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(5);
  const addValue = () => {
    setCounter(counter + 1);
    console.log("value added value lio ......", counter, " ", Math.random());
  };
  const decreaseValue = () => {
    setCounter(counter - 1);
    console.log("value remove value  lio ......", counter, " ", Math.random());
  };

  return (
    <div className="p-4 bg-gray-400">
      <h1 className="text-2xl font-bold">kio mio</h1>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        reprehenderit atque praesentium modi a ipsa?
      </p>
      <h2>Counter : {counter}</h2>
      <button
        onClick={addValue}
        className="px-4 py-2 mt-4 text-white bg-blue-500"
      >
        Add value{" "}
      </button>
      <br />
      <button
        onClick={decreaseValue}
        className="px-4 py-2 mt-2 text-white bg-red-500"
      >
        {" "}
        decrease value{" "}
      </button>
    </div>
  );
}

export default App;
