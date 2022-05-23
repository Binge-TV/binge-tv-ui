import React, { useState } from 'react';
import { Routes, Route, } from 'react-router-dom'
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import ShowSearch from '../../pages/ShowSearch/ShowSearch';
import LandingPage from '../../pages/LandingPage/LandingPage';
import ShowDetails from '../../pages/ShowDetails/ShowDetails';

function App() {
  const [navItems] = useState([
    { url: "/", name: "Home Page" },
    { url: "/show-search", name: "Search Shows" },
   
  ])
  return (
	<>
   <img
                src="/images/logo.png"
                style={{ width: "500px", height: "500px"}}
                className="App-logo"
                alt="logo"
                />
		<Routes> 
      <Route path='/' element={<LandingPage />} />
      <Route path="/show-search" element={<ShowSearch navItems={navItems}/>} />
      <Route path="show/:showName" element={<ShowDetails />} />
		</Routes>
	</>
  );
}

export default App;
