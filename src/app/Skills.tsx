import React, { useEffect, useState } from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaGitAlt, FaPython } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobexd, SiMongodb } from "react-icons/si";

interface SkillsProps {
    cursorX: number;
}
  
const Skills: React.FC<SkillsProps> = ({ cursorX }) => {
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

    useEffect(() => {
        console.log(windowWidth)
    }, [windowWidth])

    return (
        <section id="skills" style={{ margin: 10, marginTop: 100, marginBottom: 100 }}>
            <h3 className='text-xl font-semibold text-center text-white'>My Technical Skills Include:</h3>
            {(windowWidth > 1000) ? (
                <div className='w-full flex flex-row flex-wrap items-center justify-center' style={{ margin: 10 }}>
                    <div style={{ margin: 5 }}>
                        <FaHtml5 size="4em" style={{ opacity: (((((windowWidth) / 15) * 2) - cursorX) / 1250) + 0.7 }}/>
                    </div>
                    <div style={{ margin: 5 }}>
                        <FaCss3Alt size="4em" style={{ opacity: (((((windowWidth) / 15) * 3) - cursorX) / 1250) + 0.7 }}/>
                    </div>
                    <div style={{ margin: 5 }}>
                        <FaJs size="4em" style={{ opacity: ((((windowWidth / 15) * 4) - cursorX) / 1250) + 0.7 }}/>
                    </div>
                    <div style={{ margin: 5 }}>
                        <BiLogoTypescript size="4.75em" style={{ opacity: ((((windowWidth / 15) * 5) - cursorX) / 1250) + 0.7 }}/>
                    </div>
                    <div style={{ margin: 5 }}>
                        <FaNodeJs size="4em" style={{ opacity: ((((windowWidth / 15) * 6) - cursorX) / 1250) + 0.7 }}/>
                    </div>
                    <div style={{ margin: 5 }}>
                        <FaReact size="4em" style={{ opacity: ((((windowWidth / 15) * 7) - cursorX) / 1250) + 0.7 }}/>
                    </div>
                    <div style={{ margin: 5 }}>
                        <FaGitAlt size="4em" style={{ opacity: ((((windowWidth / 15) * 8) - cursorX) / 1250) + 0.7 }}/>
                    </div>
                    <div style={{ margin: 5 }}>
                        <SiMongodb size="4em" style={{ opacity: ((((windowWidth / 15) * 7) - (windowWidth - cursorX)) / 1250) + 0.7 }}/>
                    </div>
                    <div style={{ margin: 5 }}>
                        <FaPython size="4em" style={{ opacity: ((((windowWidth / 15) * 6) - (windowWidth - cursorX)) / 1250) + 0.7 }} />
                    </div>
                    <div style={{ margin: 5 }}>
                        <IoLogoFirebase size="3.75em" style={{ opacity: ((((windowWidth / 15) * 5) - (windowWidth - cursorX)) / 1250) + 0.7 }} />
                    </div>
                    <div style={{ margin: 5 }}>
                        <SiAdobephotoshop size="3.5em" style={{ opacity: ((((windowWidth / 15) * 4) - (windowWidth - cursorX)) / 1250) + 0.7 }} />
                    </div>
                    <div style={{ margin: 5 }}>
                        <SiAdobexd size="3.5em" style={{ opacity: ((((windowWidth / 15) * 3) - (windowWidth - cursorX)) / 1250) + 0.7 }} />
                    </div>
                    <div style={{ margin: 5 }}>
                        <SiAdobeillustrator size="3.5em" style={{ opacity: ((((windowWidth / 15) * 2) - (windowWidth - cursorX)) / 1250) + 0.7 }} />
                    </div>
                </div>
            ) : (
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
                        <IoLogoFirebase size="3.75em" />
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
            )}
        </section>
    )
}

export default Skills
