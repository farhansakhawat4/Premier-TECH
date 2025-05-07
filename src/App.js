import React from 'react';


import { Header, Brands, Products,  About, Team,Testimonial, Contact, Footer  } from './container';
import { Navbar } from './components'
import './App.css';

function App() {
  return (
    <div>
     <Navbar />
     <Header />
     <Brands />
     {/* <Ideology /> */}
     <Products />
     <About />
     <Team />
     <Testimonial />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
