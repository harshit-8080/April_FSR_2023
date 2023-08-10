import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((store) => store.cart.cartList);

  return (
    <header className="header">
      <div className="logo">Header Component</div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/cart">Cart - {cart.length}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
