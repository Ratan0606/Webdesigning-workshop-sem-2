import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="container">

      <div className="card">

        <h1>React Counter <br /> Application</h1>

        <h2>{count}</h2>

        <div className="buttons">
          <button onClick={increment}>
            Increment (+)
          </button>

          <button onClick={decrement}>
            Decrement (-)
          </button>
        </div>

        <button className="reset" onClick={resetCount}>
          Reset
        </button>

      </div>

    </div>
  );
}

export default App;