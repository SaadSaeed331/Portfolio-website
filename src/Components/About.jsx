import React from "react"

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <image
              src=""
              alt="Profile"
              width={400}
              height={400}
              className="bg-grey-500 rounded-full mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-6">
              I'm a passionate MERN Stack Developer with 5 years of experience in building scalable web applications. 
              My expertise includes React, Node.js, Express, and MongoDB, along with a strong foundation in HTML, CSS, and JavaScript.
            </p>
            <p className="text-lg mb-6">
              I love turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.
            </p>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Tailwind CSS'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
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

