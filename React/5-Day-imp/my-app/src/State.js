import React from "react";
import { useState } from "react";

function State() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("dummy");
  const [detail, setDetail] = useState({ name: "Pratik" });

  function f1() {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert("Number is 10");
    }
  }
  function f2() {
    if (count <= 0) {
      alert("Number is Zero");
    } else {
      setCount(count - 1);
    }
  }
  return (
    <div>
      <h1>State Number = {count}</h1>
      <button onClick={f1}>Add By 1</button>
      <button onClick={f2}>Subtract By 1</button>

      <br />
      <br />
      <br />
      <br />
      <br />

      <h1>{name}</h1>
      <input
        placeholder="Write Your Name"
        type="text"
        onChange={(event) => {
          setName(event.target.value);
          setDetail({ ...detail, name: event.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Write Your Country"
        onChange={(event) => {
          setDetail({ ...detail, country: event.target.value });
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h1>{detail.name}</h1>
      <h1>{detail.country}</h1>
      <h1>{detail.salary}</h1>
    </div>
  );
}

export default State;
