import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram,AiFillTwitterCircle} from 'react-icons/ai'
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Logo</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a> </li>
        <li><a href="َ#about">About</a> </li>
        <li><a href="#experience">Experience</a> </li>
        <li><a href="#services">Services</a> </li>
        <li><a href="#portfolio">Portfolio</a> </li>
        <li><a href="#testimonials">Testimonials</a> </li>
        <li><a href="#contact">Contact</a> </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/"><BsFacebook /> </a>
        <a href="https://www.instagram.com/"><AiFillInstagram/></a>
        <a href="https://www.twitter.com/"><AiFillTwitterCircle/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ABDO_ME, All rights reserved, 2022 </small>
      </div>
    </footer>
  )
}

export default Footer