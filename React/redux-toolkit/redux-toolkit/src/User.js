import React from "react";
import { useSelector } from "react-redux";

function User() {
  const userInfo = useSelector((store) => store.user);

  return (
    <div>
      <h1>{userInfo.firstName}</h1>
      <h1>{userInfo.email}</h1>
      <h1>{userInfo.age}</h1>
      <h1>{userInfo.country}</h1>
    </div>
  );
}

export default User;
