import React from 'react'
import "./ContactUs.css"
import Phone from "../../../assets/phoneMUN.png";
// import Mail from "../../../assests/mailMUN.png";
import Logo from "../../../assets/LOGOMUN.svg";
import fb from "../../../assets/fbMUN.svg";
import ig from "../../../assets/igMUN.svg";
import X from "../../../assets/XMUN.svg";
import yt from "../../../assets/ytMUN.svg";
function ContactUs() {
    return (
        <div className="MUN-bottom">

            <div className="ContactUsMUN">
                <div className="heading-contact">
                    CONTACT US
                </div>
                <div className="detailsContact">
                    <div className="contact1MUN">
                        <div className="NameContact">
                            Mohit
                        </div>
                        <div className="phoneContact">
                            <img src={Phone} alt="" /> &nbsp; &nbsp; &nbsp;
                            <a href='tel:9451584872'>+91 7850070332</a>

                        </div>

                    </div>

                    <div className="contact3MUN">
                        <div className="NameContact">
                            Aagam
                        </div>
                        <div className="phoneContact">
                            <img src={Phone} alt="" /> &nbsp; &nbsp; &nbsp;
                            <a href='tel:9920150290'>+91 9893460053</a>
                        </div>
                    </div>

                </div>
            </div>

            <img src={Logo} className="LogoMUN" alt="" />

            <div className="DirectionsMUN">
                <div className="directionsHeading">
                    Get Directions
                </div>
                <div className="directionElements">
                    <div className="directionElement">Thomso Office</div>
                    <div className="directionElement">Multi Activity Centre</div>
                    <div className="directionElement">Indian Institute of Technology</div>
                    <div className="directionElement">Roorkee, 247543</div>
                </div>
            </div>

            <div className="socialmediaMUN">
                <a href="https://www.facebook.com/thomsoiitroorkee"><img src={fb} alt="" /></a>
                <a href="https://www.instagram.com/thomso.iitr/"><img src={ig} alt="" /></a>
                <a href="https://twitter.com/Thomso_IITR"><img src={X} alt="" /></a>
                <a href="https://www.youtube.com/@iitrthomso"><img src={yt} alt="" /></a>
            </div>




        </div>
    )
}

export default ContactUs
