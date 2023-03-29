import React from "react";

import { BsArrowRepeat } from "react-icons/bs";

import "./FinalImage.css";

import tshirt from "../../assets/tshirt.png";
import { Link } from "react-router-dom";

export default function FinalImage(props) {
  return (
    <div className="final-container">
      <div className="image-container">
        {props.result.length > 0 ? (
          <>
            <img src={tshirt} className="tshirt" />
            <img className="design-img" src={props.result || ""} alt="Design" />
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="final-infosection">
        <div>
          <h1 className="price-label">Your estimated price</h1>
          <h2 className="price-text">$19.99</h2>
        </div>
        <div className="retry-button">
          <h5 style={{ margin: "0.8rem" }}>Buy Now</h5>
        </div>
        <div>
          <h3>Don't like this design?</h3>
          <Link to={"/create"} className="link">
            <div className="retry-button">
              <h5 style={{ margin: "0.8rem" }}>Improve It</h5>
              <BsArrowRepeat />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
