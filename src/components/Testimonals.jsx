import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../Pages/review.css'
import shirley from '../shirley.png';
import daniel from '../daniel.png';
import theo from '../theo.png';

export default class Testimonials extends Component {
  render() {
    return (
      
      <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      
      <div>

      <h2 class="section-title">
        <div class="background"></div>
        <div class="text">Testimonals</div>
      </h2>

        
        <img src={shirley} />
        <div className="myCarousel">
          <h3>Shirley Fultz</h3>
          <h4>Designer</h4>
          <p>
            It's freeing to be able to catch up on customized news and not be
            distracted by a social media element on the same site
          </p>
        </div>
      </div>

      <div>

      <h2 class="section-title">
        <div class="background"></div>
        <div class="text">Testimonals</div>
      </h2>

        <img src={daniel} />
        <div className="myCarousel">
          <h3>Daniel Keystone</h3>
          <h4>Designer</h4>
          <p>
            The simple and intuitive design makes it easy for me use. I highly
            recommend Fetch to my peers.
          </p>
        </div>
      </div>

      <div>

      <h2 class="section-title">
        <div class="background"></div>
        <div class="text">Testimonals</div>
      </h2>
      
        <img src={theo} />
        <div className="myCarousel">
          <h3>Theo Sorel</h3>
          <h4>Designer</h4>
          <p>
            I enjoy catching up with Fetch on my laptop, or on my phone when
            I'm on the go!
          </p>
        </div>
      </div>
    </Carousel>
    );
  }
}
