import React from "react";
import Navigation from "../Navigation/Navigation";
import classes from "./MainHeader.module.css";

function MainHeader(props) {
  return (
    <header className={classes.header}>
      <h1>A Title</h1>
      {props.isLoggedIn && <Navigation onLogout={props.onLogout} />}
    </header>
  );
}
export default MainHeader;
