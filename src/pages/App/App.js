import React, { useState } from 'react';
import { Routes, Route, } from 'react-router-dom'
import './App.css';
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
    
		<Routes> 
      <Route path='/' element={<LandingPage />} />
      <Route path="/show-search" element={<ShowSearch navItems={navItems}/>} />
      <Route path="show/:showName" element={<ShowDetails navItems={navItems}/>} />
		</Routes>
	</>
  );
}

export default App;
