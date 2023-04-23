import React from "react";
import { NavBar } from "./NavBar";


export const PageLayout = ({ children }) => {
    return (
      <div className="page-layout">
        <NavBar />
        <div className="page-layout__content">{children}</div>
      </div>
    );
  };
  