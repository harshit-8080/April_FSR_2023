import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  // const [name, setName] = useState("Suraj");

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  });

  // useEffect(() => {
  //   setTimeout(() => {
  //     setName("RAHUL GANDHI");
  //   }, 2000);
  // }, []);

  return (
    <>
      <h1>OOPs URL is Wrong</h1>

      {/* <h1>{name}</h1> */}
    </>
  );
}

export default NotFound;
