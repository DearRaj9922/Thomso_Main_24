import React from 'react'
import "./NewEventPage.css";
import newevbg from "../../../../assets/eventbg.webp";
import newevbgmob from "../../../../assets/eventbgmob.webp";
import Navbar from "../../../EventsNavbar/Eventsnavbar"
import { useNavigate } from 'react-router-dom';
import textdec from "../../../../assets/textdec.svg";
import textdecrev from "../../../../assets/textdecrev.svg"
import AllEvents from "../EventMainPage.js";

const NewEventPage = () => {
  const navigate=useNavigate();
  return (
    <div className='neweventmain'>
        <img src={newevbg} className='newbgevimg' alt="newbg"/>     
        <img src={newevbgmob} className='newbgevimgmob' alt="newbgmob"/>
        <div className="newevpgnav">
            <Navbar
            fontcolor="black"
            bright="brightness(0)"/>
            </div>  
            <div className="newevpgtitle">
              <div className="newtitlewrapp">
                <h3>Welcome to Thomso’24!</h3>
                <h1> Events</h1>
                <button onClick={()=>navigate('/register')}>Register Now</button>
              </div>
              </div>  
              <div className="newallevents">
                <div className="newalltitlediv">
                  <img src={textdec} className='textdecimg' alt ="decimg"/>
                <h1>All Events</h1>
                <img src={textdecrev} className='textdecimg' alt ="decimg"/>
                </div>
                <AllEvents/>

                </div>   

      
    </div>
  )
}

export default NewEventPage
