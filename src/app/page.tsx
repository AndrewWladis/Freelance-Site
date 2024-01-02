"use client";
import { useState, useEffect } from 'react';
import Navigation from './Navbar';
import Services from './Services';
import Skills from './Skills';
import Contact from './Contact';
import About from './About';

export default function Home() {
  const [cursorX, setCursorX] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Function to update window width
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial window width
    updateWindowWidth();

    // Add event listener for window resize
    window.addEventListener('resize', updateWindowWidth);

    // Cleanup: remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  const handleMouseMove = (e: any) => {
    setCursorX(e.clientX);
  };

  return (
    <main onMouseMove={handleMouseMove} style={{ background: "linear-gradient(164deg, rgba(18,17,17,1) 0%, rgba(45,23,46,1) 35%, rgba(25,25,25,1) 100%)" }} className="w-full">
      <Navigation />
      <About windowWidth={windowWidth} />
      <Services />
      <Skills cursorX={cursorX} windowWidth={windowWidth} />
      <Contact />
      <h3 className='text-xl font-semibold text-center text-white' style={{ padding: 25 }}>
        Email for inquiries or collaboration opportunities at <a href={`mailto:andrewwladis@gmail.com`} style={{ color: '#67e8f9', fontWeight: 800 }}>andrewwladis@gmail.com</a>
      </h3>
    </main>
  )
}