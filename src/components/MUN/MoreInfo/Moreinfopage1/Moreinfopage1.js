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
                                <p className="muninfo-text"> The UN General Assembly (UNGA) is one of the six main organs of the United Nations, comprising all 193 member states. It acts as a central forum for international dialogue, where countries convene annually in New York to discuss and address critical global issues, including climate change, human rights, and sustainable development. The UNGA aims to foster global cooperation and formulate collective solutions to the world's most pressing challenges.
                                    <br />
                                    Agenda: "Unlawful Occupation and Forced Governance: Israel-Palestine Conflict."</p>
                                <p className="mobilemuninfo-text">The UN General Assembly (UNGA) is one of the six main organs of the United Nations, comprising all 193 member states. It acts as a central forum for international dialogue, where countries convene annually in New York to discuss and address critical global issues, including climate change, human rights, and sustainable development. The UNGA aims to foster global cooperation and formulate collective solutions to the world's most pressing challenges.
                                    <br />
                                    Agenda: "Unlawful Occupation and Forced Governance: Israel-Palestine Conflict."</p>
                                <div className="portfolio_button">
                                    <button className='info_button' onClick={() => window.open("https://docs.google.com/spreadsheets/d/1f_1kJOrr7MSdctuNRdjqVQKhARYkzlbpZeokivqnreA/edit?pli=1#gid=952637532", "_blank")}>PORTFOLIO MATRIX</button>
                                </div>
                            </div>
                        </div>
                        <div className="info_img2">
                            <div className="mun-infoPage1img1">
                                <img src={InfoPage1Img} className="infoPage1img" alt="infoPage1img" />
                            </div>
                            
                        </div>
                    </div>
                </div>
                <MunFooter />

            </div>
        </>
    )
}
