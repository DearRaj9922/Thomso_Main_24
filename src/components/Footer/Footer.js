import React, { useState } from 'react'
import './footer.css'
// import UpArrow from '../Footer/Footer Images/uparrow.webp';
// import DownArrow from '../Footer/Footer Images/downarrow.webp'
// import Logo from './Footer Images/Logo.webp'
import Logo from '../../assets/Logo-blue.png'
// import nodatewhitelogo from '../Assets/logo-nodate-white.svg';
import facebook from './Footer Images/facebook.webp'
import facebookLite from './Footer Images/facebookLite.webp'
import insta from './Footer Images/insta.webp'
import instaLite from './Footer Images/instaLite.webp'
import twitter from './Footer Images/twitter.webp'
import twitterLite from './Footer Images/twitterLite.webp'
import linkedin from './Footer Images/linkedin.webp'
import linkedinLite from './Footer Images/linkedinLite.webp'
import youtube from './Footer Images/youtube.webp'
import youtubeLite from './Footer Images/youtubeLite.webp'
import clouds from '../../assets/clouds.svg'
import Footer_mob from './Footer_mob'


const Footer = () => {
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
    <div className='footer_wrapper'>
      <div className='footerBox'>
       <div className='clouds' >
       {/* <img src={clouds} alt="" style={{position:'absolute', height:'15vw', width:'100vw', zIndex:'1000'}} /> */}
       </div>
        
        <div className={`footerBoxB open`}>
          
          <div className='footerBoxBSub1'>
            <div>
            {/* <img src={Logo} alt="Logo"/> */}
            <img src={Logo} alt="Logo"/>
            </div>
            <div className='footerText1'>
            Get Direction
            </div>
            <div className='footerText2'>

            Thomso Office, 1st Floor MAC, <br/>Indian Institute of Technology,Roorkee 247667

            </div>
          </div>
          <div className='footerRight' style={{display:"flex",flexDirection:"column",gap:"30px"}}>

          <div className='footerPara1'>

            <div className='footerContactUs'>
            Contact Us
            </div>
            </div>
            <div className='footerPara2'>

          <div className='footerBoxBSub1'>
            <div className='footerText2'>
            thomso@iitr.ac.in
            </div>
            <div className='footerText2'>
            anunjay.thomso@gmail.com
            </div>
          </div>

          <div className='footerBoxBSub1'>
          <div className='footerText2'>
            Anunjay - 8077071943
            </div>
            <div className='footerText2'>
            Sehaj - 9056667714
            </div>
            
          </div>
            </div>
          </div>

        </div>

        <div className='footerBoxA'>
          <div className='footerSub1'>
             <button onMouseEnter={handleClick1} onMouseLeave={handleClick12}>
              {
                change1 ?
                <img src={facebook} style={{color:"black",filter:"brightness(0)"}}className='footerSub1img1' alt="facebook"/>
                :
                <img src={facebookLite} style={{color:"black",filter:"brightness(0)"}} className='footerSub1img1' alt="facebook"/>

              }
              </button>
             <button onMouseEnter={handleClick2} onMouseLeave={handleClick22}>
             {
                change2 ?
                <img src={insta}  style={{color:"black",filter:"brightness(0)"}} className='footerSub1img2' alt="facebook"/>
                :
                <img src={instaLite} style={{color:"black",filter:"brightness(0)"}}  className='footerSub1img2' alt="facebook"/>

              }
              </button>
             <button onMouseEnter={handleClick3} onMouseLeave={handleClick32}>
             {
                change3 ?
                <img src={twitter} style={{color:"black",filter:"brightness(0)"}} className='footerSub1img3' alt="facebook"/>
                :
                <img src={twitterLite} style={{color:"black",filter:"brightness(0)"}} className='footerSub1img3' alt="facebook"/>

              }
              </button>
             <button onMouseEnter={handleClick4} onMouseLeave={handleClick42}>
             {
                change4 ?
                <img src={linkedin} style={{color:"black",filter:"brightness(0)"}} className='footerSub1img4' alt="flinkedin"/>
                :
                <img src={linkedinLite} style={{color:"black",filter:"brightness(0)"}} className='footerSub1img4' alt="flinkedin"/>

              }
              </button>
             <button onMouseEnter={handleClick5} onMouseLeave={handleClick52}>
             {
                change5 ?
                <img src={youtube} style={{color:"black",filter:"brightness(0)"}} className='footerSub1img3' alt="fyoutube"/>
                :
                <img src={youtubeLite} style={{color:"black",filter:"brightness(0)"}} className='footerSub1img3' alt="fyoutube"/>

              }
              </button>
          </div>
          {/* <div className='footerSub2'>
            <button className='footerButton' onClick={handleClick}>
              {clicked ? <img src={UpArrow} alt="upArrow" /> : <img className='downarrow' src={DownArrow} alt="DownArrow" />}
            </button>
          </div> */}
        </div>

      </div>
      
      <div className="mobfooter">
      <Footer_mob/>
      </div>
      
    </div>
  )
}

export default Footer
