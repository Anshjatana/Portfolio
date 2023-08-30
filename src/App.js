import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  const divStyle = {
    background: "linear-gradient(180deg, rgba(1,7,20,1) 0%, rgba(1,6,27,1) 23%, rgba(13,1,29,0.9416141456582633) 64%)"
  };
  
  return (
    <>
      <NavBar />
      <div style={divStyle} className='h-[5000px]'>
        <Home />
        <About />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;

