import React, { useState } from "react";
import "./index.css";
import MainHeader from "./Components/MainHeader/MainHeader";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";

function App() {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  const handleLogin = (email, password) => {
    setIsloggedIn(true);
  };

  const handleLogout = () => {
    setIsloggedIn(false);
  };
  return (
    <>
      <MainHeader isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      {!isLoggedIn ? <Login onLogin={handleLogin} /> : <Home />}
    </>
  );
}

export default App;
