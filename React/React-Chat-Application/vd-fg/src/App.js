import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <>
      Counter 1 = {count}
      <br />
      Counter 2 = {count2}
      <br />
      <button onClick={() => setCount(count + 1)}>Add By 1</button>
      <button onClick={() => setCount2(count2 - 1)}>Subtract By 1</button>
    </>
  );
}

export default App;
