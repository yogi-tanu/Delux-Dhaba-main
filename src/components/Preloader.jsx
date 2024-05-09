import React from 'react';
import './Preloader.css'; // Import CSS file for styling
import logo from '../assets/images/LOGO_Finalpng.png'
import leaf from '../assets/img/leaf-branch-4.png'

const Preloader = () => {
  return (
    
    <div className="preloader flex flex-col">
    <p className=" text1" >Welcome To Delux Dhaba</p>
   <img src={logo} alt="Logo" className="logo mt-2" />
   </div>
 


   
  );
};

export default Preloader;