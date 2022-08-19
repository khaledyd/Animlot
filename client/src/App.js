import React from "react";


import Homepage from "./views/homepage/page/Homepage";

import Lotseeting from "./views/lotseating/page/Lotseeting";

import Singup from "./views/singup/page/Singup";

import Singing from "./views/sining/page/Singing";
import Homepageaccount from "./views/homepageaccount/components/Homepageaccount"

import Userhomepage from "./views/userhomepage/page/Userhomepage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export default function App() {
  return (
    <div className="ap">
      {/*
        sing in........
           <Singing/>
     */}

      {/* 
      sing up........
     <Singup/>
        */}
      {/*  
      homepage.......
    <Homepage/> 
     */}

      {/* 
      homepageaccount....... 
  <Homepageaccount/>
     */}
      {/* 
      Userhomepage....... 
 <Userhomepage/>
     */}
      {/* 
      lotsetting....... 
     <Lotseeting/>
     */}
     {/* */}
      <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />

        <Route
          exact
          path="/Singing"
          element={<Singing />}
        />

        <Route
          exact
          path="/Singup"
          element={<Singup />}
        />

        <Route
          exact
          path="/Userhomepage"
          element={<Userhomepage />}
        />

        <Route
          exact
          path="/Homepageaccount"
          element={<Homepageaccount />}
        />
        <Route path="/Lotseeting" element={<Lotseeting />} />
      </Routes>
    </Router>
    </div>
  );
}
