import React, { useState } from 'react';

import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [navItems, setNavItems] = useState([
    { url: "/", name: "Home Page" },
    { url: "/show-search", name: "Search Shows" },
    { url: "/show-details", name: "Show Details" },
  ])
  return (
	<>
		<NavBar navItems={navItems} />
	</>
  );
}

export default App;
