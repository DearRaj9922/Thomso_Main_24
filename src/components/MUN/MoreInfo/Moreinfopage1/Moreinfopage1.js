import React from 'react'
import MoreInfo from '../../../../assets/munbg.webp';
import InfoPage1Img from '../../../../assets/muninfopage1.svg';
import './Moreinfopage1.css';
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
                        <h3 className='aippm'> UNGA</h3>
                    </div>
                    <div className="info_box2">
                        <div className="info_content">
                            <div className="info_text info_text2">
                                <h2 className="info_heading">UNITED NATIONS GENERAL ASSEMBLY (UNGA)</h2>
                                <p className="muninfo-text">The UN General Assembly (UNGA) is one of the six main organs of the United Nations, consisting of all 193 member states. It serves as a central platform for international dialogue, where countries meet annually in New York to discuss key global issues such as climate change, human rights, and sustainable development. The UNGA promotes global cooperation and seeks to develop collective solutions to major global challenges.
                                    <br />
                                    Agenda: "International- The Kursk Incursion by Ukraine: Addressing Escalation in the Ukraine-Russia Conflict"</p>
                                <p className="mobilemuninfo-text">The UN General Assembly (UNGA) is one of the six main organs of the United Nations, consisting of all 193 member states. It serves as a central platform for international dialogue, where countries meet annually in New York to discuss key global issues such as climate change, human rights, and sustainable development. The UNGA promotes global cooperation and seeks to develop collective solutions to major global challenges.
                                    <br />
                                    Agenda: "International- The Kursk Incursion by Ukraine: Addressing Escalation in the Ukraine-Russia Conflict"</p>
                                <div className="portfolio_button">
                                    <button className='info_button' onClick={() => window.open("https://docs.google.com/spreadsheets/d/14l_D_IPAHMAtAjGXDP3wuygbgloxCzNajbAj9vhdQLA/edit?usp=sharing", "_blank")}>PORTFOLIO MATRIX</button>
                                </div>
                            </div>
                        </div>
                        <div className="info_img2">
                            <div className="mun-infoPage1img1">
                                <img src={InfoPage1Img} className="infoPage1img infoPage" alt="infoPage1img" />
                            </div>
                            <h3 >UNITED NATIONS GENERAL ASSEMBLY (UNGA)</h3>
                        </div>
                    </div>
                </div>
                <MunFooter />

            </div>
        </>
    )
}
