import React, { useState, useEffect } from "react";
import "./TopBanner.css";
import banner from "../../assets/images/banner.png";
import { Avatar, Button } from "@material-ui/core";
import { colors } from "../Constant/Colors";
import { onGetAllCategories } from "../../API/ApiCalls";

const TopBanner = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await onGetAllCategories();
        setAllCategories(response);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  console.log("allCategories", allCategories);

  return (
   <div className="TopBanner" style={{ flex: 1 }}>
      <div className="TopBanner-left" style={{ backgroundColor: "white" }}>
        {Array.isArray(allCategories) &&
          allCategories?.map((item, index) => {
            return (
              <ul>
                <li
                  onClick={() => setActiveTab(index)}
                  style={{
                    textTransform: "capitalize",
                    backgroundColor:
                      activeTab === index ? "#E5F1FF" : "transparent",
                    color: activeTab === index ? "black" : "grey",
                    fontWeight: activeTab === index ? "bold" : "normal",
                  }}
                >
                  {item}
                </li>
              </ul>
            );
          })}
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
