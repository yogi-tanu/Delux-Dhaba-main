import React from 'react'
import vegImage from '../assets/img/Popular1.png';
import nonVegImage from '../assets/img/img40.png';
import indianSpecialImage from '../assets/img/popular3.png';
import menuimage from '../assets/img/menu_food.jpg';
import { useRef, useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';

import { ReactTyped } from "react-typed";
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


const isMobile = () => {
  return window.innerWidth <= 768;
};

const Menu = () => {





  return (


    <section>
      <h1 className='section-title' >Appetizers</h1>

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
      <h1 className='section-title' >Main Dishes</h1>

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


  );
};



export default Menu