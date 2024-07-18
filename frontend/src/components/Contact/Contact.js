import React from 'react';
import img from '../../assets/carbon.jpg';
import Footer from '../Footer/Footer';
import HeroAbout from '../HeroAbout/HeroAbout';
import Navbar from '../Navbar/Navbar';
import './Contact.css';

function Contact() {
  return (
    <>
      <Navbar />
      <HeroAbout img={img} text='Contact Us' />
      <div className="contact-container">
        <p className="contact-description">
          Have questions or need more information? Get in touch with us! Our team is here to assist you
          and provide the support you need to succeed. Reach out to us via email, phone, or through our
          social media channels.
        </p>
        <iframe
          title="Contact Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLScQF_lEgF7x6T4-d45f4Pjk7SpOSDyQ_hfMxgd_nM5i5EbnMg/viewform?embedded=true"
          width="940"
          height="1159"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
