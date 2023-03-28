import React from "react";

import "./FinalImage.css";

import tshirt from "../../assets/tshirt.png";

export default function FinalImage(props) {
  return (
    <div>
      <img src={tshirt} className="tshirt" />
      <div className="image-container">
        {props.result.length > 0 ? (
          <img className="design-img" src={props.result || ""} alt="Design" />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
