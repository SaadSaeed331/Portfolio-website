import React, { useEffect } from 'react'
import Birds from 'vanta/dist/vanta.birds.min'

const Landsec = () => {

    useEffect(() => {
        Birds({
            el: "#vanta",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x1641,
            color1: 0xd1ff,
            color2: 0x77ff,
            birdSize: 1.30,
            wingSpan: 22.00,
            speedLimit: 6.00,
            separation: 51.00
        })
    }, [])



    return (
        <section className="bg-[#003554] text-[#00A6FB] h-screen flex items-center justify-center">
            <div id="vanta"></div>
            <div id='vanta' className="flex flex-col items-center justify-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">Hello, I'm Muhammad Saad</h1>
                <h2 className="text-2xl md:text-3xl text-[#00A6FB] dark:text-blue-400 mb-6">MERN Stack Developer</h2>


                <a href="#projects">

                    <button class="animated-button">
                        <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                        <span class="text">View my projects</span>
                        <span class="circle"></span>
                        <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                    </button>
                </a>




            </div>
        </section>
    )
}

export default Landsec