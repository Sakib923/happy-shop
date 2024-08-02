import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo/logo.png";

function NavItem() {
    const [menuToggle, setMenuToggle] = React.useState(false);
    const [socialToggle, setSocialToggle] = React.useState(false);
    const [headerFixed, setHeaderFixed] = React.useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setHeaderFixed(true);
        } else {
            setHeaderFixed(false);
        }
    })

  return (
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
        <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
            <div className='continer'>
                <div className='header-top-area'>
                    <Link to="/singup" className='lab-btn me-3'> <span>Create Account</span></Link>
                    <Link to="/login" className='lab-btn'>Log In</Link>
                </div>
            </div>
        </div>

        <div className='header-bottom'>
            <div className='container'>
                <div className='header-wrapper'>
                    <div className='logo-serch-acte'>
                        <div className='logo'>
                            <Link to={"/"}>
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="menu-area">
                        <div className="menu">
                            <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                <li><Link to="/" >Home</Link></li>
                                <li><Link to="/shop" >Shop</Link></li>
                                <li><Link to="/blog" >Blog</Link></li>
                                <li><Link to="/about" >About</Link></li>
                                <li><Link to="/about" >Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavItem