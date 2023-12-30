import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaGitAlt, FaPython } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobexd, SiMongodb } from "react-icons/si";

export default function Skills() {
  return (
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
      </section>
  )
}
