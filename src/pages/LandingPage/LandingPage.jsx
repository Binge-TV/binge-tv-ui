import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";
import './LandingPage.css'


const LandingPage = () => {
    const[isLogin, setIsLogin] = useState(false)
    const [isSignup, setIsSignup] = useState(false)
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
                <div className="button-container">
                {(isLogin) ? <LoginForm isLogin={isLogin}
                setIsLogin={setIsLogin}/> : <button onClick={() => setIsLogin(!isLogin)}>Login</button>} 
                {(isSignup) ?  <SignupForm isSignup={isSignup}
                setIsSignup={isSignup}/> :<button onClick={() => setIsSignup(!isSignup)}>Sign Up</button> }
                </div>
              
           
        </>
     );
}
 
export default LandingPage;