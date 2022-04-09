import React, { useRef, useState } from "react";
import classes from "./Login.module.css";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";

function Login(props) {
  const emailInputRef = useRef();
  const [password, setPassword] = useState("");
  const [loginBtnActive, setLoginBtnActive] = useState(false);

  const handlePassChange = (e) => {
    if (e.target.value.length < 7) setLoginBtnActive(false);
    if (e.target.value.length >= 7) setLoginBtnActive(true);
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    if (email.length === 0 || password.length < 7) return;

    props.onLogin(email, password);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={handleFormSubmit}>
        <div className={classes["form-input"]}>
          <label>E-Mail</label>
          <input type="email" ref={emailInputRef} required />
        </div>
        <div className={classes["form-input"]}>
          <label>Password</label>
          <input type="password" onChange={handlePassChange} value={password} />
        </div>

        <Button
          className={`${classes["form-btn"]} ${
            loginBtnActive ? classes["form-btn-active"] : ""
          }`}
          type="submit"
        >
          Login
        </Button>
      </form>
    </Card>
  );
}
export default Login;
