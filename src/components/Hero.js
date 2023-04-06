import React from 'react'
import './Hero.css'
import Slider from "react-slick";
import { Carousel } from 'react-bootstrap';

import imf from './images/banner1.jpg'


const Hero = () => {
      return (
        <Carousel interval={2000}>
          <Carousel.Item>
            <img
              className="d-block w-100 h-700"
              src="https://thumbs.dreamstime.com/b/children-school-uniforms-white-background-banner-design-189785645.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Sports and Regular Dress All type Uniform Available</h3>
              <p>Contact here 9666637001.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://thumbs.dreamstime.com/z/children-school-uniforms-white-background-banner-design-189785668.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
            <h3>Sports and Regular Dress All type Uniform Available</h3>
              <p>Contact here 9666637001.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://ndps.edu.in/wp-content/uploads/2019/12/admission_banner.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Sports and Regular Dress All type Uniform Available</h3>
              <p>Contact here 9666637001.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}

export default Hero
