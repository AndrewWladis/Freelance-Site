"use client";
import { useState, useEffect } from 'react';
import Navigation from './Navbar';
import Services from './Services';
import Skills from './Skills';

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
      <section id="about" className='w-full flex justify-center' style={{ paddingTop: 250 }}>
        <p className='text-xl font-semibold text-center text-white' style={{ marginRight: (windowWidth / 6), marginLeft: (windowWidth / 6) }}>
          Welcome, I'm <b>Andrew Wladis</b>, a passionate and creative freelance software developer dedicated to crafting visually appealing websites that not only captivate viewers but also elevate brands.
        </p>
      </section>
      <Services />
      <Skills cursorX={cursorX} />
      <section id="contact" className='w-full flex justify-center'>
        <h3 className='text-xl font-semibold text-center text-white'>Feel free to reach out to me using the contact information below:</h3>
      </section>
    </main>
  )
}