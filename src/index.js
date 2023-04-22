import React from "react";
import  { App }  from './App/app'
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Auth0ProviderWithNavigate } from "./auth0-provider-with-navigate";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Auth0ProviderWithNavigate>
        <App />
      </Auth0ProviderWithNavigate>
  </Router>
);
