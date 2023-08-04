import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [click, setClick] = useState(false);
  console.log(click);
  return (
    <div className="header">
      <Link to="/">
        <h1>My Logo Title</h1>
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Services</Link>
        </li>
        <li>
          <Link to="/">Locations</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>

      <div
        className="hamburger"
        onClick={() => {
          setClick(!click);
        }}
      >
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
}

export default NavBar;
