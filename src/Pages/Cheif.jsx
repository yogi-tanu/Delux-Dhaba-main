import React, { useRef, useEffect, useState } from 'react'
import { ReactTyped } from "react-typed";

import ScrollReveal from 'scrollreveal';

import img40 from '../assets/img/img40.png'
import leafBranch2 from "../assets/img/leaf-branch-2.png"
import leafBranch3 from '../assets/img/leaf-branch-3.png';
import leafBranch4 from "../assets/img/leaf-branch-4.png"
import foodimage from "../assets/img/food.png"
import image3 from "../assets/img/image3.jpg"
import homeSushiTitle from '../assets/img/home-sushi-title.png'
import spinachLeaf from '../assets/img/spinach-leaf.png';
import salad from '../assets/img/Salad.png';
import family_eating from '../assets/family_eating.jpg';

import popular3 from '../assets/img/popular3.png';
import sarsoon from '../assets/img/sarson4.png';
import dal from '../assets/img/Dal4.png';
import gulab from '../assets/img/Gulab.png';
import image1 from '../assets2/Image1.png';
import image2 from '../assets2/Image2.png';
import home1 from '../assets2/home1.jpg';
import chef from '../assets/img/chef.png';

import home2 from '../assets2/home2.jpg.avif';
import home3 from '../assets2/home3.jpg';
import today from '../assets2/today.jpg.avif';
import { Link } from 'react-router-dom';
import './component.css'; // Import CSS for styling
import year from '../db/year.png';
import iof from '../db/iof.png';
import chefsvg from '../db/chef.svg';

import customer from '../db/customer.png';
const Cheif = () => {

  const images = [home1, home2, home3];

  // Initialize state for current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect hook to update image index at an interval
  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the image index
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Interval set to 1 second (1000 milliseconds)

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(interval);
  }, []);



  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);
  const leftDivRef2 = useRef(null);
  const rightDivRef2 = useRef(null);
  const leftDivRef31 = useRef(null);
  const rightDivRef31 = useRef(null);
  const leftDivRef4 = useRef(null);
  const rightDivRef4 = useRef(null);

  const newsletterRef = useRef(null);

  useEffect(() => {
    if (leftDivRef.current && rightDivRef.current) {
      ScrollReveal().reveal(leftDivRef.current, {
        origin: 'bottom', // Start the animation from the bottom
        duration: 1000,
        delay: 250,
        distance: '50px', // Distance to move
        easing: 'ease',
      });

      ScrollReveal().reveal(rightDivRef.current, {
        origin: 'top', // Start the animation from the top
        duration: 1000,
        delay: 250,
        distance: '150px', // Distance to move
        easing: 'ease',
      });
    }
    if (leftDivRef2.current && rightDivRef2.current) {
      ScrollReveal().reveal(leftDivRef2.current, {
        origin: 'left', // Start the animation from the bottom
        duration: 1000,
        delay: 150,
        distance: '100px', // Distance to move
        easing: 'ease',
      });

      ScrollReveal().reveal(rightDivRef2.current, {
        origin: 'right', // Start the animation from the top
        duration: 1000,
        delay: 150,
        distance: '200px', // Distance to move
        easing: 'ease',
      });
    }
    if (leftDivRef31.current && rightDivRef31.current) {
      ScrollReveal().reveal(leftDivRef31.current, {
        origin: 'bottom', // Start the animation from the bottom
        duration: 1000,
        delay: 250,
        distance: '50px', // Distance to move
        easing: 'ease',
      });

      ScrollReveal().reveal(rightDivRef31.current, {
        origin: 'top', // Start the animation from the top
        duration: 1000,
        delay: 250,
        distance: '150px', // Distance to move
        easing: 'ease',
      });
    }
    if (leftDivRef4.current && rightDivRef4.current) {
      ScrollReveal().reveal(leftDivRef4.current, {
        origin: 'left', // Start the animation from the bottom
        duration: 1000,
        delay: 150,
        distance: '100px', // Distance to move
        easing: 'ease',
      });

      ScrollReveal().reveal(rightDivRef4.current, {
        origin: 'right', // Start the animation from the top
        duration: 1000,
        delay: 150,
        distance: '200px', // Distance to move
        easing: 'ease',
      });
    }


  }, []);
  


  const chefsData = [
    {
      name: 'Mr. Rajul Tandoori',
      description: 'Mr. Tandoor has been the chief since a and great taste in the world of food and editable.',
    },
    {
      name: 'Chef Sophie Delacroix',
      description: 'With years of experience in French cuisine, Chef Sophie brings a touch of elegance to every dish.',
    },
    {
      name: 'Chef Alejandro Hernandez',
      description: 'Known for his innovative fusion of Latin American and Asian flavors, Chef Alejandro creates culinary masterpieces.',
    },
    {
      name: 'Chef Mei Ling Chen',
      description: 'Drawing inspiration from her Chinese heritage, Chef Mei Ling crafts dishes that are both traditional and modern.',
    },
  ];
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
 
  useEffect(() => {
     const observer = new IntersectionObserver(
       ([entry]) => {
         setIsVisible(entry.isIntersecting);
       },
       {
         root: null,
         rootMargin: '0px',
         threshold: 0.1,
       }
     );
 
     if (sectionRef.current) {
       observer.observe(sectionRef.current);
     }
 
     return () => {
       if (sectionRef.current) {
         observer.unobserve(sectionRef.current);
       }
     };
  }, []);
