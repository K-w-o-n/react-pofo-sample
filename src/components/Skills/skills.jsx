import React from 'react'
import './skills.css'
import PhotoRe from '../../assets/react.jpg'
import PhotoWeb from '../../assets/web.jpg'
import PhotoLara from '../../assets/laravel.jpg'
const Skill = () => {
  return (
   <section id="skills">
     <span className="skillTitle">What I Do</span>
     <span className="skillDes">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, nulla illo! Nulla mollitia repellendus sint?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere veritatis odit, cupiditate perferendis earum asperiores.
     </span>
     <div className="skillBars">
        <div className="skillBar">
            <img src={PhotoRe} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>React</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, nam!</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={PhotoLara} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Laravel</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, blanditiis?</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={PhotoWeb} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Web-Development</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, laboriosam?</p>
            </div>
        </div>
     </div>
   </section>
  )
}

export default Skill
