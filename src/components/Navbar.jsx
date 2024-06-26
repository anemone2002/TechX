import React, { useEffect, useState } from 'react'
import logoimg from "../assets/images/logo.png"
import menuimg from "../assets/images/menu(1).png"

import './Navbar.css'
import {Link } from 'react-scroll'
const Header = () => {
  const [sticky , setSticky] = useState(false);
  useEffect(()=> {
    window.addEventListener('scroll' , ()=>{
      window.scrollY > 500? setSticky(true) : setSticky(false);
    })
  }, [])
  const[mobileMenu, setMobileMenu] = useState(false)
  const toglleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

  }
  return (
    <nav className={`container ${sticky?  'dark-nav' : ''}`}>
      <img src={logoimg} alt=""  className='logo'/>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
          <li><Link to='home' smooth ={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to='product-container' smooth ={true} offset={-260} duration={500}>Product</Link></li>
          <li><Link to='order-content' smooth ={true} offset={-260} duration={500}>Pre-Order</Link></li>
          <li><Link to='news' smooth ={true} offset={-260} duration={500}>News</Link></li>
          <li><Link to='contact' smooth ={true} offset={-260} duration={500}>Contact</Link></li>

          
      </ul>
      <img src={menuimg} alt="" className='menu-icon' onClick={toglleMenu}/>
    </nav>
  )
}

export default Header
