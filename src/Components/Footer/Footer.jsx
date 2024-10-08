import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/Assets/logo_big.png'



 const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>E-kart</p>
        </div>
        <ul className='footer-links'>
            <li>
Company
            </li>
            <li>
product
            </li>
           < li>
About
            </li>
            <li>
Contact
            </li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container"><a href="#"><i class='bx bxl-facebook-square'></i></a></div>
            <div className="footer-icons-container"> <a href="#"><i class='bx bxl-instagram' ></i></a></div>
            <div className="footer-icons-container"> 
                <a href="#"><i class='bx bxl-twitter' ></i></a></div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright 2024 -♥ </p>
        </div>
    </div>
  )
}
export default Footer;