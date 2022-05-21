const NavBar = (props) => {
    return (  
        <header className="App-header">
            { props.navItems.map(( navItem, idx ) =>
            <a key={idx} href={navItem.url}>{navItem.name}</a>
            ) }
        </header>
    );
}
 
export default NavBar;