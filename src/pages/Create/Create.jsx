import React, { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

import "./Create.css";

export default function Create() {
  const [type, setType] = useState(false);
  const [material, setMaterial] = useState(false);
  const [prompt, setPrompt] = useState(false);
  return (
    <div className="create-container-main">
      <div
        className="base-container type"
        onClick={() => setType((prev) => !prev)}
        style={{
          borderBottomLeftRadius: `${type ? 0 : 1}rem`,
          borderBottomRightRadius: `${type ? 0 : 1}rem`,
        }}
      >
        <IoIosArrowDown
          className="arrow"
          style={{ transform: `rotate(${type ? 0 : -180}deg)` }}
        />
        <p className="section-heading">Select Your Outfit Type</p>
        <div className="hidden" style={{ opacity: !type ? "0" : "1" }}>
          <div></div>
        </div>
      </div>
      <div
        className="base-container material"
        onClick={() => setMaterial((prev) => !prev)}
        style={{
          borderBottomLeftRadius: `${material ? 0 : 1}rem`,
          borderBottomRightRadius: `${material ? 0 : 1}rem`,
        }}
      >
        <IoIosArrowDown
          className="arrow"
          style={{ transform: `rotate(${material ? 0 : -180}deg)` }}
        />
        <p className="section-heading">Select Material</p>
      </div>
      <div
        className="base-container prompt"
        onClick={() => setPrompt((prev) => !prev)}
        style={{
          borderBottomLeftRadius: `${prompt ? 0 : 1}rem`,
          borderBottomRightRadius: `${prompt ? 0 : 1}rem`,
        }}
      >
        <IoIosArrowDown
          className="arrow"
          style={{ transform: `rotate(${prompt ? 0 : -180}deg)` }}
        />
        <p className="section-heading">Enter Your Prompt</p>
      </div>
    </div>
  );
}
