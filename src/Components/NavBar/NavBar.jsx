import React, { useState, useEffect } from "react";

import { BsFillCartFill, BsFillPersonFill } from "react-icons/bs";

import "./NavBar.css";

import mainlogo from "../../assets/mainlogo.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="main-container">
      <div className="nav-button-container">
        <Link to={"/"}>
          <button className="nav-button">Home</button>
        </Link>
        <Link className="link" to={"/about"}>
          <button className="nav-button">About</button>
        </Link>
        <Link className="link" to={"/create"}>
          <button className="nav-button">Create</button>
        </Link>
      </div>
      <img src={mainlogo} className="main-logo" />
      <div className="nav-button-container" style={{ gap: "4rem" }}>
        <BsFillCartFill style={{ transform: "scale(1.5)" }} />
        <BsFillPersonFill style={{ transform: "scale(1.65)" }} />
      </div>
    </div>
  );
}
