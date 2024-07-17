import React from 'react';
import img from '../../assets/carbon.jpg';
import Footer from '../Footer/Footer';
import HeroAbout from '../HeroAbout/HeroAbout';
import Navbar from '../Navbar/Navbar';
import './Contact.css';
function Contact() {
  return (
    <>
    <Navbar/>
    <HeroAbout img={img} text='Contact Us'/>
    <div className="contact-container">
        
      
      <iframe
        title="Contact Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLScQF_lEgF7x6T4-d45f4Pjk7SpOSDyQ_hfMxgd_nM5i5EbnMg/viewform?embedded=true" width="940" height="1159" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> 
        
      

    </div>
    <Footer/>
    </>
  );
}

export default Contact;
