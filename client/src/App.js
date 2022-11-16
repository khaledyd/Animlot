import React from "react";

import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mininav from "./components/Mininav";
import SingleLot from "./pages/SingleLot";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Settings from "./pages/Settings";
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
           <Home />      
                      <Login />
                    <Mininav />        <Signup/>       <SingleLot />       <Dashboard/>       <Upload />
      */}

      <Settings />
    </div>
  );
}
