"use client";
import { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaGitAlt, FaPython } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobexd, SiMongodb } from "react-icons/si";
import Navigation from './Navbar';
import Services from './Services';

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
    <main style={{ background: "linear-gradient(164deg, rgba(18,17,17,1) 0%, rgba(45,23,46,1) 35%, rgba(25,25,25,1) 100%)" }} className="w-full">
      <Navigation />
      <section id="about" className='w-full flex justify-center' style={{ marginTop: 250 }}>
        <p className='text-xl font-semibold text-center text-white' style={{ marginRight: (windowWidth / 6), marginLeft: (windowWidth / 6) }}>
          Welcome, I'm <b>Andrew Wladis</b>, a passionate and creative freelance software developer dedicated to crafting visually appealing websites that not only captivate viewers but also elevate brands.
        </p>
      </section>
      <Services />
      <section id="skills" style={{ margin: 10, marginTop: 100 }}>
        <h3 className='text-xl font-semibold text-center text-white'>I am proficient in...</h3>
        <div className='w-full flex flex-row flex-wrap items-center justify-center' style={{ margin: 10 }}>
          <div style={{ margin: 5 }}>
            <FaHtml5 size="4em" />
          </div>
          <div style={{ margin: 5 }}>
            <FaCss3Alt size="4em" />
          </div>
          <div style={{ margin: 5 }}>
            <FaJs size="4em" />
          </div>
          <div style={{ margin: 5 }}>
            <BiLogoTypescript size="4.75em" />
          </div>
          <div style={{ margin: 5 }}>
            <FaNodeJs size="4em" />
          </div>
          <div style={{ margin: 5 }}>
            <FaReact size="4em" />
          </div>
          <div style={{ margin: 5 }}>
            <FaGitAlt size="4em" />
          </div>
          <div style={{ margin: 5 }}>
            <SiMongodb size="4em" />
          </div>
          <div style={{ margin: 5 }}>
            <FaPython size="4em" />
          </div>
          <div style={{ margin: 5 }}>
            <IoLogoFirebase size="4em" />
          </div>
          <div style={{ margin: 5 }}>
            <SiAdobephotoshop size="3.5em" />
          </div>
          <div style={{ margin: 5 }}>
            <SiAdobexd size="3.5em" />
          </div>
          <div style={{ margin: 5 }}>
            <SiAdobeillustrator size="3.5em" />
          </div>
        </div>
      </section>
    </main>
  )
}