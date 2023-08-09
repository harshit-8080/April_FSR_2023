import React from "react";
import Watch from "./Watch";

function ProductContainer({ data, increasePrice }) {
  return (
    <div>
      <Watch data={data} increasePrice={increasePrice} />
    </div>
  );
}

export default ProductContainer;
