import React, { useState } from 'react';
import { Routes, Route, } from 'react-router-dom'
import './App.css';
import ShowSearch from '../../pages/ShowSearch/ShowSearch';
import LandingPage from '../../pages/LandingPage/LandingPage';
import ShowDetails from '../../pages/ShowDetails/ShowDetails';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignupForm from '../../components/SignupForm/SignupForm';
import HomePage from '../HomePage/HomePage';


function App() {
  const [navItems] = useState([
    { url: "/", name: "Log Out" },
    { url: "/show-search", name: "Search Shows" },
    { url: "/home", name: "Home Page" },
   
  ])
  return (
	<>
    
		<Routes> 
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={<HomePage navItems={navItems}/>} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/sign-up' element={<SignupForm />} />
      <Route path="/show-search" element={<ShowSearch navItems={navItems}/>} />
      <Route path="show/:showId" element={<ShowDetails navItems={navItems}/>} />
		</Routes>
	</>
  );
}

export default App;
