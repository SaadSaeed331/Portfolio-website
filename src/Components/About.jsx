import React from "react"
import image from "../assets/Profilepic.png"

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 bg-[#051923] dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#00A6FB]">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className=" md:w-1/2 mb-8 md:mb-0">
            
            <img src={image} alt="Profile Picture" className="rounded-full h-[60%] w-[60%]" />
          
          </div>
          <div className="md:w-1/2 text-[#00A6FB]">
            <p className="text-lg mb-6">
              I'm a passionate MERN Stack Developer with 1 year of experience in building scalable web applications.
              My expertise includes React, Node.js, Express, and MongoDB, along with a strong foundation in HTML, CSS, and JavaScript.
            </p>
            <p className="text-lg mb-6">
              I love turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you'll find me exploring new technologies.
            </p>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Tailwind CSS'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-[#0582CA] text-[#051923] rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

