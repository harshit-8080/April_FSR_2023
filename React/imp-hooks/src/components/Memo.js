import React, { useMemo, useState } from "react";

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
function calculate(a) {
  for (let i = 0; i < 1000000000; i++) {}

  console.log("Calculating.......");
  let sum = a.reduce((total, item) => {
    return (total = total + item);
  }, 0);

  return sum;
}

function Memo() {
  console.log("redenring...");
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  let calculatedSum = useMemo(() => {
    return calculate(arr);
  }, [toggle]);

  return (
    <div>
      <h1>Counter - {count}</h1>
      <h1>Arrry Sum - {calculatedSum}</h1>

      <button onClick={() => setCount(count + 1)}>Add By 1</button>
      <button onClick={() => setToggle(!toggle)}>Re Calculate</button>
    </div>
  );
}

export default Memo;
