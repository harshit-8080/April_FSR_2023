import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increasePrice } from "./redux/ProductSlice";

const Watch = () => {
  const [price, setPrice] = useState(0);
  const data = useSelector((store) => store.product.data);

  // console.log("watch is rendering");

  const dispatch = useDispatch();
  function handlePrice() {
    dispatch(increasePrice(price));
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.price}</h1>
      <h1>{data.company}</h1>

      <input
        type="text"
        placeholder="New Price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handlePrice}>Set New Price</button>
    </div>
  );
};

export default Watch;
