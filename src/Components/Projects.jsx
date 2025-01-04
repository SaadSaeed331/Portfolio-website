// import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
    image: '/placeholder.svg',
  },
  {
    title: 'Task Management App',
    description: 'A responsive task manager built with the MERN stack and real-time updates.',
    image: '/placeholder.svg',
  },
  {
    title: 'Social Media Dashboard',
    description: 'An analytics dashboard for social media metrics using React and D3.js.',
    image: '/placeholder.svg',
  },
  {
    title: 'Weather Forecast App',
    description: 'A weather application with geolocation and 5-day forecast using OpenWeatherMap API.',
    image: '/placeholder.svg',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                  >
                    {/* <ExternalLink size={20} className="mr-1" /> */}
                    View Live
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    {/* <Github size={20} className="mr-1" /> */}
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

