import React from "react";
import Navbar from "./components/navbar";
import ExampleCarouselImage from './assets/stock1.png';
import Carousel from 'react-bootstrap/Carousel';
//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';



import { BrowserRouter } from "react-router-dom";
import { Routes,Route } from "react-router-dom";


const App = () => 
{
  return (
  <>
  <BrowserRouter>
  <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  <Navbar />
  </BrowserRouter>
  </>
  );

};

export default App;