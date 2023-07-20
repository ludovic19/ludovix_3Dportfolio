import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {  Hero, Navbar, Tech,// Works, 
  StarsCanvas, About, Contact, Experience, Feedbacks,
 } from './components'

const App = () => {

  return (
  
  // <>
  // <p>helllo</p> 
    
    <BrowserRouter>
     
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech  />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>

    </BrowserRouter>
  // </>
  )
}

export default App
