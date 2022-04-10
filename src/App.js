import React, { useState, useEffect } from "react";
import "./index.css";
import MainHeader from "./Components/MainHeader/MainHeader";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";

function App() {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  useEffect(() => {
    const storedLoginInfo = localStorage.getItem("isLoggedIn");
    if (storedLoginInfo === "1") {
      setIsloggedIn(true);
    }
  }, []);

  const handleLogin = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");

    setIsloggedIn(true);
  };

  const handleLogout = () => {
    setIsloggedIn(false);

    localStorage.removeItem("isLoggedIn");
  };
  return (
    <>
      <MainHeader isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      {!isLoggedIn ? <Login onLogin={handleLogin} /> : <Home />}
    </>
  );
}

export default App;
