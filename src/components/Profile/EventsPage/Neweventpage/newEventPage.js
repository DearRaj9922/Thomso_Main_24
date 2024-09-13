import React, {useEffect, useState} from 'react'
import "./NewEventPage.css";
import newevbg from "../../../../assets/eventbg.webp";
import newevbgmob from "../../../../assets/eventbgmob.webp";
import Navbar from "../../../EventsNavbar/Eventsnavbar"
import {useNavigate} from 'react-router-dom';
import textdec from "../../../../assets/textdec.svg";
import textdecrev from "../../../../assets/textdecrev.svg"
import AllEvents from "../EventMainPage.js";
import scootergif from "../../../../assets/Events_bike Animation.gif";
import Newevents from '../Newevents.js';
import MostParticipated from '../MostParticipated.js';

const NewEventPage = () => {

    const [loading, setLoading] = useState(false);
    const [loggedin, setLoggedin] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setLoggedin(true)
        } else {
            setLoggedin(false)
        }
    }, [])
    const navigate = useNavigate();
    return (<div className='neweventmain'>
            <img src={newevbg} className='newbgevimg' alt="newbg"/>
            <img src={newevbgmob} className='newbgevimgmob' alt="newbgmob"/>
            <div className="scootergif">

                <img src={scootergif} className="scooter_gif" alt="scootergif"/>
            </div>
            <div className="newevpgnav">
                <Navbar
                    fontcolor="black"
                    bright="brightness(0)"/>
            </div>
            <div className="newevpgtitle">

                <div className="newtitlewrapp">
                    <h3>Welcome to Thomso’24!</h3>
                    <h1> Events</h1>
                    {!loggedin ? (<button onClick={() => navigate('/register')}>Register Now</button>) : (<></>)}
                </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"10vw"}} className="eventwrapps">

            <div className="newallevents">
                <div className="newalltitlediv">
                    <img src={textdec} className='textdecimg' alt="decimg"/>
                    <h1>All Events</h1>
                    <img src={textdecrev} className='textdecimg' alt="decimg"/>
                </div>
                <AllEvents/>

            </div>

            <div className="neweventsmain">
                <div className="neweventwrapp">
                    <div className="newalltitlediv">
                        <img src={textdec} className='textdecimg' alt="decimg"/>
                        <h1>New Events</h1>
                        <img src={textdecrev} className='textdecimg' alt="decimg"/>
                    </div>

                    <Newevents/>
                </div>

            </div>
            <div  className="neweventsmain">
                <div className="neweventwrapp">
                    <div className="newalltitlediv">
                        <img src={textdec} className='textdecimg' alt="decimg"/>
                        <h1 style={{fontSize:"7vw"}}>Most Participated</h1>
                        <img src={textdecrev} className='textdecimg' alt="decimg"/>
                    </div>

                    <MostParticipated/>
                </div>

            </div>
            </div>


        </div>)
}

export default NewEventPage
