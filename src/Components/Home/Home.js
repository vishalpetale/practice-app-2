import React from "react";
import classes from "./Home.module.css";
import Card from "../UI/Card/Card";

function Home() {
  return (
    <Card className={classes.home}>
      <h2>Welcome Back !</h2>
    </Card>
  );
}
export default Home;
