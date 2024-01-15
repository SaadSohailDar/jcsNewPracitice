import React from "react";
import Navbar from "./components/navbar";

//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';



import { BrowserRouter } from "react-router-dom";
import { Routes,Route } from "react-router-dom";


const App = () => 
{
  return (
  <>
  <BrowserRouter>
  <Navbar />
  </BrowserRouter>
  </>
  );

};

export default App;