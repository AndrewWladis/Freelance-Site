import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const [state, handleSubmit] = useForm("mbjnjgok");

    if (state.succeeded) {
        return (
            <p className='text-center text-white' style={{ fontSize: '2rem', fontWeight: 700, margin: 10 }}>Thank you for reaching out!</p>
        );
    }

    return (
        <section id="contact" className='w-full flex justify-center flex-col items-center'>
            <p className='text-center text-white' style={{ fontSize: '2rem', fontWeight: 700 }}>Get in Touch</p>
            <form onSubmit={handleSubmit} className='flex justify-center flex-col items-center'>
                <div className='flex items-center justify-center flex-row flex-wrap'>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder='Email'
                        className='p-4 rounded-full bg-transparent shadow-lg'
                        style={{
                            margin: 10,
                            boxShadow: '5px',
                            fontSize: 20,
                            width: 250,
                            border: '0.1px solid white'
                        }}
                        required
                    />
                    <input
                        id="name"
                        name="name"
                        placeholder='Name'
                        type='text'
                        className='p-4 rounded-full bg-transparent shadow-lg resize-none'
                        style={{
                            margin: 10,
                            boxShadow: '50px',
                            fontSize: 20,
                            border: '0.1px solid white'
                        }}
                        required
                    />
                </div>
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
                    placeholder='Message'
                    className='p-4 bg-transparent shadow-lg resize-none'
                    style={{
                        margin: 10,
                        boxShadow: '5px',
                        fontSize: 16,
                        height: 200,
                        borderRadius: 10,
                        width: '90%',
                        border: '0.1px solid white'
                    }}
                    required
                />
                <button
                    type="submit"
                    disabled={state.submitting}
                    className='p-1 rounded-full shadow-lg resize-none bg-transparent w-auto'
                    style={{
                        margin: 10,
                        boxShadow: '5px',
                        fontSize: 30,
                        width: '90%',
                        border: '0.1px solid white'
                    }}
                >
                    Submit
                </button>
            </form>
        </section>
    )
}