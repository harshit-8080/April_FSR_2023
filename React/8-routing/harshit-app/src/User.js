import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId, userName, userCountry } = useParams();
  return (
    <>
      <h1>UserId is {userId} </h1>
      <h1>UserName is {userName} </h1>
      <h1>UserCountry is {userCountry} </h1>
    </>
  );
}

export default User;
