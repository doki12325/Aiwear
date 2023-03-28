import React from "react";

import "./NavBar.css";

import mainlogo from "../../assets/mainlogo.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="main-container">
      <img src={mainlogo} className="main-logo" />
      <Link className="link" to={"/"}>
        <button className="nav-button">Home</button>
      </Link>
      <Link className="link" to={"/about"}>
        <button className="nav-button">About</button>
      </Link>
    </div>
  );
}
