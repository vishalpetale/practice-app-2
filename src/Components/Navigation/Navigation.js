import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import Button from "../UI/Button/Button";
import classes from "./Navigation.module.css";

function Navigation() {
  const context = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {context.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <Button
              onClick={context.onLogout}
              className={`${classes.btn} ${classes["btn-logout"]}`}
            >
              Logout
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
}
export default Navigation;
// <button className={classes.btn}>Users</button>
// <button className={classes.btn}>Admin</button>
// <Button
//   className={`${classes.btn} ${classes["btn-logout"]}`}
//   onClick={handleLogutClick}
// >
//   Logout
// </Button>
