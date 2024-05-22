import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/logo_big.png'
import instergram_icon from '../Assests/instagram_icon.png'
import printester_icon from '../Assests/pintester_icon.png'
import whatsapp_icon from '../Assests/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
            <img src= {instergram_icon} alt="" />
        </div>

        <div className="footer-icons-container">
            <img src= {printester_icon} alt="" />
        </div>

        <div className="footer-icons-container">
            <img src= {whatsapp_icon} alt="" />
        </div>

      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 All Right Reserved.</p>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Footer
