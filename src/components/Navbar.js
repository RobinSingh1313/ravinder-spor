import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/logo.png'
import { Link } from 'react-scroll'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>

                    <h1>Ravinder Sports Wear</h1>
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="testimonials" spy={true} smooth={true} offset={-100} duration={500}>Products</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="footer" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
                    </li>
                   
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
