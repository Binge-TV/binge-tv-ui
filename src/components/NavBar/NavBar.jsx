import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return (  
        <>
        
        { props.user ? 
        
        
        <header className="App-header">
            <h1>Welcome to Binge[TV]: {props.user}</h1>
            <div className="Nav-logo">
            <img
                src="/images/logo.png"
                alt="logo"
                />
            </div>
            {/* renders navbar items passed down through props */}
            <div className='btn-container'>
            { props.navItems.map(( navItem, idx ) =>
                <a className='button' key={idx} href={navItem.url}>{navItem.name}</a>
                ) }
                </div>
        </header>
       : 
       <>
       <h1> Connection Lost : Please login</h1>
        <Link to="/login">
          <button>Login</button>
        </Link>
       </>
       
       }
        </>
    );
}
 
export default NavBar;