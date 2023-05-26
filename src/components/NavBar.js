import React from 'react';
import logo from "../assets/images/logo.png"
import ham from "../assets/images/hamburger.ico"


export const NavBar=()=> {
  return (
    <div className='navbar'>
        <div className="navbar-logo">
            <img src={logo} alt="Logo"/>
        </div>      
        <div className="navbar-ham">
        <img src={ham} alt="hamburger" />
        </div>
    </div>
  )
}
