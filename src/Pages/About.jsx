import React from 'react'
import aboutSushiTitleImage from '../assets/img/about-sushi-title.png';
import ReactDOM from 'react-dom';
import aboutImage from '../assets/img/img1.png';
import aboutLeafImage from '../assets/img/leaf-branch-1.png';
import { useRef, useEffect } from 'react'
import ScrollReveal from 'scrollreveal';
import exciting from '../assets/img/Exciting4.png';
import home3 from '../assets2/home3.jpg'

const About = () => {
    const leftDivRef3 = useRef(null);
    const rightDivRef3 = useRef(null);
    const leftDivRef4 = useRef(null);
    const rightDivRef4 = useRef(null);
    useEffect(() => {

        if (leftDivRef3.current && rightDivRef3.current) {
            ScrollReveal().reveal(leftDivRef3.current, {
                origin: 'left', // Start the animation from the bottom
                duration: 1000,
                delay: 150,
                distance: '100px', // Distance to move
                easing: 'ease',
            });

            ScrollReveal().reveal(rightDivRef3.current, {
                origin: 'right', // Start the animation from the top
                duration: 1000,
                delay: 150,
                distance: '200px', // Distance to move
                easing: 'ease',
            });
        }
        if (leftDivRef4.current && rightDivRef4.current) {
            ScrollReveal().reveal(leftDivRef4.current, {
                origin: 'left', // Start the animation from the bottom
                duration: 1000,
                delay: 1000,
                distance: '300px', // Distance to move
                easing: 'ease',
            });

            ScrollReveal().reveal(rightDivRef4.current, {
                origin: 'right', // Start the animation from the top
                duration: 1000,
                delay: 1000,
                distance: '300px', // Distance to move
                easing: 'ease',
            });
        }





    }, []);

    return (
        <section className="about section" id="about">
            <div className="about__container container grid" ref={leftDivRef3}>
                <div className="about__data">
                    <span className="section__subtitle">About Us</span>
                    <h2 className="section__title about__title">
                        <div>
                            We Provide
                            <img src={aboutSushiTitleImage} alt="about" />
                        </div>
                        Healthy Food
                    </h2>
                    <p className="about__description">
                        Food comes to us from our relatives, whether they have wings or roots. This is how we consider food, it also has a culture. It has a history that passes from generation to generation. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, consectetur ut dignissimos quidem asperiores perspiciatis velit suscipit neque enim nisi amet. Soluta iste vitae eum, dicta neque laboriosam sint natus.
                    </p>
                </div>
                <img src={aboutImage} className="about__img" alt="about image" ref={rightDivRef3} />
            </div>

            {/*second section*/}
            <img src={aboutLeafImage} className="about__leaf" alt="leaf branch" />

            <div className="about__container container grid" ref={leftDivRef4} >
                <div className="about__data about__data1">
                    <span className="section__subtitle">Exciting News</span>
                    <h2 className="section__title about__title">
                        <div>
                            New Menu Additions
                            <img src={aboutSushiTitleImage} alt="about" />
                        </div>

                    </h2>
                    <p className="about__description">
                        We're thrilled to announce extended opening hours on Fridays and Saturdays! Join us for late-night dining and live music under the stars.
                        Indulge in our latest culinary creations! From succulent seafood specials to decadent desserts, there's something for everyone to enjoy.
                    </p>
                </div>
                <img src={home3} className="about__img rounded-3xl h-[300px] w-20" alt="about image" ref={rightDivRef4} />
            </div>
            <img src={aboutLeafImage} className="about__leaf" alt="leaf branch" />
        </section>





    )
}

export default About