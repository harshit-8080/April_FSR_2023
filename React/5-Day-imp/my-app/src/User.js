import React from "react";

function User(props) {
  return (
    <h1>
      {props.name}
      {props.country}
      {props.age}
    </h1>
  );
}

export default User;
