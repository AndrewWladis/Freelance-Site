"use client";
import { useState, useEffect } from 'react';
import Navigation from './Navbar';

export default function Home() {
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
  
  return (
    <main className="w-full scroll-smooth">
      <Navigation />
      <div className='w-full h-screen flex justify-center'>
        <p className='text-xl font-semibold text-center' style={{marginTop: 80, marginRight: (windowWidth / 6), marginLeft: (windowWidth / 6)}}>
          Welcome, I'm <b>Andrew Wladis</b>, a passionate and creative software contractor dedicated to crafting visually appealing websites that not only captivate viewers but also elevate brands.
        </p>
      </div>
    </main>
  )
}