// import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-12 md:pt-32 md:pb-24">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Name</h1>
        <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-6">MERN Stack Developer</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Crafting innovative web solutions with cutting-edge technologies</p>
        <a
          href="#projects"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
        >
          View My Work
          {/* <ArrowRight className="ml-2" size={20} /> */}
        </a>
      </div>
    </section>
  )
}

