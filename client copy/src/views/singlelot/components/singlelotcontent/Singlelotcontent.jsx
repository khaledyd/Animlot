import React from 'react'
import "./singlelotcontent.css"

export default function Singlelotcontent() {
  return (
    <div Singlelotcontent>

<div className="Singlelotcontent-card">
        <div className="Singlelotcontent-card-elemts">
          <div className="Singlelotcontent-card-img-time">
            <img className="Singlelotcontent-card-img" src="./images/Rectangle 9.png" alt="" />
            <div className="scard-time">14:20</div>
          </div>

          <div className="Singlelotcontent-card-items">
            <p className="Singlelotcontent-card-title">what is life ?</p>
            <div className="sviews">
              <p className="views-number">10k</p>
              <i class="fa-solid fa-eye"></i>
              <p className="likes-number">100</p>
              <i class="fa-solid fa-heart"></i>
            </div>
          </div>
          <div className='comment-section'>
              <input className='comment-input' type="text" />
              <button className='comment-btn' >comment</button>
          </div>
        </div>
      </div>
    </div>
  )
}
