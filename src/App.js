import React from "react";
import Navbar from "./components/navbar";
import Home from "./routes/home";

//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';



import { BrowserRouter } from "react-router-dom";
import { Routes,Route } from "react-router-dom";
import Features from "./routes/Features";
import Pricing from "./routes/Pricing";
import Footer from "./components/footer";
import Values from "./routes/values";
import Privacy from "./routes/privacy";
import Careers from "./routes/careers";
import Diversity from "./routes/diversity";
import MyCarousel from "./components/mycarousel";



const App = () => 
{
  return (
  <>
  <BrowserRouter>
  <Navbar />
  <MyCarousel />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/features' element={<Features />} />
    <Route path='/pricing' element={<Pricing />} />
    <Route path='/values' element={<Values />} />
    <Route path='/careers' element={<Careers />} />
    <Route path='/diversity' element={<Diversity />} />
  </Routes>

  <Footer />
  </BrowserRouter>
  </>
  );
};

export default App;