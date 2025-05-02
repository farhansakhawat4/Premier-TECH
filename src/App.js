import React from 'react';

import { Header, Footer, About, Products, Team, Contact } from './container';
import { Navbar } from './components'
import './App.css';

function App() {
  return (
    <div>
     <Navbar />
     <Header />
     <About />
     <Products />
     <Team />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
