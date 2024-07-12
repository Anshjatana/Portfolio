import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import { BackgroundBeams } from './Components/ui/background-beams';


function App() {
  const divStyle = {
    background: "rgba(4,8,17)"
  };
  
  return (
    <>
    {/* <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"> */}
      <NavBar />
      <div style={divStyle} className='h-full'>
        <Home />
        <About />
        <Experience/>
        <Projects />
        <Contact/>
        <Footer />
      </div>
      <BackgroundBeams/>
      {/* </BackgroundGradient> */}
      </>
  );
}

export default App;

