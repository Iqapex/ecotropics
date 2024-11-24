import React from 'react'
import img from '../assets/hero2.jpg'
import HeroAbout from '../components/HeroAbout/HeroAbout'
import TagAbout from '../components/TagAbout/TagAbout'
import Information from '../components/Information/Information'
import Mission from '../components/Mission/Mission'
import Solutions from '../components/Solutions/Solutions'

function About() {
  return (
    <div>
      <HeroAbout text="Get To Know Us" img={img}/>
      <TagAbout/>
      <Information />
      <Mission />
      <Solutions />
    </div>
  )
}

export default About
