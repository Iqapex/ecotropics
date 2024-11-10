import React from 'react'
import img from '../assets/carbon.jpg'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import ThematicPage from '../components/Thematic/ThematicPage'
import HeroAbout from '../components/HeroAbout/HeroAbout'

function Thematic() {
  return (
    <div>
      <Navbar/>
      <HeroAbout text="Thematic Areas" img={img}/>
      <ThematicPage />
      <Footer/>
    </div>
  )
}

export default Thematic
