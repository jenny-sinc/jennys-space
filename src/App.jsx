import React from 'react';
import './App.css';
import Routes from './Routes';
import NavBar from './Components/NavBar/NavBar';
import { useRef } from 'react';
import Footer from './Components/Footer/Footer';

function App() {
  const launchpad = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    });
  };

  return (

    <div className="container">
      <h1 onClick={() => scrollToSection(launchpad)}>HI</h1>
      <NavBar />
      <div ref={launchpad} className='launchpad' />
      <Footer />
    </div>
  );
}

export default App;
