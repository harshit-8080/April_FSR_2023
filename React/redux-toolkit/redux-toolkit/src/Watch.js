import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreasePrice, increasePrice } from "./redux/ProductSlice";

const Watch = () => {
  const data = useSelector((store) => store.product.data);

  const dispatch = useDispatch();

  console.log(dispatch);

  function handlePrice() {
    dispatch(increasePrice());
  }
  function handleDecrease() {
    dispatch(decreasePrice());
  }

  console.log(data);
  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.price}</h1>
      <h1>{data.company}</h1>

      <button onClick={handlePrice}>Increase By 1000</button>
      <button onClick={handleDecrease}>Decrease By 1000</button>
    </div>
  );
};

export default Watch;
