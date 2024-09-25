import React from 'react'
import img from '../assets/carbon.jpg'
import Footer from '../components/Footer/Footer'
import HeroAbout from '../components/HeroAbout/HeroAbout'
import Navbar from '../components/Navbar/Navbar'
import News from '../components/News/News'

function Newss() {
  return (
    <div>
      <Navbar/>
      <HeroAbout text="News And Updates " img={img}/>
      <News/>
      <Footer/>
    </div>
  )
}

export default Newss
