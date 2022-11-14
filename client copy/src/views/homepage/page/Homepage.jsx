import React from 'react'
import Featured from '../components/featured/Featured'
import FeaturedTitle from '../components/featuredtitle/FeaturedTitle'
import Footer from '../components/footer/Footer'
import LoadMore from '../components/loadmore/LoadMore'
import Nav from '../components/navbar/Nav'
import SponsoredTitle from '../components/sponsored-title/SponsoredTitle'
import Sponsored from '../components/sponsored/Sponsored'
import axios from "axios"
import {useState , useEffect} from "react"


export default function Homepage() {
  
    const [vedios, setVedios]= useState([])
  
    useEffect(()=>{
      const fetchPosts = async () => {
        const res = await axios.get("/vedios")
        setVedios(res.data)
        console.log(res)
      }
      fetchPosts()
    },[])

  return (
    <div className='Homepage'>
    <Nav/>
    <SponsoredTitle/>
 
        {vedios.map((ve)=>(
            <Sponsored />
        ))}

      
   
  
  
    <FeaturedTitle/>
    <div className="Featured-card">
          <Featured
              fimgs="./images/Rectangle 35.png"
          />
          <Featured
              fimgs="./images/Rectangle 11.png"
          />
          <Featured
              fimgs="./images/Rectangle 43.png"
          />
          <Featured
              fimgs="./images/Rectangle 45.png"
          />
          <Featured
              fimgs="./images/Rectangle 31.png"
          />
          <Featured
              fimgs="./images/Rectangle 29.png"
          />
          <Featured
              fimgs="./images/Rectangle 23.png"
          />
          <Featured
              fimgs="./images/Rectangle 27.png"
          />
          <Featured
              fimgs="./images/Rectangle 9.png"
          />
          <Featured
              fimgs="./images/Rectangle 32.png"
          />
          <Featured
              fimgs="./images/Rectangle 24.png"
          />
          <Featured
              fimgs="./images/Rectangle 9.png"
          />
      </div>
    <LoadMore/>
    <Footer/>
    </div>
  )
}
