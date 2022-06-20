import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = ({ user, navItems, handleLogOut }) => {
    return (  
        <>
        <header className="App-header">
            <h1>Welcome to Binge[TV]: {user ? user : <p>Sign up to check it out"</p>}</h1>
            <div className="Nav-logo">
            <img
                src="/images/logo.png"
                alt="logo"
                />
            </div>
            {/* renders navbar items passed down through props */}
            <div className='btn-container'>
            { navItems.map(( navItem, idx ) =>
                <a className='button' key={idx} href={navItem.url} onClick={navItem.onClick}>{navItem.name} </a>
                ) }
                </div>
        </header>
       
       </>
    );
}
 
export default NavBar;