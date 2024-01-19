import React from 'react'
import './works.css'
import profile1 from '../../assets/portfolio-1.png'
import profile2 from '../../assets/portfolio-2.png'
import profile3 from '../../assets/portfolio-3.png'
import profile4 from '../../assets/portfolio-4.png'
import profile5 from '../../assets/portfolio-5.png'
import profile6 from '../../assets/portfolio-6.png'

function Works() {
  return (
   <section id="works">
    <h2 className='worksTitle'>My Portfolio</h2>
    <span className="worksDes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odit!</span>
    <div className="worksImgs">
        <img src={profile1} alt="" className="worksImg" />
        <img src={profile2} alt="" className="worksImg" />
        <img src={profile3} alt="" className="worksImg" />
        <img src={profile4} alt="" className="worksImg" />
        <img src={profile5} alt="" className="worksImg" />
        <img src={profile6} alt="" className="worksImg" />
    </div>
   </section>
  )
}

export default Works
