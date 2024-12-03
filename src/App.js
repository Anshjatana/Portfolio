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
    background: "black"
  };
  
  return (
    <>
      <NavBar />
      <div style={divStyle} className='w-full h-full rounded-md bg-neutral-950 relative flex flex-col antialiased' >
        <Home />
        <About />
        <Experience/>
        <Projects />
        <Contact/>
        {/* <ChatbotWidget/> */}
        <Footer />
      </div>
      <BackgroundBeams/>
      {/* </div> */}
      </>
  );
}

export default App;

