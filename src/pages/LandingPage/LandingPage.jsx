import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import LoginButton from "../../components/Auth0Buttons/Login";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="logo-container">
        <img
          src="/images/logo.png"
          style={{ width: "100%", height: "100%" }}
          className="App-logo"
          alt="logo"
        />
      </div>

      <div className="button-container">
        <LoginButton />
        {/* <button onClick={() => navigate("/signup")}>Sign Up</button> */}
      </div>
    </>
  );
};

export default LandingPage;
