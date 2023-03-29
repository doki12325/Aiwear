import React, { useState } from "react";

import { Configuration, OpenAIApi } from "openai";

import { IoIosArrowDown } from "react-icons/io";
import tshirt from "../../assets/tshirt.png";
import hoodie from "../../assets/hoodie.png";

import "./Create.css";
import { Link } from "react-router-dom";

export default function Create(props) {
  const [Outtype, setOutType] = useState();
  const [Outmaterial, setOutMaterial] = useState();
  const [Outprompt, setOutPrompt] = useState("");
  const [Outpromptcolor, setOutPromptcolor] = useState("");
  const [type, setType] = useState(false);
  const [material, setMaterial] = useState(false);
  const [prompt, setPrompt] = useState(false);

  const setResult = props.setResult;

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);

  const generateDesign = async () => {
    const response = await openai.createImage({
      prompt: Outprompt + ` plain ${Outpromptcolor} design`,
      n: 1,
      size: "1024x1024",
    });
    const image_url = response.data.data[0].url;
    setResult(image_url);
  };

  return (
    <div className="create-container-main">
      <div
        className="base-container type"
        onClick={() => {
          setType((prev) => !prev);
          setMaterial(false);
          setPrompt(false);
        }}
        style={{
          transform: `translate(0,-${material || prompt ? 25 : 0}vh)`,
          borderBottomLeftRadius: `${type ? 0 : 1}rem`,
          borderBottomRightRadius: `${type ? 0 : 1}rem`,
        }}
      >
        <IoIosArrowDown
          className="arrow"
          style={{ transform: `rotate(${type ? 0 : -180}deg)` }}
        />
        <p className="section-heading">Select Your Outfit Type</p>
        {type ? (
          <div
            onClick={(e) => e.stopPropagation()}
            className="hidden"
            style={{ opacity: !type ? "0" : "1", zIndex: !type ? -1 : 1 }}
          >
            <div
              onClick={() =>
                setOutType((prev) => (prev === "tshirt" ? "" : "tshirt"))
              }
              className={`hidden-card ${Outtype === "tshirt" ? "active" : ""}`}
            >
              <img src={tshirt} className="card-image" />
              <div className="card-bottom">T-shirts</div>
            </div>
            <div
              onClick={() =>
                setOutType((prev) => (prev === "hoodie" ? "" : "hoodie"))
              }
              className={`hidden-card ${Outtype === "hoodie" ? "active" : ""}`}
            >
              <img
                src={hoodie}
                style={{ mixBlendMode: "multiply" }}
                className="card-image"
              />
              <div className="card-bottom">Hoodies</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        className="base-container material"
        onClick={() => {
          setMaterial((prev) => !prev);
          setType(false);
          setPrompt(false);
        }}
        style={{
          transform: `translate(0,-${material || prompt ? 25 : 0}vh)`,
          borderBottomLeftRadius: `${material ? 0 : 1}rem`,
          borderBottomRightRadius: `${material ? 0 : 1}rem`,
        }}
      >
        <IoIosArrowDown
          className="arrow"
          style={{ transform: `rotate(${material ? 0 : -180}deg)` }}
        />
        <p className="section-heading">Select Material</p>
        {material ? (
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="hidden"
            style={{
              opacity: !material ? "0" : "1",
              zIndex: !material ? -1 : 1,
            }}
          >
            <div
              onClick={() =>
                setOutMaterial((prev) => (prev === "hemp" ? "" : "hemp"))
              }
              className={`hidden-card ${
                Outmaterial === "hemp" ? "active" : ""
              }`}
            >
              <img src={tshirt} className="card-image" />
              <div className="card-bottom">Hemp</div>
            </div>
            <div
              onClick={() =>
                setOutMaterial((prev) => (prev === "cotton" ? "" : "cotton"))
              }
              className={`hidden-card ${
                Outmaterial === "cotton" ? "active" : ""
              }`}
            >
              <img src={tshirt} className="card-image" />
              <div className="card-bottom">Cotton</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        className="base-container prompt"
        onClick={() => {
          setPrompt((prev) => !prev);
          setType(false);
          setMaterial(false);
        }}
        style={{
          transform: `translate(0,-${prompt ? 25 : 0}vh)`,
          borderBottomLeftRadius: `${prompt ? 0 : 1}rem`,
          borderBottomRightRadius: `${prompt ? 0 : 1}rem`,
        }}
      >
        <IoIosArrowDown
          className="arrow"
          style={{ transform: `rotate(${prompt ? 0 : -180}deg)` }}
        />
        <p className="section-heading">Enter Your Prompt</p>
        {prompt ? (
          <div
            onClick={(e) => e.stopPropagation()}
            className="hidden prompt-div"
            style={{ opacity: !prompt ? "0" : "1", zIndex: !prompt ? -1 : 1 }}
          >
            <input
              value={Outprompt}
              onChange={(e) => setOutPrompt(e.currentTarget.value)}
              type={"text"}
              placeholder={"What's on your mind today?"}
              className={"prompt-input"}
            ></input>
            <input
              value={Outpromptcolor}
              onChange={(e) => setOutPromptcolor(e.currentTarget.value)}
              type={"text"}
              placeholder={"Enter Base Color"}
              className={"prompt-input color"}
            ></input>

            <Link className="link" to={"/finalimage"}>
              <div onClick={() => generateDesign()} className="prompt-button">
                <p>Generate!</p>
              </div>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
