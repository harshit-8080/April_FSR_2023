import React from "react";

// const props = {
//     u :"",
//     t : "",
//     d : "",
//   }

function ProductCard(props) {
  return (
    <div>
      <img src={props.u} alt="" />
      <h1>{props.t}</h1>
      <p>{props.d}</p>
    </div>
  );
}
export default ProductCard;
