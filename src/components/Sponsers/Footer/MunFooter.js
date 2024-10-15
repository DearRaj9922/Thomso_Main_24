import React, { useState } from 'react';
import './munfooter.css';
import Logo from '../../../assets/Logo-blue.png';
import facebook from './Footer Images/facebook.webp';
import facebookLite from './Footer Images/facebookLite.webp';
import insta from './Footer Images/insta.webp';
import instaLite from './Footer Images/instaLite.webp';
import twitter from './Footer Images/twitter.webp';
import twitterLite from './Footer Images/twitterLite.webp';
import linkedin from './Footer Images/linkedin.webp';
import linkedinLite from './Footer Images/linkedinLite.webp';
import youtube from './Footer Images/youtube.webp';
import youtubeLite from './Footer Images/youtubeLite.webp';
import clouds from '../../../assets/clouds.svg';
import Footer_mob from './MunFooter_mob';
import MunFooter_mob from './MunFooter_mob';

const MunFooter = () => {
  const [clicked, setClicked] = useState(true);
  const [change1, setChange1] = useState(true);
  const [change2, setChange2] = useState(true);
  const [change3, setChange3] = useState(true);
  const [change4, setChange4] = useState(true);
  const [change5, setChange5] = useState(true);

  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleClick1 = () => {
    setChange1(!change1);
  };
  const handleClick12 = () => {
    setChange1(!change1);
  };
  const handleClick2 = () => {
    setChange2(!change2);
  };
  const handleClick22 = () => {
    setChange2(!change2);
  };
  const handleClick3 = () => {
    setChange3(!change3);
  };
  const handleClick32 = () => {
    setChange3(!change3);
  };
  const handleClick4 = () => {
    setChange4(!change4);
  };
  const handleClick42 = () => {
    setChange4(!change4);
  };
  const handleClick5 = () => {
    setChange5(!change5);
  };
  const handleClick52 = () => {
    setChange5(!change5);
  };

  return (
    <div className='munfooter_wrapper'>
      <div className='munfooterBox'>
        <div className={`munfooterBoxB open`}>
          <div className='munfooterBoxBSub1'>
            <div>
              <img src={Logo} alt="Logo" />
            </div>
            <div className='munfooterText1'>Get Direction</div>
            <div className='munfooterText2'>
              Thomso Office, 1st Floor MAC, <br />
              Indian Institute of Technology, Roorkee 247667
            </div>
          </div>
          <div className='munfooterRight' style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div className='munfooterPara1'>
              <div className='munfooterContactUs'>Contact Us</div>
            </div>
            <div className='munfooterPara2'>
              <div className='munfooterBoxBSub1'>
                <div className='munfooterText2'>thomso@iitr.ac.in</div>
                <div className='munfooterText2'>anunjay.thomso@gmail.com</div>
              </div>

              <div className='munfooterBoxBSub1'>
                <div className='munfooterText2'>Anunjay - 9128004995</div>
                <div className='munfooterText2'>Sehaj - 9056667714</div>
              </div>
            </div>
          </div>

        </div>
        <div className='munfooterBoxA'>
          <div className='munfooterSub1'>
            <a href="https://www.facebook.com/thomsoiitroorkee" target="_blank" rel="noopener noreferrer">
              <button onMouseEnter={handleClick1} onMouseLeave={handleClick12}>
                {change1 ? (
                  <img
                    src={facebook}
                    style={{ color: 'black', filter: 'brightness(0)' }}
                    className='munfooterSub1img1'
                    alt="facebook"
                  />
                ) : (
                  <img
                    src={facebookLite}
                    style={{ color: 'black', filter: 'brightness(0)' }}
                    className='munfooterSub1img1'
                    alt="facebook"
                  />
                )}
              </button>
            </a>
            <a href="https://www.instagram.com/thomso.iitr" target="_blank" rel="noopener noreferrer">
              <button onMouseEnter={handleClick2} onMouseLeave={handleClick22}>
                {change2 ? (
                  <img
                    src={insta}
                    style={{ color: 'black', filter: 'brightness(0)' }}
                    className='munfooterSub1img2'
                    alt="instagram"
                  />
                ) : (
                  <img
                    src={instaLite}
                    style={{ color: 'black', filter: 'brightness(0)' }}
                    className='munfooterSub1img2'
                    alt="instagram"
                  />
                )}
              </button>
            </a>
            <a href="https://x.com/Thomso_IITR" target="_blank" rel="noopener noreferrer">
              <button onMouseEnter={handleClick3} onMouseLeave={handleClick32}>
                {change3 ? (
                  <img
                    src={twitter}
                    style={{ color: 'black', filter: 'brightness(0)' }}
                    className='munfooterSub1img3'
                    alt="twitter"
                  />
                ) : (
                  <img
                    src={twitterLite}
                    style={{ color: 'black', filter: 'brightness(0)' }}
                    className='munfooterSub1img3'
                    alt="twitter"
                  />
                )}
              </button>
            </a>
            <a href="https://www.linkedin.com/company/thomso-official/" target="_blank" rel="noopener noreferrer">
              <button onMouseEnter={handleClick4} onMouseLeave={handleClick42}>
                {change4 ? (
                  <img
                    src={linkedin}
                    style={{ color: 'black', filter: 'brightness(0)' }}
                    className='munfooterSub1img4'
                    alt="linkedin"
                  />
                ) : (
                  <img
                    src={linkedinLite}
                    style={{ color: 'black', filter: 'brightness(0)' }}
                    className='munfooterSub1img4'
                    alt="linkedin"
                  />
                )}
              </button>
            </a>
            <a href="https://www.youtube.com/@iitrthomso" target="_blank" rel="noopener noreferrer">
              <button onMouseEnter={handleClick5} onMouseLeave={handleClick52}>
                {change5 ? (
                  <img
                    src={youtube}
                    style={{ color: 'black', filter: 'brightness(0)' }}
                    className='munfooterSub1img3'
                    alt="youtube"
                  />
                ) : (
                  <img
                    src={youtubeLite}
                    style={{ color: 'black', filter: 'brightness(0)' }}
                    className='munfooterSub1img3'
                    alt="youtube"
                  />
                )}
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="mobfooter">
        <MunFooter_mob />
      </div>
    </div>
  );
};

export default MunFooter;
