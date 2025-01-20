import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import image1 from "../assets/coachella.png"
import image2 from "../assets/Screenshot.png"
import image3 from "../assets/Screenshot2.png"

const projects = [
  {
    title: 'E-commerce Platform Coachella',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
    image: image1,
    link1:"https://coachella-e-comm.netlify.app/",
    link2:"https://github.com/SaadSaeed331/Coachella-e-com",
  },
  {
    title: 'Auto Parts E-commerce App',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
    image: image2,
    link1:"",
    link2:"https://github.com/SaadSaeed331/Auto-speed-ecom-clone",
  },
  {
    title: 'Instagram look alike',
    description: 'A social media platform using MERN Stack,made an authentication using JWT and used cloudinary for image upload.Added sign in and sign up functionality.',
    image: image3,
    link1:"",
    link2:"",
  },
  
]

export default function Projects() {
  return (
    <section id="projects" className="py-12  bg-[#003554] text-[#00A6FB] md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#051923] dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.link1}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                  >
                    <HiOutlineExternalLink size={20} className="mr-1"/>

                    View Live
                  </a>
                  <a
                    href={project.link2}
                    className="inline-flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <FaGithub size={20} className="mr-1"/>
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

