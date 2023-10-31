import logo from "../assets/logo-ilab.png";
import React from "react";
import "./navbar.css";

function NavBar() {
  return (
    <div className="nav-container">
      <div className="logo">
        <img src={logo} alt="logo ilab" />
      </div>
      <div className="nav-item">
        <a href="/" className="item">
          HOME
        </a>
        <a href="/about" className="item">
          ABOUT US
        </a>
        <a href="/contact" className="item">
          CONTACT
        </a>
      </div>
      <div className="button">
        <a href="/" className="signup">
          SIGN UP
        </a>
        <a href="/" className="login">
          LOG IN
        </a>
      </div>
    </div>
  );
}
export default NavBar;
