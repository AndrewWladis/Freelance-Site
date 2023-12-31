import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import React from 'react'

export default function Contact() {
    return (
        <section id="contact" className='w-full flex justify-center flex-col items-center'>
            <h3 className='text-xl font-semibold text-center text-white'>Feel free to reach out to me via email for inquiries or collaboration opportunities at <a href={`mailto:andrewwladis@gmail.com`} style={{ color: '#67e8f9', fontWeight: 800 }}>andrewwladis@gmail.com</a></h3>
        </section>
    )
}