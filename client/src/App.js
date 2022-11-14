import React from "react";

import { useSelector } from "react-redux";
import Home from "./pages/Home";

export default function App() {
  const { currentUser } = useSelector((state) => state.user);
  const { currentLot } = useSelector((state) => state.lot);
  return (
    <div className="ap">
      {/*
    
          
            <Dashboard/>       
           <Signup/>
      <Watch/>  
                   <Home />   
           <Login />   
                <Userhomepage />
                <Lot/>
      */}

      <Home />
    </div>
  );
}
