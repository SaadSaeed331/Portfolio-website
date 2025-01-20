import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"

// import { Linkedin, Github, Twitter } from 'lucide-react'
export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1a09b7d7-f3b8-4e5f-9cba-9053af9a7995");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section id="contact" className="py-12 md:py-24 bg-[#051923] text-[#0582CA] dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
              <input
              name="name"
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006494] dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
              <input
              name="email"
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006494] dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
              <textarea
              name="message"
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
            
            <a href="https://www.linkedin.com/in/saadsaeed331?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTBCzS0%2FmRwSlhnvDxXY%2F6g%3D%3D" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
            <FaLinkedin size={40} />              
            </a>
            <a href="https://github.com/SaadSaeed331" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              <FaGithub size={40} />
            </a>
            <a href="mailto:meetsaad331@gmail.com" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
            <HiOutlineMail size={40}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

