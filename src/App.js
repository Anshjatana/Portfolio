import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  const divStyle = {
    background: "linear-gradient(180deg, rgba(1,11,29,1) 0%, rgba(2,8,37,1) 23%, rgba(6,3,38,0.969625350140056) 64%)"
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

