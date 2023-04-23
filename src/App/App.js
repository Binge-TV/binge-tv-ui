import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route } from "react-router-dom";
import { Callback }  from "../pages/Callback";
import ShowSearch from "../components/ShowSearch";
import LandingPage from "../pages/LandingPage";
import ShowDetails from "../pages/ShowDetails";
import Login from "../components/Login-Button";
import { PageLoader } from "../components/Page-Loader";
import ProfileDetails from "../pages/ProfileDetails";
import { NavBar } from "../components/NavBar";
import Profile from "../pages/Profiile";
import { NotFoundPage } from "../pages/NotFoundPage";
import { AuthenticationGuard } from "../components/Authentication-Guard";



  export const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
    
      <Routes>
        <Route 
          path="/" element={<LandingPage nav={ <NavBar /> } />} />
        <Route 
          path="/show-search" element={<ShowSearch nav={ <NavBar /> } />  }/>
        <Route 
          path="show/:showId" element={ <ShowDetails nav={ <NavBar /> }/> } />
        <Route
          path="/profile"
          element={<AuthenticationGuard 
            nav={ <NavBar /> } component={Profile} />}
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

        <Route path="/callback" element={<Callback />} />
        <Route path="*" element={<NotFoundPage />} />
  
      </Routes>
  );
};

