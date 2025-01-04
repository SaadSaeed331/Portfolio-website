import React from 'react'
import Navbar from './Components/Navbar'
import Landsec from './Components/Landsec'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Landsec />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default Home