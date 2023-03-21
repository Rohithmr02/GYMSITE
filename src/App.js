
import './App.css';
import React from 'react';
import Navbar from './component/navbar';
import Home from './component/home';
import Features from './component/Features';
import Offer from './component/offer';
import About from './component/about';
import Contact from './component/contact';
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Features/>
      <Offer/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
