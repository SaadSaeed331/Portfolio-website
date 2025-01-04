export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2023 Your Name. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#home" className="hover:text-blue-400">Home</a>
              <a href="#about" className="hover:text-blue-400">About</a>
              <a href="#projects" className="hover:text-blue-400">Projects</a>
              <a href="#contact" className="hover:text-blue-400">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  