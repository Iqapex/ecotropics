import React from 'react'
import Achievements from '../Achievements/Achievements'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'
import Navbar from '../Navbar/Navbar'
import Process from '../Processes/Process'
import Recognition from '../Recognition/Recognition'
import Tag from '../Tag/Tag'
import What from '../What we Do/What'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Tag/>
      <What/>
      <Process/>
      <Achievements/>
      <Recognition/>
      <Footer/>
    </div>
  )
}

export default Home
