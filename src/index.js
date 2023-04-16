import React from "react";
import "./index.css";
import App from "./pages/App/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
     <Auth0Provider
    domain="dev-25zbiwfevftbqtr1.us.auth0.com"
    clientId="QPrsdeERd2mF8ru6L7aJrQNWzUvFiE4S"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
