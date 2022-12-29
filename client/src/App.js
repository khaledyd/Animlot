import React from "react";

import { useSelector } from "react-redux";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mininav from "./components/Mininav";
import SingleLot from "./pages/SingleLot";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Settings from "./pages/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleLotFeature from "./pages/SingleLotFeature";
import ForgetPassword from "./pages/ForgetPassword";
import Updatepassword from "./pages/Updatepassword";
import Watch from "./pages/Watch";
import About from "./pages/About";
import Products from "./pages/Products";
export default function App() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="ap">
      {/*
    
                <Home />
            <Dashboard/>       
         <Signup/>
      <Watch/>  
                   <Home />     <Login />  
       
                <Userhomepage />
                <Lot/>
           <Settings />
               <SingleLot />           <Login />
                    <Mininav />        <Signup/>       <SingleLot />       <Dashboard/>       <Upload />
      */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route
            path="/Dashboard"
            element={currentUser ? <Dashboard /> : <Login />}
          />
          <Route
            path="/Settings"
            element={currentUser ? <Settings /> : <Login />}
          />
          <Route
            path="/Upload"
            element={currentUser ? <Upload /> : <Login />}
          />
          <Route path="/videoid/:videoid" element={<SingleLot />} />
          <Route path="/videoid/:videoid" element={<SingleLotFeature />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/Updatepassword" element={<Updatepassword />} />
          <Route path="/Watch" element={<Watch />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}
