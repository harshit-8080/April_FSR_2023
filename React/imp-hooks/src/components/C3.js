import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function C3() {
  const { name } = useContext(UserContext);
  return (
    <div>
      <h1>C3 Component</h1>
      <h2>{name}</h2>
    </div>
  );
}

export default C3;
