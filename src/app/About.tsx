import React from 'react'

interface AboutProps {
    windowWidth: number;
}
  
const About: React.FC<AboutProps> = ({ windowWidth }) => {
    return (
        <section id="about" className='w-full flex justify-center' style={{ paddingTop: 250 }}>
            <p className='text-xl font-semibold text-center text-white' style={{ marginRight: (windowWidth / 6), marginLeft: (windowWidth / 6) }}>
                Welcome, I'm <b>Andrew Wladis</b>, a passionate and creative freelance software developer dedicated to crafting visually appealing websites that not only captivate viewers but also elevate brands.
            </p>
        </section>
    )
}

export default About