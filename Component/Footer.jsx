import React from 'react'
import './Footer.css'
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { PiCopyright } from "react-icons/pi";

const Footer = () => {
  return (
    <>
    <div className='footerContainer'>
      <div className='foot1'>
        <h1 className='h1'>T SHOP</h1>
        <p className='p1'>info@mysite.com</p>
        <p className='p2'>Tel: 123-456-7890</p>
      </div>
      <div className='foot2'>
        <div className='text1'>
        <p>Shop</p>
        <p className='pNew'>New</p>
        <p>Women</p>
        <p>Men</p>
        </div>
        <div className='text2'>
        <p>Our Store</p>
        <p className='pAbout'>About Us</p>
        <p>Subscribe</p>
        <p>FAO</p>
        </div>
        <div className='text3'>
        <p>Terms & Conditions</p>
        <p className='pStore'>Store Policy</p>
        <p>Shipping & Returns</p>
        <p>Payment Methods</p>
        </div>
      </div>
    </div>
    <div className='linkContainer'>
      <div className='link1'>
      <TiSocialFacebook className='icon1'/>
      <FaInstagram className='icon2'/>
      <FaYoutube className='icon3'/>
      <FaPinterestP className='icon4'/>
      <FaTiktok className='icon5' />
      </div>
      <div className='link2'>
        <p><PiCopyright className='icon6' style={{position:'relative',right:'1px', top:'3px'}}/>2035 by T Shop. Powered and secured by Wix</p>
      </div>
    </div>
    </>
  )
}

export default Footer
