import React, { useState, useEffect } from "react";
import "./index.css";
import MainHeader from "./Components/MainHeader/MainHeader";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import AuthContext from "./store/auth-context";

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
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: handleLogout,
      }}
    >
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={handleLogin} />}
        {isLoggedIn && <Home />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
