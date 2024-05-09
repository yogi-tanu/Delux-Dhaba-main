import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import for using Link components in navigation
import ReactDOM from 'react-dom';
import logoImage from '../assets/img/LOGO_Finalpng.png';
import location from '../db/location-maker.png';
import email from '../db/email.png';
import phone from '../db/Image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import leafBranch4 from '../assets/img/leaf-branch-4.png'; // Import for leaf-branch-4.png
import leafBranch3 from '../assets/img/leaf-branch-3.png'; // Import for leaf-branch-3.png
import './nav.css'

const Navbar = () => {
    const [showSidebar, setShowSidebar] = React.useState(false);
    const [theme, setTheme] = React.useState('light'); // Step 2: Add state for theme
    const toggleTheme = () => {
        setTheme(theme === 'dark-theme' ? 'light' : 'dark-theme');
    };

    // Step 4: Apply theme class
    useEffect(() => {
        document.body.className = theme; // Apply the theme class to the root element
    }, [theme]);

    return (
        <header className="header " id="header">
            <div className='topheading'>
                <span><img src={location} />   Road-01, Block-B,West Canada  </span>
                
                <span className='timing'> <FontAwesomeIcon icon={faFacebook} className='mr-2' /> 
                <FontAwesomeIcon icon={faInstagram} className='mr-2' /> <img src={phone} /> 1234567890  </span>

            </div>
            <nav className="nav container ">
                <Link to="/" className="nav__logo ">
                    <img src={logoImage} alt="logo image" className='md:block ' />
                </Link>
                <ul className={`md:hidden gap-3  nav__menu flex-col  items-center flex   ${showSidebar ? '' : 'hidden'}  h-[300px] rounded-2xl w-full` }>
                    <li className="nav__item">
                    <Link to="/" className="nav__link" onClick={() => setShowSidebar(!showSidebar)}>Home</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/about" className="nav__link" onClick={() => setShowSidebar(!showSidebar)}>About Us </Link>
                    </li>
                    <li className="nav__item">
                    <Link to="/menu" className="nav__link" onClick={() => setShowSidebar(!showSidebar)}>Menu</Link>
                    </li>
                    <li className="nav__item">
                    <Link to="/contactUs" className="nav__link" onClick={() => setShowSidebar(!showSidebar)}>Contact Us</Link>
                    </li>
                </ul>
                <ul className={`md:flex hidden nav__list gap-10   z-10  `}>
                    <li className="nav__item">
                    <Link to="/" className="nav__link" onClick={() => setShowSidebar(!showSidebar)}>Home</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/about" className="nav__link" onClick={() => console.log("Clicked me")}> About Us  </Link>
                    </li>
                    <li className="nav__item">
                    <Link to="/menu" className="nav__link" onClick={() => setShowSidebar(!showSidebar)}>Menu</Link>
                    </li>
                    <li className="nav__item">
                    <Link to="/contactUs" className="nav__link" onClick={() => setShowSidebar(!showSidebar)}>Contact Us</Link>
                    </li>
                </ul>

                <div className={` absolute top-3 right-3 cursor-pointer right-3 z-10 flex m-[40px] md:hidden ${showSidebar ? '' : 'hidden'}`} id="nav-close" onClick={() => setShowSidebar(!showSidebar)}>
                    <i className="ri-close-line text-3xl"></i>
                </div>

                <img src={leafBranch4} alt="nav image" className="nav__img-1" />
                <img src={leafBranch3} alt="nav image" className="nav__img-2" />

                <div className={`nav__buttons  `}>
                    <div className="button-appointment">Book A Table</div>
                    <div className="nav__toggle" id="nav-toggle" onClick={() => setShowSidebar(!showSidebar)}>
                        <i className="ri-apps-2-line"></i>
                    </div>
                </div>
            </nav>
        </header >
    );
};

export default Navbar;
