import React from 'react'
import './intro.css'
import profile from '../../assets/profile.jpg'
import { Link } from 'react-scroll'
const Intro = () => {
  return (
   <section id="intro">
    <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Kwon</span><br />Professional Web Developer</span>
        <p className="introPara"> I'm passionate about creating robust and efficient web applications. <br />As a full-stack developer, i have a solid foundation in both Frontend & Backend technologies.</p>
        <Link><button className="btn">Hire Me</button></Link>
    </div>
    <img src={profile} alt="Profile" className="bg" />
   </section>
  )
}

export default Intro;
