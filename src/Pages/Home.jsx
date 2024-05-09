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

import gulab from '../assets/img/Gulab.png';
import image1 from '../assets2/Image1.png';
import image2 from '../assets2/Image2.png';
import home1 from '../assets2/home1.jpg';
import home2 from '../assets2/home2.jpg.avif';
import home3 from '../assets2/home3.jpg';
import today from '../assets2/today.jpg.avif';
import { Link } from 'react-router-dom';
import './component.css'; // Import CSS for styling
import './home.css';
import counter_service from '../db/counter-service.png';
import delivery from '../db/Delivery.svg';
import hybrid from '../db/icon-2.png';
import prix_Fixe from '../db/prix_Fixe.svg';
import Testimonials from '../components/Testimonals';


import animate from '../db/ani.gif';
import Cheif from './Cheif';
import About from './About'

import './menu.css'
import './review.css'

import Blueberry_Pancakes from '../menu_images/Blueberry_Pancakes.png';
import Caesar_Salad from '../menu_images/Caesar_Salad.png';
import California_Roll from '../menu_images/California_Roll.png';
import Cheeseburger from '../menu_images/Cheeseburger.png';
import Chicken_Alfredo from '../menu_images/Chicken_Alfredo.png';
import Dragon_Roll from '../menu_images/Dragon_Roll.png';
import Fish_Tacos from '../menu_images/Fish_Tacos.png';
import Margherita from '../menu_images/Margherita.png';
import Ribeye_Steak from '../menu_images/Ribeye_Steak.png';
import Spaghetti_Carbonara from '../menu_images/Spaghetti_Carbonara.png';




