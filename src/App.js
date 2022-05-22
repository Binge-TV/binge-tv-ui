import React, { useState } from 'react';
import { Routes, Route, } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ShowList from './pages/ShowList/ShowList';
import ShowSearch from './pages/ShowSearch/ShowSearch';


function App() {
  const [navItems, setNavItems] = useState([
    { url: "/", name: "Home Page" },
    { url: "/show-list", name: "Search Shows" },
    { url: "/show-details", name: "Show Details" },
  ])
  return (
	<>
		<NavBar navItems={navItems} />
		<Routes> 
			<Route path="/show-list" element={<ShowList />} />
      <Route path="/show-search" element={<ShowSearch />} />
		</Routes>
	</>
  );
}

export default App;
