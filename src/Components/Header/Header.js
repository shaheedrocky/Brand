import React from "react";
import Logo from "../../assets/images/logo-symbol.png";
import "./Header.css";
import { colors } from "../Constant/Colors";
import { Button } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import MessageIcon from "@material-ui/icons/Message";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Container } from "react-bootstrap";
const Header = () => {
  return (
    <Container>
      <div className="d-flex align-items-center  justify-content-between pt-2">
        <div className="d-flex align-items-center">
          <img src={Logo} alt="Logo" height={44} width={44} />
          <h2
            style={{
              color: "#8CB7F5",
              marginLeft: 10,
              backgroundColor: "white",
            }}
          >
            Brand
          </h2>
        </div>
        <div
          className="d-flex align-items-center rounded-1 w-50 justify-content-between"
          style={{ border: `2px solid ${colors.blue}` }}
        >
          <input
            type="text"
            placeholder="Search"
            className="border-none outline-none w-100 ps-1"
          />
          <Button
            className="button"
            title="Search"
            style={{
              background: colors.blue,
              border: "none",
              color: "white",
              padding: "3px",
              borderRadius: 0,
              cursor: "pointer",
              fontSize: "12px",
              textTransform: "capitalize",
            }}
          >
            Search
          </Button>
        </div>
        <div className="header-right" style={{ backgroundColor: "white" }}>
          <PersonIcon
            style={{
              color: "grey",
              cursor: "pointer",
              backgroundColor: "white",
            }}
          />
          <MessageIcon
            style={{
              color: "grey",
              cursor: "pointer",
              marginLeft: 10,
              backgroundColor: "white",
            }}
          />
          <FavoriteIcon
            style={{
              color: "grey",
              cursor: "pointer",
              marginLeft: 10,
              backgroundColor: "white",
            }}
          />
          <ShoppingCartIcon
            style={{
              color: "grey",
              cursor: "pointer",
              marginLeft: 10,
              backgroundColor: "white",
            }}
          />
        </div>
      </div>

      <div className="hr-line" />
    </Container>
  );
};

export default Header;
