import React from "react";


import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../assets/stock1.png';
import Img2 from '../assets/stock3.png';
import { CarouselItem } from "react-bootstrap";


export default function MyCarousel() {
  return (
    <Carousel>
      <CarouselItem>
        <img src={Img1} text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
            </CarouselItem>
            <CarouselItem>
        <img src={Img2} text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
            </CarouselItem>
            

    </Carousel>
  );
}