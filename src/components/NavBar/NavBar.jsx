import './NavBar.css'

const NavBar = (props) => {
    return (  
        <header className="App-header">
            <div className="Nav-logo">
            <img
                src="/images/logo.png"
                alt="logo"
                />
            </div>
            <div className='btn-container'>
            { props.navItems.map(( navItem, idx ) =>
                <a className='button' key={idx} href={navItem.url}>{navItem.name}</a>
                ) }
                </div>
        </header>
    );
}
 
export default NavBar;