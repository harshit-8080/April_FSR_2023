import React, { useState, useRef } from "react";

function Ref() {
  console.log("Rendering .......");
  let localVariable = 0;
  const [stateVariable, setStateVariable] = useState(0);
  const refVariable = useRef(0);

  return (
    <div>
      <h1>Local Variable - {localVariable}</h1>
      <button
        onClick={() => {
          localVariable = localVariable + 1;
          console.log("Local --> ", localVariable);
        }}
      >
        Add To Local
      </button>

      <br />
      <br />

      <h1>State Variable - {stateVariable}</h1>
      <button
        onClick={() => {
          setStateVariable(stateVariable + 1);
          console.log("State ---> ", stateVariable);
        }}
      >
        Add To State
      </button>

      <br />
      <br />

      <h1> Ref Variable - {refVariable.current}</h1>
      <button
        onClick={() => {
          refVariable.current++;
          console.log("Ref ---> ", refVariable.current);
        }}
      >
        Add to Ref
      </button>
    </div>
  );
}

export default Ref;
