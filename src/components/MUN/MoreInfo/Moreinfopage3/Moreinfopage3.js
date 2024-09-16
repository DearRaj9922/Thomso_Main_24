import React from 'react'
import MoreInfo from '../../../../assets/munbg.webp';
import InfoPage3Img from '../../../../assets/shieldlogo.webp';
import './Moreinfopage3.css';
import Navbar from "../../../../components/EventsNavbar/Eventsnavbar";
import MobMoreInfo from "../../../../assets/munmobileinfobg.webp";
import MunFooter from '../../../MUNfooter/MunFooter';

export default function Moreinfopage1() {
    return (
        <>
            <div className="muninfo_main">
                <div className="mun_nav">
                    <Navbar color="transparent" />
                </div>
                <div className="infoBg">
                    <div className="irmun">
                        <h3> IRMUN / </h3>
                        <h3 className='aippm'> HISTORIC COMMITTEE</h3>
                    </div>
                    <div className="info_box2">
                        <div className="info_content">
                            <div className="info_text info_text2">
                                <h2 className="info_heading">S.H.I.E.L.D (Strategic Homeland Intervention, Enforcement, and Logistics Division)</h2>
                                <p className="muninfo-text">S.H.I.E.L.D. protects Earth from global and extraterrestrial threats. Delegates, acting as agents, address terrorism, advanced technology, and superpowered beings, coordinating diplomacy, intelligence, and defense to maintain global stability and security.
                                    <br />
                                    AGENDA: “The agenda is to protect Earth from global and extraterrestrial threats.”</p>
                                <p className="mobilemuninfo-text">S.H.I.E.L.D. protects Earth from global and extraterrestrial threats. Delegates, acting as agents, address terrorism, advanced technology, and superpowered beings, coordinating diplomacy, intelligence, and defense to maintain global stability and security. 
                                    <br />
                                    AGENDA: “The agenda is to protect Earth from global and extraterrestrial threats.”</p>
                                <div className="portfolio_button">
                                    <button className='info_button' onClick={() => window.open("https://docs.google.com/spreadsheets/d/14l_D_IPAHMAtAjGXDP3wuygbgloxCzNajbAj9vhdQLA/edit?usp=sharing", "_blank")}>PORTFOLIO MATRIX</button>
                                </div>
                            </div>
                        </div>
                        <div className="info_img2">
                            <div className="mun-infoPage1img1">
                                <img src={InfoPage3Img} className="infoPage1img infoPage3img" alt="infoPage1img" />
                            </div>
                            <h3 >INDIAN WAR CABINET (HISTORIC COMMITTEE)</h3>
                        </div>
                    </div>
                </div>
                <MunFooter />

            </div>
        </>
    )
}
