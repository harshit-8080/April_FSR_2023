import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function User() {
  const { name, setName } = useContext(UserContext);

  return (
    <div>
      <h1>User Componet</h1>
      <h2>{name}</h2>

      <input
        type="text"
        placeholder="your name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
}

export default User;
