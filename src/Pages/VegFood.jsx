import React, { useEffect, useState,useHistory, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import { getDatabase, ref, onValue } from './config';
import '../App.css';



const VegFood = () => {


  const [dishes, setDishes] = useState([]);
  const vegFoodRef = useRef(null);

  useEffect(() => {
    const config = {
      origin: 'top',
      duration: 2000,
      distance: '200px',
      scale: 1,
      easing: 'ease',
    };

    if (vegFoodRef.current) {
      ScrollReveal().reveal(vegFoodRef.current, {
        ...config,
      });
    }

    const dbRef = getDatabase();
    const starCountRef = ref(dbRef, 'Food/Veg');

    const fetchData = () => {
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const updatedDishes = Object.values(data).map(item => item);
          setDishes(updatedDishes);
        }
      });
    };

    fetchData();

    // Cleanup function
    return () => {
      // If you need to unsubscribe from the listener, you can do it here
    };
  }, []); // Empty dependency array to run only once on

  return (
    <section className="popular section" id="popular" ref={vegFoodRef}>
  
      <h3 className="veg-title  " >Vegetarian Food</h3>

      <div className="menu-container menucontant">
        {dishes.map((dish, index) => (
          <div key={index} className="menu-item1 section__subtitle" style={{ display: 'flex', justifyContent: 'space-between', margin: '5px 0' }}>
            <span>{dish.name}</span>
            <span>{dish.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VegFood;
