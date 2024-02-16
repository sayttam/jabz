import React from 'react'
import logo from '../../assets/jabz-only.png'
import { Link } from "react-router-dom"
import './NavBar.scss'

const NavBar = () => {

  return (
    <nav className='navBar'>
      <ul className='linkNav'>
        <Link to='./jabz'><img src={logo} alt="JABZ" className='logo'/></Link>
        <Link to='./'>Home</Link>
        <Link to='./services'>Services</Link>
        <Link to='./portfolio'>Portfolio</Link>
        <Link to='./contact'>Contact</Link>
      </ul>
    </nav>
  )
}

export default NavBar