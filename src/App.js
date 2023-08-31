import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  const divStyle = {
    background: "rgba(1,7,20,1)"
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

