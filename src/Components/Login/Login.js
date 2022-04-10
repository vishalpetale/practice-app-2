import React, { useEffect, useState } from "react";
import classes from "./Login.module.css";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";

function Login(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    console.log("side effect functioon");
  }, []);

  useEffect(() => {
    const validityTimer = setTimeout(() => {
      console.log("Checking Validity");
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 1000);

    return () => {
      console.log("CLear timer");
      clearTimeout(validityTimer);
    };
  }, [enteredEmail, enteredPassword]);

  const handleEmailChange = (e) => {
    setEnteredEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setEnteredPassword(e.target.value);
  };

  const handleEmailValidation = () => {
    setEmailIsValid(enteredEmail.trim().includes("@"));
  };

  const handlePasswordValidation = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={handleFormSubmit}>
        <div
          className={`${classes["form-input"]} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label>E-Mail</label>
          <input
            type="email"
            value={enteredEmail}
            onChange={handleEmailChange}
            onBlur={handleEmailValidation}
          />
        </div>
        <div
          className={`${classes["form-input"]} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label>Password</label>
          <input
            type="password"
            value={enteredPassword}
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
