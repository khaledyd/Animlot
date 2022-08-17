import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
    <div className='Footer'>

  
        <div className='footer-list'>
          <ul className='footer-lists-items'>
            <li className='footer-lists-item'>Terms and conditions</li>
            <li className='footer-lists-item'>Privaciy policy</li>
            <li className='footer-lists-item' >Contact us</li>
            <li className='footer-lists-item'>About us</li>
            <li className='footer-lists-item'>Guides</li>
          </ul>
        </div>
        <p><i class="fa-solid fa-copyright"></i></p>
        <p className='footer-text'> 2022 Animlot</p>
    </div>
  )
}
