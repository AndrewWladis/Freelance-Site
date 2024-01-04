import React from 'react'

interface AboutProps {
    windowWidth: number;
}

const About: React.FC<AboutProps> = ({ windowWidth }) => {
    return (
        <section id="about" className='w-full flex flex-col p-2' style={{
            background: 'url(/fullscreenimage.jpg) no-repeat center center fixed',
            backgroundSize: 'cover',
            minHeight: '95vh'
        }}>
            <p
                className='font-semibold text-white'
                style={{
                    fontSize: '3rem',
                    textAlign: 'center',
                    margin: 15,
                    paddingTop: '10vh'
                }}
            >
                Welcome, I'm <b style={{ color: '#21b3ed' }}>Andrew Wladis</b>, <br></br> a freelance software developer.
            </p>
            <p className='text-xl font-semibold text-center' style={{ color: '#d4d4d8', alignSelf: 'end', padding: '10vh' }}>
                <span className='underline' style={{ fontWeight: '800', color: '#faf325' }}><a href="#contact">Let me know how I can help you</a></span><br></br>craft a visually appealing website <br></br>that will not only captivate viewers<br></br> but also elevate your brand.
            </p>
        </section>
    )
}

export default About