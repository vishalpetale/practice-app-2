import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./Navigation.module.css";

function Navigation(props) {
  const handleLogutClick = () => props.onLogout();

  return (
    <div className={classes.nav}>
      <button className={classes.btn}>Users</button>
      <button className={classes.btn}>Admin</button>
      <button
        className={`${classes.btn} ${classes["btn-logout"]}`}
        onClick={handleLogutClick}
      >
        Logout
      </button>
    </div>
  );
}
export default Navigation;
