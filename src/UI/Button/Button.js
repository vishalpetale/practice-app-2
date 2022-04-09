import React from "react";
import classes from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={`${classes.btn} ${props.className}`}
      onClick={props.onCLick}
      type={props.type}
    >
      {props.children}
    </button>
  );
}
export default Button;
