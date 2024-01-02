import React from 'react'
import Image from 'next/image';

interface AboutProps {
    windowWidth: number;
}

const About: React.FC<AboutProps> = ({ windowWidth }) => {
    return (
        <section id="about" className='w-full flex h-screen flex-row p-2'>
            <div className="flex justify-center h-screen flex-col items-end" style={{ width: windowWidth / 2, marginLeft: 10,  marginRight: 10}}>
                <p
                    className='font-semibold text-white'
                    style={{
                        fontSize: 28,
                        textAlign: 'right'
                    }}
                >
                    Welcome, I'm <b>Andrew Wladis</b>, <br></br> a freelance software developer.
                </p>
                <p
                    className='text-xl font-semibold text-right text-white'
                    style={{
                        textAlign: 'right',
                        maxWidth: (windowWidth / 3)
                    }}
                >
                    <span className='underline' style={{ color: '#8cd3fa', fontWeight: '800' }}><a href="#contact">Let me know how I can help you</a></span> craft a visually appealing website that will not only captivate viewers but also elevate your brand.
                </p>
            </div>
            <div className="flex justify-center h-screen items-center flex-col" style={{ width: windowWidth / 2 }}>
                <Image
                    src="/portrait.jpg"
                    alt="Me"
                    width={windowWidth / 3}
                    height={300}
                    style={{
                        borderRadius: '3em',
                        border: '4px solid white'
                    }}
                />
            </div>
        </section>
    )
}

export default About