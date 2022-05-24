import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";


const LandingPage = () => {
    return ( 
        <>
        <img
                src="/images/logo.png"
                style={{ width: "500px", height: "500px"}}
                className="App-logo"
                alt="logo"
                />
            <LoginForm />
            <SignupForm />
        </>
     );
}
 
export default LandingPage;