import React from "react";
import "../css/Header/Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
  //BEM class naming
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header" />
      </IconButton>
      <img
        className="header__logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
        alt="tinderlogo"
      ></img>
      <IconButton>
        <ForumIcon fontSize="large" className="header" />
      </IconButton>
    </div>

    // Header
    // Cards
    //SwipeButtons
  );
}

export default Header;
