import React, {
  useRef,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import classes from "./Login.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

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

function Login() {
  const context = useContext(AuthContext);

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

  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();

  useEffect(() => {
    const validityTimer = setTimeout(() => {
      console.log("Checking Validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 1000);

    return () => {
      console.log("Clear timer");
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
    if (formIsValid) {
      context.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      inputEmailRef.current.focus();
    } else {
      inputPasswordRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={handleFormSubmit}>
        <Input
          ref={inputEmailRef}
          label="E-Mail"
          id="email"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={handleEmailChange}
          onBlur={handleEmailValidation}
        />
        <Input
          ref={inputPasswordRef}
          label="Password"
          id="password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={handlePasswordChange}
          onBlur={handlePasswordValidation}
        />

        <div className={classes.actions}>
          <Button className={classes["form-btn"]} type="submit">
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
}
export default Login;
