import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
<div className="footer-content-left">
<img src={assets.logo} alt="" />
<p>A paragraph is a distinct section of a written work that focuses on a single topic or idea, consisting of one or more sentences.</p>
<div className="footer-social-icons">
    <img src={assets.facebook_icon} alt="" />
    <img src={assets.linkedin_icon} alt="" />
    <img src={assets.twitter_icon} alt="" />
</div>
</div>
<div className="footer-content-center">
       <h2>COMPANY</h2>
       <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy policy</li>
       </ul>
        </div> 
<div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
  <li>01818974555</li>
  <li>sumaiya@gmail.com</li>
</ul>
</div>
       
        </div>
        <hr/>
        <p className="footer-copyright">
          Copyright 2025 Tomato.com-All Right Reserved
        </p>
    </div>
  )
}

export default Footer