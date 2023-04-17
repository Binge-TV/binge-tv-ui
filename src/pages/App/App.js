import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CallBack from "../CallBack/CallBack";
import ShowSearch from "../../pages/ShowSearch/ShowSearch";
import LandingPage from "../../pages/LandingPage/LandingPage";
import ShowDetails from "../../pages/ShowDetails/ShowDetails";
import LoginButton from "../../components/Auth0Buttons/Login";
import Signup from "../../pages/Signup/Signup";
import { PageLoader } from "../../components/PageLoader";
import ProfileDetails from "../ProfileDetails/ProfileDetails";
import NavBar from "../../components/NavBar/NavBar";
import Profile from "../Profiles/Profiile";


const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

// protects front end routes with checking local storage for user then forcing routes to login if none found
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage  />} />
        <Route
          path="/login"
          element={<LoginButton />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/show-search"
          element={
              <ShowSearch
               
              nav={ <NavBar /> }
              />
          
              
          }
          
        />
        <Route
          path="show/:showId"
          element={
            
              <ShowDetails
                
              />

          }
        />
        <Route
          path="/profiles"
          element={
              <Profile
               
              />
          }
        />
        {/* <Route
          path="profiles/:userId"
          element={
            
              <ProfileDetails
                handleLogout={handleLogout}
                user={user}
                navItems={navItems}
              />
          } */}
        {/* /> */}
      </Routes>
    </>
  );
};

export default App;
