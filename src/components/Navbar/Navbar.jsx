import React ,{useState}from 'react'
import {Link} from 'react-router-dom';
import { FaSignOutAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import './Navbar.css'

 const Navbar = () => {
    const [navlist,setNavlist]=useState(false)
    return (
        <header>
        <div className="container flex">
        <div className="logo">
            <img src='./images/logo.png' alt='#'/>
        </div>
        <div className="nav">
        <ul className={navlist ? 'small':'flex'}>
              <li ><Link to='/'>Home</Link></li>
              <li ><Link to='about'>About</Link></li>
              <li><Link to='services'>Services</Link></li>
              <li ><Link to='blog'>Blog</Link></li>
              <li ><Link to='pricing'>Pricing</Link></li>
              <li ><Link to='contact'>Contact</Link></li>
            </ul>
        </div>
        <div className="button flex">
            <h4>
                <span>2</span> My List
            </h4>
            <button className='btn1 sign'>
           <i><FaSignOutAlt/></i>Sign in
            </button>
        </div>
        <div className="toggle">
            <button onClick={()=>setNavlist(!navlist)}>
                {navlist?  <i><IoClose/></i> : <i><FaBarsStaggered/></i>}
         
            </button>
        </div>
        
        </div>
        </header>
  )
 }
 export default Navbar
