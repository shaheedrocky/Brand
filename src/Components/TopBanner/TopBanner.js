import React, { useState } from "react";
import "./TopBanner.css";
import banner from "../../assets/images/banner.png";
import { Avatar, Button } from "@material-ui/core";
import { colors } from "../Constant/Colors";
const TopBanner = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="TopBanner" style={{ flex: 1 }}>
      <div className="TopBanner-left" style={{ backgroundColor: "white" }}>
        <ul>
          <li
            onClick={() => setActiveTab(0)}
            style={{
              backgroundColor: activeTab === 0 ? "#E5F1FF" : "transparent",
              color: activeTab === 0 ? "black" : "grey",
              fontWeight: activeTab === 0 ? "bold" : "normal",
            }}
          >
            Automobiles
          </li>
          <li
            onClick={() => setActiveTab(1)}
            style={{
              backgroundColor: activeTab === 1 ? "#E5F1FF" : "transparent",
              color: activeTab === 1 ? "black" : "grey",
              fontWeight: activeTab === 1 ? "bold" : "normal",
            }}
          >
            Clothes and wear
          </li>
          <li
            onClick={() => setActiveTab(2)}
            style={{
              backgroundColor: activeTab === 2 ? "#E5F1FF" : "transparent",
              color: activeTab === 2 ? "black" : "grey",
              fontWeight: activeTab === 2 ? "bold" : "normal",
            }}
          >
            Home interiors
          </li>
          <li
            onClick={() => setActiveTab(3)}
            style={{
              backgroundColor: activeTab === 3 ? "#E5F1FF" : "transparent",
              color: activeTab === 3 ? "black" : "grey",
              fontWeight: activeTab === 3 ? "bold" : "normal",
            }}
          >
            Computer and tech
          </li>
          <li
            onClick={() => setActiveTab(4)}
            style={{
              backgroundColor: activeTab === 4 ? "#E5F1FF" : "transparent",
              color: activeTab === 4 ? "black" : "grey",
              fontWeight: activeTab === 4 ? "bold" : "normal",
            }}
          >
            Tools, equipments
          </li>
          <li
            onClick={() => setActiveTab(5)}
            style={{
              backgroundColor: activeTab === 5 ? "#E5F1FF" : "transparent",
              color: activeTab === 5 ? "black" : "grey",
              fontWeight: activeTab === 5 ? "bold" : "normal",
            }}
          >
            Sports and outdoor
          </li>
          <li
            onClick={() => setActiveTab(6)}
            style={{
              backgroundColor: activeTab === 6 ? "#E5F1FF" : "transparent",
              color: activeTab === 6 ? "black" : "grey",
              fontWeight: activeTab === 6 ? "bold" : "normal",
            }}
          >
            Animal and pets
          </li>
          <li
            onClick={() => setActiveTab(7)}
            style={{
              backgroundColor: activeTab === 7 ? "#E5F1FF" : "transparent",
              color: activeTab === 7 ? "black" : "grey",
              fontWeight: activeTab === 7 ? "bold" : "normal",
            }}
          >
            Machinery tools
          </li>
          <li
            onClick={() => setActiveTab(8)}
            style={{
              backgroundColor: activeTab === 8 ? "#E5F1FF" : "transparent",
              color: activeTab === 8 ? "black" : "grey",
              fontWeight: activeTab === 8 ? "bold" : "normal",
            }}
          >
            More category
          </li>
        </ul>
      </div>
      <div
        className="TopBanner-mid"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundColor: "#9BE0CB",
          objectFit: "contain",
          height: "360px",
          width: "200px",
        }}
      >
        <div className="details">
          <p>Latest trending</p>
          <h1>Electronic items</h1>
          <Button
            className="button"
            title="Search"
            style={{
              background: "white",
              border: "none",
              color: "black",
              padding: "8px",
              width: "30%",
              fontWeight: "normal",
              borderRadius: "3px",
              cursor: "pointer",
              fontSize: "12px",
              textTransform: "capitalize",
            }}
          >
            Learn more
          </Button>
        </div>
      </div>
      <div className="TopBanner-right">
        <div className="getStarted">
          <div className="top">
            <Avatar />
            <p>
              Hi,
              <br /> user let's get stated
            </p>
          </div>
          <Button
            className="button"
            title="Search"
            style={{
              background: colors.blue,
              border: "none",
              color: "white",
              fontWeight: "normal",
              borderRadius: "3px",
              cursor: "pointer",
              fontSize: "12px",
              width: "100%",
              textTransform: "capitalize",
              marginTop: "10px",
            }}
          >
            JOIN NOW
          </Button>
          <Button
            className="button"
            title="Search"
            style={{
              background: "white",
              border: "none",
              color: "black",
              fontWeight: "normal",
              borderRadius: "3px",
              cursor: "pointer",
              fontSize: "12px",
              width: "100%",
              textTransform: "capitalize",
              marginTop: "10px",
            }}
          >
            NOT NOW
          </Button>
        </div>
        <div className="supp1">
          <p>Get US $10 off with a new supplier</p>
        </div>
        <div className="supp1" style={{ backgroundColor: "#55BDC3" }}>
          <p>Send quotes with supplier preferences</p>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
