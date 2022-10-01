import React from "react";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Lot from "./pages/Lot";

import Signup from "./pages/Signup";
import Userhomepage from "./pages/Userhomepage";
import Watch from "./pages/Watch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
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
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/lot" element={<Lot />} />
          <Route exact path="/watch" element={<Watch />} />
          <Route exact path="/userhomepage" element={<Userhomepage />} />
        </Routes>
      </Router>

    </div>
  );
}
