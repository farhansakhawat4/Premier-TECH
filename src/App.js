import React from 'react';


import { Header,Ideology,  Products,  About, Team, Contact, Footer  } from './container';
import { Navbar } from './components'
import './App.css';

function App() {
  return (
    <div>
     <Navbar />
     <Header />
     <Ideology />
     <Products />
     <About />
     <Team />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
