import React from "react";
import Featured from "./views/homepage/components/featured/Featured";
import FeaturedTitle from "./views/homepage/components/featuredtitle/FeaturedTitle";
import Footer from "./views/homepage/components/footer/Footer";
import LoadMore from "./views/homepage/components/loadmore/LoadMore";
import Nav from "./views/homepage/components/navbar/Nav";
import SponsoredTitle from "./views/homepage/components/sponsored-title/SponsoredTitle";
import Sponsored from "./views/homepage/components/sponsored/Sponsored";
import Homepage from "./views/homepage/page/Homepage";
import Homepageaccount from "./views/homepageaccount/components/Homepageaccount";
import Lotsettingfooter from "./views/lotseating/components/lotsettingfooter/Lotsettingfooter";
import Lotsettingform from "./views/lotseating/components/lotsettingform/Lotsettingform";
import Lotseetingnav from "./views/lotseating/components/lotsettingnav/Lotseetingnav";
import Singupaccount from "./views/singup/compnents/singupaccount/Singupaccount";
import Singupfooter from "./views/singup/compnents/singupfooter/Singupfooter";
import Singupnav from "./views/singup/compnents/singupnav/Singupnav";
import Singup from "./views/singup/page/Singup";
import Singingaccountfooter from "./views/sining/components/singinaccountfoooter/Singingaccountfooter";
import SingingAccount from "./views/sining/components/singingaccount/SingingAccount";
import SinginNav from "./views/sining/components/singinnav/SinginNav";
import Singing from "./views/sining/page/Singing";
import Userhomepagefooter from "./views/userhomepage/components/userhomepagefooter/Userhomepagefooter";
import Userhomepageheader from "./views/userhomepage/components/userhomepageheader/Userhomepageheader";
import Userhomepageinfromation from "./views/userhomepage/components/userhomepageinfromation/Userhomepageinfromation";
import Userhomepagenav from "./views/userhomepage/components/userhomepagenav/Userhomepagenav";
import Userhomepage from "./views/userhomepage/page/Userhomepage";

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
     <Lotseetingnav/>
     <Lotsettingform/>
     <Lotsettingfooter/>
    </div>
  );
}
