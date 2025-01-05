import React from "react"

// import { Linkedin, Github, Twitter } from 'lucide-react'
export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24 bg-[#051923] text-[#0582CA] dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006494] dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006494] dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006494] dark:bg-gray-700 dark:border-gray-600"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#0582CA] text-white rounded-md focus:ring-[#006494] transition duration-300"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              {/* <Linkedin size={24} /> */}
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              {/* <Github size={24} /> */}
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              {/* <Twitter size={24} /> */}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

