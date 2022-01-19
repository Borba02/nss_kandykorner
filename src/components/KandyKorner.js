import React from "react"
import { ApplicationViews } from "./ApplicationViews";
import { Route } from "react-router-dom";
import { NavBar } from "./NavBar/NavBar";

export const KandyKorner = () => {
    return (
      
        <Route>
          <>
          <NavBar />
          <ApplicationViews />
          </>
        </Route>
  
        
    
    );
  };