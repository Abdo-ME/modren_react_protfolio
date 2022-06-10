import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import {HiOutlineMailOpen} from 'react-icons/hi'
import {BsMessenger, BsWhatsapp} from 'react-icons/bs'
import './contact.css'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_45zh9mv', 'template_xpasna4', form.current, 'alMoaXzTR-1Nq4TIE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMailOpen />
            <h4>Email</h4>
            <h5>ae.mehda@gmail.com</h5>
            <a href="mailto:ae.mehda@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsMessenger />
            <h4>Massenger</h4>
            <h5>AE Mehda</h5>
            <a href="https://m.me/100004809096416" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+213664726837</h5>
            <a href="https://wa.me/213664726837" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* End of Contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact