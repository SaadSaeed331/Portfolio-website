import React from 'react'

const Landsec = () => {
    return (
        <section className="bg-gradient-to-r from-purple-800 to-indigo-800 text-white h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">Hello, I'm [Your Name]</h1>
                <p className="text-xl md:text-2xl mb-8">A passionate developer creating modern web experiences</p>



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




            </div>
        </section>
    )
}

export default Landsec