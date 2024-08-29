import React from 'react'
import Logo from '../../assets/Logo-blue.png'
import './footermob.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer_mob = () => {
  return (
    <div className='mobfooterwrapper'>
        <div className="logo-footermob">
            <img src={Logo} alt="" />
        </div>

        <div className="dxnfootermob">
            <p className='footermobhead'>Get Direction</p>
            <p className='footermobcontent'>Thomso Office, 1st Floor, MAC <br />Indian Institute of Technology <br />Roorkee 247667</p>
        </div>

        <div className="contactusfootermob">
            <p className="footermobhead">Contact Us</p>
            <div className="footermobcontent">
                <div className="mail">



                    <p>thomso@iitr.ac.in</p>
                    <p>anunjay.thomso@gmail.com</p>

                </div>
                 <div className="number">
                    <p>8077071943 (Anunjay)</p>
                    <p>9056667714 (Sehaj)</p>
                </div>
            </div>
            
        </div>
       

    </div>
  )
}

export default Footer_mob