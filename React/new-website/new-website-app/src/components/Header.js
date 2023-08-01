import React from "react";
import "../styles/Header.css";

function Header(props) {
  console.log(props);
  return (
    <header className="header">
      <div className="logo-title">
        <img
          src="https://cdn.ndtv.com/common/images/ogndtv.png"
          alt=""
          className="logo"
        />
        <h1 className="title">My New App</h1>
      </div>
      <nav className="navigation">
        <ul className="nav-links">
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">{props.data.info.name}</a>
          </li>
          <li>
            <img
              src={props.data.info.picture}
              style={{ width: "60px", height: "50px", borderRadius: "50%" }}
            />
          </li>
          <li>
            <button
              style={{ width: "100px", height: "40px", cursor: "pointer" }}
              onClick={() => {
                window.localStorage.clear();
                window.location.assign("http://localhost:3000/");
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
