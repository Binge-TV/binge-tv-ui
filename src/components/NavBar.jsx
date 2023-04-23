import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Login } from "./Login-Button";
import { Logout } from './Logout-Button'
import { Signup } from "./Signup-Button";

export const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <header className="App-header">
        <h1>Welcome to Binge[TV]: </h1>
        <div className="Nav-logo">
          <img src="/images/logo.png" alt="logo" />
        </div>
        {/* renders navbar items passed down through props */}
        <div className="nav-bar__buttons">
      {!isAuthenticated && (
        <>
          <Signup />
          <Login />
        </>
      )}
      {isAuthenticated && (
        <>
          <Logout />
        </>
      )}
    </div>
      </header>
    </>
  );
};


