import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";


const LandingPage = () => {
    const[isLogin, setIsLogin] = useState(false)
    const [isSignup, setIsSignup] = useState(false)
    return ( 
        <>
        <img
                src="/images/logo.png"
                style={{ width: "500px", height: "500px"}}
                className="App-logo"
                alt="logo"
                />
                
                
                <div>{(isLogin) ? <LoginForm isLogin={isLogin}
                setIsLogin={setIsLogin}/> : <button onClick={() => setIsLogin(!isLogin)}>Login</button>} </div>
                <div>{(isSignup) ?  <SignupForm isSignup={isSignup}
                setIsSignup={isSignup}/> :<button onClick={() => setIsSignup(!isSignup)}>Sign Up</button> }</div>
              
           
        </>
     );
}
 
export default LandingPage;