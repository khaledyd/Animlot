import React from 'react'
import "./cccontent.css"

export default function Ccdcontent() {
  return (
   <div className='ccdcontent'>
     <div className="ccdcontent-card">
        <div className="ccdcontent-card-elemts">
          <div className="ccdcontent-card-img-time">
            <img className="ccdcontent-card-img" src="./images/Rectangle 9.png" alt="" />
            <div className="card-time">14:20</div>
          </div>

          <div className="ccdcontent-card-items">
            <p className="ccdcontent-card-title">what is life ?</p>
            <div className="views">
              <p className="views-number">10k</p>
              <i class="fa-solid fa-eye"></i>
            </div>
          </div>
        </div>
      </div>
   </div>
    

  )
}
