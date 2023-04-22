import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route } from "react-router-dom";
import  CallBack  from "../pages/CallBack";
import ShowSearch from "../pages/ShowSearch/ShowSearch";
import LandingPage from "../pages/LandingPage";
import ShowDetails from "../pages/ShowDetails/ShowDetails";
import LoginButton from "../components/Auth0Buttons/Login";
import { PageLoader } from "../components/Page-Loader";
import ProfileDetails from "../pages/ProfileDetails";
import { NavBar } from "../components/NavBar";
import Profile from "../pages/Profiles/Profiile";
import { NotFoundPage } from "../pages/NotFoundPage";



  export const App = () => {
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
    
      <Routes>
        <Route path="/" element={<LandingPage  />} />
        <Route
          path="/login"
          element={<LoginButton />}
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
          path="/profile"
          element={
              <Profile
               
              />
          }
        />
        {/* <Route
          path="profile/:userId"
          element={
            
              <ProfileDetails
                handleLogout={handleLogout}
                user={user}
                navItems={navItems}
              />
          } */}
        {/* /> */}

        <Route path="/callback" element={<CallBack />} />
        <Route path="*" element={<NotFoundPage />} />
  
      </Routes>
  );
};

