import React, { useState } from "react";

import { Link } from "react-router-dom";

import { BiArrowBack } from "react-icons/bi";

import react from "../../assets/3.jpg";

import "./HomePage.css";

export default function HomePage() {
  const [hover, setHover] = useState(false);
  return (
    <div className="home-container-main">
      <div
        className="home-carousel-container"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="infosection">
          <h1 className="carousel-text main-text">
            Express Yourself To The Max
          </h1>
          <p className="carousel-text sub-text">
            Anyone can beat you but no one can beat your<br></br> outfit as long
            as you wear AIWear outfits
          </p>
          <Link className="link" to={"/create"}>
            <div className="carousel-text create-button">
              <p>Create Your Own Now!</p>
              <BiArrowBack
                style={{ transform: "rotate(180deg)", margin: "0.5rem" }}
              />
            </div>
          </Link>
        </div>
        <div className="image-container">
          <img className="home-carousel-image" src={react}></img>
        </div>
        <div className="semi-info"></div>
      </div>
    </div>
  );
}
