import React, { useEffect, useReducer, useState } from "react";
import classes from "./Login.module.css";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val.trim(),
      isValid: action.val.trim().includes("@"),
    };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val.trim(), isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.length > 6 };
  }

  return { value: "", isValid: false };
};

function Login(props) {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const validityTimer = setTimeout(() => {
      console.log("Checking Validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 1000);

    return () => {
      console.log("CLear timer");
      clearTimeout(validityTimer);
    };
  }, [emailIsValid, passwordIsValid]);

  const handleEmailChange = (e) => {
    dispatchEmail({ type: "USER_INPUT", val: e.target.value });
  };

  const handlePasswordChange = (e) => {
    dispatchPassword({ type: "USER_INPUT", val: e.target.value });
  };

  const handleEmailValidation = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const handlePasswordValidation = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={handleFormSubmit}>
        <div
          className={`${classes["form-input"]} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label>E-Mail</label>
          <input
            type="email"
            value={emailState.value}
            onChange={handleEmailChange}
            onBlur={handleEmailValidation}
          />
        </div>
        <div
          className={`${classes["form-input"]} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label>Password</label>
          <input
            type="password"
            value={passwordState.value}
            onChange={handlePasswordChange}
            onBlur={handlePasswordValidation}
          />
        </div>

        <div className={classes.actions}>
          <Button
            className={classes["form-btn"]}
            type="submit"
            disabled={!formIsValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
}
export default Login;
