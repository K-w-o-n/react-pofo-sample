import React from 'react';
import './contact.css'
import Client1 from '../../assets/microsoft.png'
import Client2 from '../../assets/walmart.png'
import Client3 from '../../assets/adobe.png'
import Client4 from '../../assets/facebook.png'
import Link1 from '../../assets/facebook-icon.png'
import Link2 from '../../assets/instagram.png'
import Link3 from '../../assets/youtube.png'
import Link4 from '../../assets/twitter.png'


const Contact = () => {
  return (
    <div id="contactPage">
        <div id="clients">
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse impedit eum magnam fugit unde quam!</p>
            <div className="clientImgs">
                <img src={Client1} alt="" className="clientImg" />
                <img src={Client2} alt="" className="clientImg" />
                <img src={Client3} alt="" className="clientImg" />
                <img src={Client4} alt="" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDes">Please fill out the form below to discuss any work opportunities</span>
            <form  className="contactForm">
                <input type="text" className="name" placeholder='Enter Your Name'/>
                <input type="email" className="name" placeholder='Enter Your Email'/>
                <textarea  className="msg" rows="5"  name='message' placeholder='Enter Your Message'></textarea>
                <button className="submitBtn" type='submit'>Submit</button>
                <div className="links">
                    <li><a href="https://www.facebook.com/kwon.woo.357/"> <img src={Link1} alt="" className="link" /></a></li>
                    <li><a href="https://www.instagram.com/kwonfsdev/"> <img src={Link2} alt="" className="link" /></a></li>
                    <li><a href="https://www.youtube.com/channel/UCQLP35BCTgyjU3W29O-PaaQ"> <img src={Link3} alt="" className="link" /></a></li>
                    <li><a href="https://twitter.com/?lang=en"> <img src={Link4} alt="" className="link" /></a></li>   
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact
