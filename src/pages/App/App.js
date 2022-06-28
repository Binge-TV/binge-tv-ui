import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import ShowSearch from "../../pages/ShowSearch/ShowSearch";
import LandingPage from "../../pages/LandingPage/LandingPage";
import ShowDetails from "../../pages/ShowDetails/ShowDetails";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";
import AuthService from "../../services/AuthService";
import Profiles from "../Profiles/Profiles";
import ProfileDetails from "../ProfileDetails/ProfileDetails";

const App = () => {
  const [user, setUser] = useState(AuthService.getUser());
  console.log(user);
  const [navItems] = useState(
    [
      { url: "/", name: "Log Out", onClick: handleLogout },
      { url: "/show-search", name: "Search Shows" },
      { url: "/profiles", name: "Profile" },
    ],
    [user]
  );

  async function handleLogout() {
    await AuthService.logout(
      localStorage.getItem("refreshToken"),
      localStorage.getItem("username")
    );
  }

  const handleSignupOrLogin = () => {
    setUser(AuthService.getUser());
  };
// protects front end routes with checking local storage for user then forcing routes to login if none found
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage user={user} />} />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/show-search"
          element={
            user ? (
              <ShowSearch
                handleLogout={handleLogout}
                user={user}
                navItems={navItems}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="show/:showId"
          element={
            user ? (
              <ShowDetails
                handleLogout={handleLogout}
                user={user}
                navItems={navItems}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/profiles"
          element={
            user ? (
              <Profiles
                handleLogout={handleLogout}
                user={user}
                navItems={navItems}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="profiles/:userId"
          element={
            user ? (
              <ProfileDetails
                handleLogout={handleLogout}
                user={user}
                navItems={navItems}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  );
};

export default App;
