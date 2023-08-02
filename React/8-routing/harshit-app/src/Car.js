import React from "react";
import { Link, Outlet } from "react-router-dom";

function Car() {
  return (
    <>
      <h1>Car Website Page</h1>

      <ul>
        <li>
          <Link to="/car/model">Model</Link>
        </li>
        <li>
          <Link to="/car/color">Color</Link>
        </li>
        <li>
          <Link to="/car/price">Price</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
}

export default Car;
