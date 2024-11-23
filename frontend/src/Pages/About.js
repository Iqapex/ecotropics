import React from 'react'
import img from '../assets/hero2.jpg'
import Footer from '../components/Footer/Footer'
import HeroAbout from '../components/HeroAbout/HeroAbout'
import Mission from '../components/Mission/Mission'
import Navbar from '../components/Navbar/Navbar'
import Solutions from '../components/Solutions/Solutions'
import TagAbout from '../components/TagAbout/TagAbout'
import Information from '../components/Information/Information'

function About() {
  return (
    <div>
      <Navbar />
      <HeroAbout text="Get To Know Us" img={img}/>
      <TagAbout/>
      <Information />
      <Mission/>
      <Solutions/>
      <Footer/>
    </div>
  )
}

export default About
