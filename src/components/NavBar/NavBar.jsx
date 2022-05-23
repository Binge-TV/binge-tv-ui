const NavBar = (props) => {
    return (  
        <header className="App-header">
            <img
                src="/images/logo.png"
                style={{ width: "200px", height: "200px"}}
                className="Nav-logo"
                alt="logo"
                />
            { props.navItems.map(( navItem, idx ) =>
            <div>
                <a key={idx} href={navItem.url}>{navItem.name}</a>
            </div>

            ) }
        </header>
    );
}
 
export default NavBar;