const Home = () => {

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

        if (newsletterRef.current) {
            ScrollReveal().reveal(newsletterRef.current, {
                origin: 'top',
                duration: 2000,
                delay: 200,
                distance: '100px',
                scale: 1,
                easing: 'ease',
            });
        }
    }, []);

    return (

        <div className='flex flex-col justify-center mainhome  '>
            {/*first div overall*/}
            <section className=" home section flex " id="home"   >
                <div className="home__container container grid  " ref={leftDivRef}>
                    {/* <div className="home_container_img place-self-center md:place-self-auto top-8 " ref={rightDivRef}>
                        
                        <img src={images[currentImageIndex]}  alt="home image" className="home__img w-[15rem] h-[18rem] rounded-3xl  "  />
                    </div> */}
                    <div className="image-container">
                        <img src={image2} alt="Image 1" className="image image1" />
                        <img src={image1} alt="Image 2" className="image image2" />
                        <img src={image3} alt="Image 3" className="image image3" />
                    </div>
                    <div className="home__data">
                        <h1 className="home__title">
                            Enjoy Delicious
                            <div>
                                <img src={image1} className='border' alt="home image" />

                                <ReactTyped strings={[
                                    "Butter Chicken",
                                    "Biryani",
                                    "Samosa",
                                    "Chole Bhature",
                                    "Paneer Tikka",
                                ]} typeSpeed={100}
                                    backDelay={1000}
                                    backSpeed={80}
                                    loop
                                />
                            </div>
                        </h1>
                        <p className="home__description ">
                             At  <b>Delux Dhaba</b>, taste buds embark on a flavorful journey , Where culinary mastery meets rustic ambiance, inviting and warm.<br />A dining experience that transcends mere meals, it's a celebration of culture and fusion.

                        </p>
                        <Link to="/contactUs" className="button">
                          Lets Explore <i className="ri-arrow-right-line"></i>
                        </Link>

                    </div>
                </div>
                <img src={leafBranch2} alt="leaf branch" className="home__leaf-1 " />
                <img src={leafBranch4} alt="leaf branch" className="home__leaf-2" />
                <a href="#" className="scrollup" id="scroll-up">
                    <i className="ri-arrow-up-line"></i>
                </a>
            </section>


            <img src={leafBranch2} className="recently__leaf-1" alt="Leaf Branch 1" />
            <img src={leafBranch3} className="recently__leaf-2" alt="Leaf Branch 2" />



            <section>

            </section >





            {/* Newsletter Section */}
            < section className="newsletter section flex " ref={newsletterRef} >
                <div className="newsletter__container">
                <h2 class="section-title">
                   <div class="background"></div>
                   <div class="text">Our Services</div>
                </h2>

                    <div className="containerbox">
                        <div className="icon">
                            <img src={delivery} alt="Icon 1" />
                            <p><h2>Food Delivery</h2>
                                Our Free Delivery service also offers quick delivery to all customers.</p>
                        </div>
                        <div className="icon">
                            <img src={hybrid} alt="Icon 2" />
                            <p><h2>Hybrid Service</h2>
                                Enjoy our utlra dishes in on of our locations.Our staff will provide you with the best service</p>
                        </div>
                        <div className="icon">
                            <img src={prix_Fixe} alt="Icon 3" />
                            <p> <h2>Prix Fixe Service</h2>The Prix Fixe Service provides a fixed-price dining experience with a curated menu. </p>
                        </div>
                        <div className="icon">
                            <img src={counter_service} alt="Icon 4" />
                            <p> <h2>Counter Service</h2> At our Counter Service, you can quickly order and enjoy your meal at the counter.</p>
                        </div>

                    </div>
                </div>
                <img src={spinachLeaf} className="newsletter__spinach" alt="Spinach Leaf" />

            </section >
            <About/>

    <Cheif/>

    <section>
    <h2 class="section-title">
      <div class="background"></div>
      <div class="text">Appetizers</div>
    </h2>


      <div className="menu">

        <div className="menu-item menu-item-1">Menu Item 1</div>
        <div className="menu-item menu-item-2">
          <div className="food-list">
          
            <div className="food-item">
              <img src={Caesar_Salad} alt="Salad Icon" className="food-icon" />
              <div className="food-details">
                <h3 className="food-name">Caesar Salad</h3>
                <p className="food-price">$12.99</p>
                <p className="food-description">Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese.</p>
              </div>
            </div>
            <div className="food-item">
              <img src={California_Roll} alt="Sushi Icon" className="food-icon" />
              <div className="food-details">
                <h3 className="food-name">California Roll</h3>
                <p className="food-price">$9.99</p>
                <p className="food-description">Sushi roll filled with crab meat, avocado, and cucumber, wrapped in seaweed and rice.</p>
              </div>
            </div>
            <div className="food-item">
              <img src={Spaghetti_Carbonara} alt="Pasta Icon" className="food-icon" />
              <div className="food-details">
                <h3 className="food-name">Spaghetti Carbonara</h3>
                <p className="food-price">$11.99</p>
                <p className="food-description">Classic Italian pasta dish made with spaghetti, eggs, pancetta, Parmesan cheese, and black pepper.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-item menu-item-3">
          <div className="food-list">
          
          
            <div className="food-item">
              <img src={Blueberry_Pancakes} alt="Pancake Icon" className="food-icon" />
              <div className="food-details">
                <h3 className="food-name">Blueberry Pancakes</h3>
                <p className="food-price">$7.99</p>
                <p className="food-description">Fluffy pancakes filled with fresh blueberries, served with maple syrup and whipped cream.</p>
              </div>
            </div>
            <div className="food-item">
              <img src={Dragon_Roll} alt="Sushi Icon" className="food-icon" />
              <div className="food-details">
                <h3 className="food-name">Dragon Roll</h3>
                <p className="food-price">$13.99</p>
                <p className="food-description">Sushi roll filled with eel, avocado, and cucumber, topped with thinly sliced avocado and eel sauce.</p>
              </div>
            </div>
            <div className="food-item">
              <img src={Chicken_Alfredo} alt="Pasta Icon" className="food-icon" />
              <div className="food-details">
                <h3 className="food-name">Chicken Alfredo</h3>
                <p className="food-price">$12.99</p>
                <p className="food-description">Creamy Alfredo sauce tossed with fettuccine pasta and grilled chicken breast, garnished with Parmesan cheese.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <h2 class="section-title">
        <div class="background"></div>
        <div class="text">Main Dishes</div>
        </h2>


      <div className="menu">

        <div className="menu-item menu-item-2">
          <div className="food-list">
            <div className="food-item">
              <img src={Margherita} alt="Pizza Icon" className="food-icon" />
              <div className="food-details">
                <h3 className="food-name">Margherita Pizza</h3>
                <p className="food-price">$10.99</p>
                <p className="food-description">Classic pizza topped with tomato sauce, mozzarella cheese, and basil leaves.</p>
              </div>
            </div>
            <div className="food-item">
              <img src={Cheeseburger} alt="Burger Icon" className="food-icon" />
              <div className="food-details">
                <h3 className="food-name">Cheeseburger</h3>
                <p className="food-price">$8.99</p>
                <p className="food-description">Juicy beef patty with melted cheese, lettuce, tomato, and pickles, served on a toasted bun.</p>
              </div>
            </div>
            <div className="food-item">
              <img src={Caesar_Salad} alt="Salad Icon" className="food-icon" />
              <div className="food-details">
                <h3 className="food-name">Caesar Salad</h3>
                <p className="food-price">$12.99</p>
                <p className="food-description">Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese.</p>
              </div>
            </div>

            
          </div>
          
        </div>
        <div className="menu-item menu-item-3">
          <div className="food-list">
          <div className="food-item">
              <img src={Fish_Tacos} alt="Taco Icon" className="food-icon" />
              <div className="food-details">
                <h3 className="food-name">Fish Tacos</h3>
                <p className="food-price">$9.99</p>
                <p className="food-description">Soft corn tortillas filled with grilled fish, cabbage slaw, avocado, and salsa.</p>
              </div>
            </div>
            <div className="food-item">
              <img src={Ribeye_Steak} alt="Steak Icon" className="food-icon" />
              <div className="food-details">
                <h3 className="food-name">Ribeye Steak</h3>
                <p className="food-price">$18.99</p>
                <p className="food-description">Juicy and flavorful ribeye steak cooked to your liking, served with mashed potatoes and grilled vegetables.</p>
              </div>
            </div>
            <div className="food-item">
              <img src={Blueberry_Pancakes} alt="Pancake Icon" className="food-icon" />
              <div className="food-details">
                <h3 className="food-name">Blueberry Pancakes</h3>
                <p className="food-price">$7.99</p>
                <p className="food-description">Fluffy pancakes filled with fresh blueberries, served with maple syrup and whipped cream.</p>
              </div>
            </div>
          
           
          </div>
        </div>
        <div className="menu-item menu-item-4">Menu Item 1</div>

      </div>

      <a href="#" class="button1">View Menu</a>

    </section>


    <Testimonials/>






        </div >


    );
};

export default Home