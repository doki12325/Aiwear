import React, { useState } from "react";

import { BiArrowBack } from "react-icons/bi";

import react from "../../assets/1.jpg";

import "./HomePage.css";

export default function HomePage() {
  const [hover, setHover] = useState(false);
  return (
    <div className="home-container-main">
      <div className="home-container">
        <div
          className="home-carousel-container"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <h1 className="carousel-text">Featured Creations</h1>
          <div className="carousel-text by">
            <p>Create Your Own Now!</p>
            <BiArrowBack
              style={{ transform: "rotate(180deg)", margin: "0.5rem" }}
            />
          </div>
          <img
            id="home-carousel-image"
            src={react}
            style={{ transform: `scale(${hover ? 1.2 : 1})` }}
          ></img>
        </div>
      </div>
    </div>
  );
}
