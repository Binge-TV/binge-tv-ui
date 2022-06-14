
import NavBar from "../../components/NavBar/NavBar";

const HomePage = ({navItems, handleLogout, user}) => {
    // place holderpage for later
    return ( 
        <>
        <NavBar handleLogout={handleLogout} user={user} navItems={navItems}/>
        <h1>Placeholder HomePage</h1>
        </>
     );
}
 
export default HomePage;