import React, { useState } from "react";
import "./HotLink.css";
import { colors } from "../Constant/Colors";

const HotLink = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="HotLink">
      <div className="HotLink-left">
        <ul>
          <li
            onClick={() => setActive(0)}
            style={{
              borderBottomColor: active === 0 ? colors.blue : "transparent",
              borderBottomWidth: active === 0 ? "2px" : "0",
              borderBottomStyle: "solid",
            }}
          >
            All category
          </li>
          <li
            onClick={() => setActive(1)}
            style={{
              borderBottomColor: active === 1 ? colors.blue : "transparent",
              borderBottomWidth: active === 1 ? "2px" : "0",
              borderBottomStyle: "solid",
            }}
          >
            Hot offers
          </li>
          <li
            onClick={() => setActive(2)}
            style={{
              borderBottomColor: active === 2 ? colors.blue : "transparent",
              borderBottomWidth: active === 2 ? "2px" : "0",
              borderBottomStyle: "solid",
            }}
          >
            Gift boxes
          </li>
          <li
            onClick={() => setActive(3)}
            style={{
              borderBottomColor: active === 3 ? colors.blue : "transparent",
              borderBottomWidth: active === 3 ? "2px" : "0",
              borderBottomStyle: "solid",
            }}
          >
            Projects
          </li>
          <li
            onClick={() => setActive(4)}
            style={{
              borderBottomColor: active === 4 ? colors.blue : "transparent",
              borderBottomWidth: active === 4 ? "2px" : "0",
              borderBottomStyle: "solid",
            }}
          >
            Menu item
          </li>
          <li
            onClick={() => setActive(5)}
            style={{
              borderBottomColor: active === 5 ? colors.blue : "transparent",
              borderBottomWidth: active === 5 ? "2px" : "0",
              borderBottomStyle: "solid",
            }}
          >
            Help
          </li>
        </ul>
      </div>
      <div className="HotLink-right">
        <ul>
          <li
            onClick={() => {
              setActive(6);
            }}
            style={{
              borderBottomColor: active === 6 ? colors.blue : "transparent",
              borderBottomWidth: active === 6 ? "2px" : "0",
              borderBottomStyle: "solid",
            }}
          >
            English, USD
          </li>
          <li
            onClick={() => {
              setActive(7);
            }}
            style={{
              borderBottomColor: active === 7 ? colors.blue : "transparent",
              borderBottomWidth: active === 7 ? "2px" : "0",
              borderBottomStyle: "solid",
            }}
          >
            Ship to
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HotLink;
