import { useNavigate } from 'react-router-dom';
import './LandingPage.css'


const LandingPage = () => {
        const navigate = useNavigate();
   
    return ( 
        <>
        <div className="logo-container">
        <img
                src="/images/logo.png"
                style={{ width: "100%", height: "100%"}}
                className="App-logo"
                alt="logo"
                />
             
        </div>
       
                {/* dynamically renders login and signup forms upon button press by setting state to display component */}
              
                <div className="button-container">
                       <button onClick={() => navigate('/login')}>Login</button>
                       <button onClick={() => navigate('/signup')}>Sign Up</button>
                </div>
               
                       
        </>
     );
}
 
export default LandingPage;