import React from "react";
import classes from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={`${classes.button} ${props.className}`}
      onClick={props.onCLick}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
export default Button;
