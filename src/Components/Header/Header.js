import React from "react";
import Logo from "../../assets/images/logo-symbol.png";
import "./Header.css";
import { colors } from "../Constant/Colors";
import { Button } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import MessageIcon from "@material-ui/icons/Message";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <img src={Logo} alt="Logo" height={44} width={44} />
          <h2 style={{ color: "#8CB7F5", marginLeft: 10 }}>Brand</h2>
        </div>
        <div
          className="header-mid"
          style={{ border: `2px solid ${colors.blue}` }}
        >
          <input type="text" placeholder="Search" />
          <Button
            className="button"
            title="Search"
            style={{
              background: colors.blue,
              border: "none",
              color: "white",
              padding: "3px",
              borderRadius:0,
              cursor: "pointer",
              fontSize: "12px",
              textTransform: "capitalize",
            }}
          >
            Search
          </Button>
        </div>
        <div className="header-right">
          <PersonIcon style={{ color: "grey", cursor: "pointer" }} />
          <MessageIcon
            style={{ color: "grey", cursor: "pointer", marginLeft: 10 }}
          />
          <FavoriteIcon
            style={{ color: "grey", cursor: "pointer", marginLeft: 10 }}
          />
          <ShoppingCartIcon
            style={{ color: "grey", cursor: "pointer", marginLeft: 10 }}
          />
        </div>
      </div>

      <div className="hr-line" />
    </>
  );
};

export default Header;
