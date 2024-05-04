import React, { useState } from 'react'
import './Navbar.scss'
import logo from '../../../public/logo.png'
import menu from '../../../public/menu.png'
export default function Navbar() {
  const [show,setShow]=useState(false)
  return <>

  <nav>
    <div className='left'>
      <div className='logo'>
        <img src={logo} alt="logo" />
        <h3>RealEstate</h3>
      </div>
      <div className='links'>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Agent</a>
          </li>
        </ul>

      </div>
    </div>
    <div className='right'>
      <a href="">Sign in</a>
      <a className='signup' href="">Sign up</a>

      <div onClick={()=>{
        setShow(true)
      }} className='menuicon'>
        <img src={menu} alt="menu" />
      </div>
      <div className={show ? 'sidebar active' : 'sidebar'}>

<h2 onClick={()=>setShow(false)}>X</h2>

  
    <a href="">Home</a>

 
    <a href="">About</a>


    <a href="">Contact</a>
 
    <a href="">Agent</a>
  

</div>
    </div>
  </nav>


  
  
  </>
}
