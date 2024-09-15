import React from 'react'
import MoreInfo from '../../../../assets/munbg.webp';
import InfoPage1Img from '../../../../assets/muninfopage1.svg';
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
                    {/* <img src={MoreInfo} className="Bg-image" alt="Bg-image" /> */}
                    {/* <img src={MobMoreInfo} className="Mob-Bg-image" alt="Mob-Bg-image" /> */}
                    <div className="irmun">
                        <h3> IRMUN / </h3>
                        <h3 className='aippm'> HISTORIC COMMITTEE</h3>
                    </div>
                    <div className="info_box2">
                        <div className="info_content">
                            <div className="info_text info_text2">
                                <h2 className="info_heading">INDIAN WAR CABINET (HISTORIC COMMITTEE)</h2>
                                <p className="muninfo-text">The Indian War Cabinet is a committee in Model United Nations (MUN) simulations that mirrors the decision-making process of India's highest leadership during crises. Delegates take on roles such as the Prime Minister and Defence Minister, collaborating to address simulated national security and defense challenges. This committee evaluates delegates' abilities in crisis management, national interest protection within a dynamic, high-pressure environment.
                                    <br />
                                    AGENDA: “Deliberation over the ongoing ethnic clashes in Manipur”</p>
                                <p className="mobilemuninfo-text">The Indian War Cabinet is a committee in Model United Nations (MUN) simulations that mirrors the decision-making process of India's highest leadership during crises. Delegates take on roles such as the Prime Minister and Defence Minister, collaborating to address simulated national security and defense challenges. This committee evaluates delegates' abilities in crisis management, diplomacy, and national interest protection within a dynamic. 
                                    <br />
                                    AGENDA: “Deliberation over the ongoing ethnic clashes in Manipur”</p>
                                <div className="portfolio_button">
                                    <button className='info_button' onClick={() => window.open("https://docs.google.com/spreadsheets/d/1f_1kJOrr7MSdctuNRdjqVQKhARYkzlbpZeokivqnreA/edit?pli=1#gid=952637532", "_blank")}>PORTFOLIO MATRIX</button>
                                </div>
                            </div>
                        </div>
                        <div className="info_img2">
                            <div className="mun-infoPage1img1">
                                <img src={InfoPage1Img} className="infoPage1img" alt="infoPage1img" />
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
