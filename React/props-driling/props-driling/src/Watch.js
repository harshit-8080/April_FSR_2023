import React from "react";

function Watch({ data, increasePrice }) {
  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.price}</h1>
      <h1>{data.company}</h1>

      <button onClick={increasePrice}>Increase Price 1000</button>
    </div>
  );
}

export default Watch;
