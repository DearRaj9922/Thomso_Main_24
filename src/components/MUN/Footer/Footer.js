import React from 'react'
import "./Footer.css"
import img1 from "../../../assets/phonecall.svg"
// import img2 from "../../../assests/mailimg.svg"


function Footer() {
  return (
    <div className='container'>
      <h1 className='cont'>CONTACT US</h1>
      <div className="containerbox">
        <div className="container1">
           <div className='content1'>Mohit</div> 
           <div className='content2'><img src={img1} className="img1" alt="" />+91 7850070332</div> 
           {/* <div className='content2'><img src={img2} className="img1" alt="" />alok_k@iitr.ac.in</div>  */}
            
        </div>
        
        <div className="container1">
            <div className='content1'>Aagam</div> 
           <div className='content2'>
            <img src={img1} className="img1" alt="" />
            +91 9893460053
            </div> 
           {/* <div className='content2'><img src={img2} className="img1" alt="" />alok_k@iitr.ac.in</div>  */}
        </div>
      </div>
    </div>
  )
}

export default Footer