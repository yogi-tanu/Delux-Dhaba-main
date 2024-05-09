import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import logofoot from '../assets/img/logofoot.png';

const Footer = () => {
    const foot1Ref = useRef(null);
    useEffect(() => {
        if (foot1Ref.current) {
            ScrollReveal().reveal(foot1Ref.current, {
                origin: 'top', // Animation starts from the top
                duration: 1000,
                delay: 150,
                distance: '100px', // Distance to move
                easing: 'ease',
            });
        }
    }, []);

    return (
        // <footer className="footer "  ref={foot1Ref}>
        //     <div className="footer__container container grid"  >
        //         <div>
        //             <Link to="/" className="footer__logo">
        //                 <img src={logoImage} alt="logo image" />
        //                 Delux Dabha
        //             </Link>
        //             <p className="footer__description">
        //                 Food for the body is not <br />
        //                 enough. There must be food <br />
        //                 for the soul.
        //             </p>
        //         </div>

        //         <div className="footer__content">
        //             <div>
        //                 <h3 className="footer__title">Main Menu</h3>
        //                 <ul className="footer__links">
        //                     <li>
        //                         <Link to="/about" className="footer__link">About</Link>
        //                     </li>
        //                     <li>
        //                         <Link to="/menu" className="footer__link">Menus</Link>
        //                     </li>
        //                     <li>
        //                         <Link to="/menu" className="footer__link">Offers</Link>
        //                     </li>
        //                     <li>
        //                         <Link to="/contact" className="footer__link">Events</Link>
        //                     </li>
        //                 </ul>
        //             </div>

        //             <div>
        //                 <h3 className="footer__title">Information</h3>
        //                 <ul className="footer__links">
        //                     <li>
        //                         <a href="#" className="footer__link">Contact</a>
        //                     </li>
        //                     <li>
        //                         <a href="#" className="footer__link">Order & Returns</a>
        //                     </li>
        //                     <li>
        //                         <a href="#" className="footer__link">Videos</a>
        //                     </li>
        //                     <li>
        //                         <a href="#" className="footer__link">Reservation</a>
        //                     </li>
        //                 </ul>
        //             </div>

        //             <div>
        //                 <h3 className="footer__title">Address</h3>
        //                 <ul className="footer__links">
        //                     <li className="footer__information">
        //                         Lorem, ipsum dolor. <br /> Lorem, ipsum dolor..
        //                     </li>
        //                     <li className="footer__information">
        //                         9AM - 11PM
        //                     </li>
        //                 </ul>
        //             </div>

        //             <div>
        //                 <h3 className="footer__title">Social Media</h3>
        //                 <ul className="footer__social">
        //                     <a
        //                         href="https://www.facebook.com"
        //                         target="_blank"
        //                         className="footer__social-links"
        //                     >
        //                         <i className="ri-facebook-circle-fill"></i>
        //                     </a>
        //                     <a
        //                         href="https://www.instagram.com"
        //                         target="_blank"
        //                         className="footer__social-links"
        //                     >
        //                         <i className="ri-instagram-fill"></i>
        //                     </a>
        //                     <a
        //                         href="https://www.linkedin.com"
        //                         target="_blank"
        //                         className="footer__social-links"
        //                     >
        //                         <i className="ri-linkedin-fill"></i>
        //                     </a>
        //                 </ul>
        //             </div>
        //         </div>

        //         <img src={spinachLeafImage} className="footer__spinach" alt="spinach leaf" />
        //         <img src={leafBranch4Image} className="footer__leaf" alt="leaf branch" />
        //     </div>

        //     <div className="footer__info container">
        //         <div className="footer__card">
        //             <img src={footerCard1Image} alt="card image" />
        //             <img src={footerCard2Image} alt="card image" />
        //             <img src={footerCard3Image} alt="card image" />
        //             <img src={footerCard4Image} alt="card image" />
        //         </div>
        //         <span className="footer__copy">
        //             &#169; Copyright By Delux Dhaba . <br /> All rights reserved. 
        //             Developed By UTell IT Services .
        //         </span>
        //     </div>
        // </footer>
        <footer className="site-footer" ref={foot1Ref} >
            <div className='white'>
            <div className="container">
                <img src={logofoot} alt="" />

                <div className="row">
                    <div className="col-sm-12 col-md-6 data">
                        <h6> DuLexe Dhaba</h6>
                        <p className="text-center text-black">
                        At Delux Dhaba, taste buds embark on a flavorful journey , Where culinary mastery meets rustic ambiance, inviting and warm.
A dining experience that transcends mere meals, it's a celebration of culture and fusion.                            </p>
                    </div>

                    <div className="col-xs-6 col-md-3  text-black  ">
                        <h6>Explore</h6>
                        Road-01, Block-B,West Canada
                        <br/>
                        1234567890
                        <br/>
                        Opening Time :
                        <br/>
                        Mon-Sat : 10AM - 10PM 
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links ">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>
                <hr />

                
            </div>
            
            <div className="container text-white bg-black" id='footmy'>
            <div className="row" >
                    <div className="col-md-8 col-sm-6 col-xs-12 util">
                        <p className="copyright-text text-white">Copyright &copy; 2024 All Rights Reserved by The <side>Dulexe</side> Dhaba.
                            <br />
                            <a href="https://utellitservices.com/"  >Designed By UTell IT services </a><FontAwesomeIcon icon={faHeart}  style={{color: "#ff0000",}} />
                        </p>
                    </div>

                   
                </div>
                
            </div>
        </div>
        </footer>);
};

export default Footer;
