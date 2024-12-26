import React from 'react'
import './Header.css';
import {NavLink} from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import { GiShoppingBag } from "react-icons/gi";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  return (
    <>
    <div>
      <div className='nav'>
          <p className='p1'>Sale is on! 25% off sitewide using TEES25 at checkout</p>
      </div>
      <div className='navBar'>
          <div className='Tshop'>
            <h1 className='h1'>T SHOP</h1>
          </div>
          <GiShoppingBag className='shopping'/>
          <CiMenuFries className='menu'/>

          <div className='new'>
              <p className='para' style={{fontSize: '20px' , }}>
                <NavLink className='nav-link' to="/New" style={{textDecoration:'none',}}>New</NavLink></p>
          </div>
          <div className='women'>
            <p className='para' style={{fontSize: '20px' ,}}><NavLink className='nav-link' to="/Women" style={{textDecoration:'none'}}>Women</NavLink></p>
          </div>
          <div className='men'>
            <p className='para' style={{fontSize: '20px' ,}}><NavLink className='nav-link' to="/Men" style={{textDecoration:'none'}}>Men</NavLink></p>
          </div>
          <div className='logIn'>
            <p className='loginpara'style={{fontSize: '20px' ,}}><IoIosContact style={{position:'relative',right:'8px', top:'3px'}}/>Log In<GiShoppingBag style={{position:'relative',left:'8px', top:'3px'}}/>
            </p>
          </div>
      </div>
      
    </div>
      
    </>
  )
}

export default Header
