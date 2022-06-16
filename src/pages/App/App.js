import React, { useState } from 'react';
import { Routes, Route, useNavigate, Navigate, } from 'react-router-dom'
import './App.css';
import ShowSearch from '../../pages/ShowSearch/ShowSearch';
import LandingPage from '../../pages/LandingPage/LandingPage';
import ShowDetails from '../../pages/ShowDetails/ShowDetails';
import Login from '../../pages/Login/Login';
import Signup from '../../pages/Signup/Signup';
import HomePage from '../HomePage/HomePage';
import AuthService from '../../services/AuthService';
import Profiles from '../Profiles/Profiles';


const App = () => {
  const [user, setUser] = useState(AuthService.getUser())
  const navigate = useNavigate();
  const [navItems] = useState([
    { url: "/", name: "Log Out" },
    { url: "/show-search", name: "Search Shows" },
    { url: "/home", name: "Home Page" },
    { url: "/profiles", name: "Profile" }
  ])

  const  handleLogout = () => {
    AuthService.logout();
    setUser(null);
   
  }

  const handleSignupOrLogin = () => {
    setUser(AuthService.getUser());
  }

  return (
	<>
    
		<Routes> 
      <Route path='/' element={<LandingPage user={user}/>} />
      <Route 
        path='/home' 
        element={<HomePage user={user} handleLogout={handleLogout} navItems={navItems}/>} />
      <Route 
        path='/login' 
        element={<Login handleSignupOrLogin={handleSignupOrLogin} />} />
      <Route 
        path='/signup' 
        element={<Signup handleSignupOrLogin={handleSignupOrLogin} />} />
      <Route 
        path="/show-search" 
        element={<ShowSearch handleLogout={handleLogout} user={user} navItems={navItems}/>} />
      <Route 
        path="show/:showId" 
        element={<ShowDetails handleLogout={handleLogout} user={user} navItems={navItems}/>} />
      <Route 
        path='/profiles' element={ user ? <Profiles /> : <Navigate to='/login' />} />
		</Routes>
	</>
  );
}

export default App;
