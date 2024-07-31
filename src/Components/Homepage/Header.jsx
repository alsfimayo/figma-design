import React, { useState } from 'react'
import './Header.css'


import {Menu,X} from "lucide-react"

const Header = () => {
  const[isOPen,setIsOpen]=useState(false)
  const toggleManu=()=>{
    setIsOpen(!isOPen)
  }

  return (
    
    
    <>
    <header className='homepage'>
      <div  className='navbar'>
        <div className='logo'>FASCO</div>
        <ul className={ `list-items ${isOPen ? 'active': ''}`}>
          <li><a href="#" >Home</a></li>
          <li><a href="#" >Deals</a></li>
          <li><a href="#" >New Arrivals</a></li>
          <li><a href="#" className='ali' >Packages</a></li>
          <li><a href="#" >Sign in</a></li>
          <button className='nav-btn'>Sign Up</button>

          
        
        </ul>
        <button onClick={toggleManu} className='menu-btn'>
          {isOPen ? <X className='nav-close'/> : <Menu className='open-nav'/>}
          
          
          </button>
          
      </div>
      
    </header>
    </>

  )
}

export default Header