import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const Signup = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/show-search",
      },
      authorizationParams: {
        prompt: "login",
        screen_hint: "signup",
      },
    });
  };

  return (
    <button className="button__sign-up" onClick={handleSignUp}>
      Sign Up
    </button>
  );
};
