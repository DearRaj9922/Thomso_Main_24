import React from 'react'
import MoreInfo from '../../../../assets/munbg.webp';
import InfoPage2Img from '../../../../assets/aippm.webp';
import './Moreinfopage2.css';
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
                        <h3 className='aippm'>  AIPPM</h3>
                    </div>
                    <div className="info_box2">
                        <div className="info_content">
                            <div className="info_text info_text2">
                                <h2 className="info_heading">ALL INDIA POLITICAL PARTY MEET ( AIPPM)</h2>
                                <p className="muninfo-text">AIPPM is a simulated event that brings together delegates from various Indian political parties to discuss and debate key national and international issues. Modelled after the real-life political landscape of India, AIPPM provides a platform for participants to engage in lively debates, negotiations, and policy-making, aiming to find common ground and develop effective solutions to address the country's most pressing concerns.
                                    <br />
                                    AGENDA: “National-Revocation of the Central Government's Decision on Lateral Entry into Civil Services”</p>
                                <p className="mobilemuninfo-text">AIPPM is a simulated event that brings together delegates from various Indian political parties to discuss and debate key national and international issues. Modelled after the real-life political landscape of India, AIPPM provides a platform for participants to engage in lively debates, negotiations, and policy-making, aiming to find common ground and develop effective solutions to address the country's most pressing concerns.
                                    <br />
                                    AGENDA: “National-Revocation of the Central Government's Decision on Lateral Entry into Civil Services”</p>
                                <div className="portfolio_button">
                                    <button className='info_button' onClick={() => window.open("https://docs.google.com/spreadsheets/d/14l_D_IPAHMAtAjGXDP3wuygbgloxCzNajbAj9vhdQLA/edit?usp=sharing", "_blank")}>PORTFOLIO MATRIX</button>
                                </div>
                            </div>
                        </div>
                        <div className="info_img2">
                            <div className="mun-infoPage1img1">
                                <img src={InfoPage2Img} className="infoPage1img infoPage2img" alt="infoPage1img" />
                            </div>
                            <h3 >ALL INDIA POLITICAL PARTY MEET ( AIPPM)</h3>

                        </div>
                    </div>
                </div>
                <MunFooter />

            </div>
        </>
    )
}
