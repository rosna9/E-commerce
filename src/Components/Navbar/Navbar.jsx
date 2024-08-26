
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import'./Navbar.css'
import logo from '../Assets/Assets/logo.png'
import cartIcon from '../Assets/Assets/cart_icon.png';

const Navbar=() =>{
  const[menu,setmenu]= useState("shop")
  return (
    <div className='navbar'>
        <div className ="nav-logo">
             <img src={logo} alt="" /> 
                     <p>E-kart</p>
        </div> 
        <ul className='nav-menu'>
            <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("mens")}}><Link style={{textDecoration:'none'}}to='/mens'>Men👨</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("womens")}}><Link style={{textDecoration:'none'}}to='/womens'>Women👩</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration:'none'}}to='/kids'>Kids🧒</Link>{menu==="kids"?<hr/>:<></>}</li></ul>
            <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cartIcon} alt=""/></Link>
                
                <div className='nav-cart-count'>0</div>
                </div> 
           </div>
   
  );
}

export default Navbar;
