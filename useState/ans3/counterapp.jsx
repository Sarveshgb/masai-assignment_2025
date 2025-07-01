import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count > 0) setCount((prev) => prev - 1); // ✅ Prevent going below 0
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Counter App</h1>
      <h2>Count: {count}</h2>
      {count === 10 && <p style={{ color: "green" }}>🎉 Goal Reached!</p>}

      <div style={{ marginTop: "20px" }}>
        <button onClick={increment} style={{ marginRight: "10px" }}>
          Increment
        </button>
        <button onClick={decrement} style={{ marginRight: "10px" }}>
          Decrement
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default CounterApp;