const progressValues=[92,93,97,92];

  return (


    <div className='flex flex-col justify-center mainhome  '>

<div ref={sectionRef} className="h-bars">
      <section id="skills" className="skills">
        <h2 className="section-title1">Everything you want to know</h2>
        <div className="progress-wrapper">
          {isVisible && (
            <>
              <div className="progress-container">
                <div className="progress" style={{ '--progress-value': `${progressValues[0]}%` }}>
                 <span className="progress-title">Cleanliness</span>
                 <span className="progress-value">{progressValues[0]}%</span>
                </div>
                <div className="progress" style={{ '--progress-value': `${progressValues[1]}%` }}>
                 <span className="progress-title">Culinary</span>
                 <span className="progress-value">{progressValues[1]}%</span>
                </div>
              </div>
              <div className="progress-container">
                <div className="progress" style={{ '--progress-value': `${progressValues[2]}%` }}>
                 <span className="progress-title">Creativity</span>
                 <span className="progress-value">{progressValues[2]}%</span>
                </div>
                <div className="progress" style={{ '--progress-value': `${progressValues[3]}%` }}>
                 <span className="progress-title">Presentation</span>
                 <span className="progress-value">{progressValues[3]}%</span>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
      {/*first div overall*/} 
      <h2 class="section-title">
        <div class="background"></div>
        <div class="text">Our Records</div>
      </h2>

   <div className="containerbox">
    
        <div className="icon">
          <img src={customer} alt="Icon 1" />
          <p><h2>302</h2>
            Satified Customers </p>
        </div>
        <div className="icon">
          <img src={chefsvg} alt="Icon 2" />
          <p><h2>209</h2>
            Professional Chef</p>      </div>
        <div className="icon">
          <img src={year} alt="Icon 3" />
          <p><h2>64+</h2> years of experience</p>
        </div>
        <div className="icon">
          <img src={iof} alt="Icon 4" />
          <p><h2>453</h2> Items of Foods</p>
        </div>

      </div>
      <br />

      <h2 class="section-title">
        <div class="background"></div>
        <div class="text">Our Chef</div>
      </h2>

      <section className="recently  flex justify-center " id="recently" >
        <div className="recently__container container grid " ref={leftDivRef2}>
          <div ref={rightDivRef2}>
            <img src={chef} className="" alt="Recently Added Dish" />
          </div>
          <div className="recently__data">

            {/* <img src={spinachLeaf} className="recently__data-img" alt="Spinach Leaf" /> */}
            <div className="chef-details-container">
        {chefsData.map((chef, index) => (
          <div key={index} className="chef-details-card">
            <h2>{chef.name}</h2>
            <p>{chef.description}</p>
          </div>
        ))}
      </div>
          </div>


        </div>
        <img src={leafBranch2} className="recently__leaf-1" alt="Leaf Branch 1" />
        <img src={leafBranch3} className="recently__leaf-2" alt="Leaf Branch 2" />
      </section>

    

    </div>


  );
};

export default Cheif