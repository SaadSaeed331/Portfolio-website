import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
// import { Moon, Sun } from 'lucide-react'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">Your Name</a>
        <div className="flex items-center space-x-4">
          <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
          >
            {/* {mounted && (theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />)} */}
          </button>
        </div>
      </nav>
    </header>
  )
}

