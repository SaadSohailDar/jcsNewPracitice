import React from "react";
import Navbar from "./components/navbar";
import Home from "./routes/home";

//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';



import { BrowserRouter } from "react-router-dom";
import { Routes,Route } from "react-router-dom";
import Features from "./routes/Features";
import Pricing from "./routes/Pricing";

const App = () => 
{
  return (
  <>
  <BrowserRouter>
  <Navbar />
  
  <div className='Spacing'></div>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/features' element={<Features />} />
    <Route path='/pricing' element={<Pricing />} />
  </Routes>
  </BrowserRouter>
  </>
  );

};

export default App;