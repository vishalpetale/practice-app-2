import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: (email, password) => {},
  onLogout: () => {},
});

export const AuthProvider = (props) => {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  useEffect(() => {
    const storedLoginInfo = localStorage.getItem("isLoggedIn");
    if (storedLoginInfo === "1") {
      setIsloggedIn(true);
    }
  }, []);

  const handleLogin = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    console.log(email, password);
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
        onLogin: handleLogin,
        onLogout: handleLogout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
