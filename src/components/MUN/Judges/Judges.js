import React from 'react'
import './Judges.css'
import hero1 from "../../../assets/hero1.webp"
// import judge1 from '../../../assests/Judge-historic.JPG'
// import judge2 from '../../../assests/Aishnit-yadav-Unga-judge.webp'
// import judge3 from '../../../assests/AIPPMjudgeresize.webp'
import Executive from '../../../assets/judge.svg'

function Judges() {
  return (
    <div className='judges-container'>
        <img src={Executive} alt="" style={{width:"35vw", margin:"5vh auto"}} />
        <div className="judge-box-cont">
            <div className="judges-cont-1">
                <img src={hero1} className="hero1" alt="" />
                <div className="jelement1">LAKSHIT TANDON</div>
                <div className="jelement2">CHAIR OF HISTORIC COMMITEE</div>
            </div>
            <div className="judges-cont-2">
                <img src={hero1} className="hero2" alt="" />
                <div className="jelement1">AISHNIT YADAV</div>
                <div className="jelement2">PRESIDENT OF UNGA</div>
            </div>
            <div className="judges-cont-3">
                <img src={hero1} className="hero3" alt="" />
                <div className="jelement1">RAUNAK UPMANYU</div>
                <div className="jelement2">CHAIR OF AIPPM</div>
            </div>
        </div>
    </div>
  )
}

export default Judges