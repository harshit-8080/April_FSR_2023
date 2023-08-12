import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function C2() {
  const { name } = useContext(UserContext);
  return (
    <div>
      <h1>C2 Component</h1>
      <h2>{name}</h2>
    </div>
  );
}

export default C2;
