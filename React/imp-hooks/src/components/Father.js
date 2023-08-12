import React, { useCallback, useState } from "react";
import ChildComponet from "./ChildComponet";

function Father() {
  console.log("Father Component rendering");
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const printStatus = useCallback(() => {
    console.log("Printing Status of Toggle => ", toggle);
  }, [toggle]);

  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add By 1</button>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>

      <ChildComponet printStatus={printStatus} />
    </div>
  );
}

export default Father;
