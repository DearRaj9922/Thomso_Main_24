import React from 'react'
import Logo from '../../assets/Logo-blue.png'
import './munfootermob.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const MunFooter_mob = () => {
  return (
    <div className='munfooterwrapper'>

        <div className="dxnmunfooter">
            <p className='munfooterhead'>Get Direction</p>
            <p className='munfootercontent'>Thomso Office, 1st Floor, MAC <br />Indian Institute of Technology <br />Roorkee 247667</p>
        </div>

        <div className="contactusmunfooter">
            <p className="munfooterhead">Contact Us</p>
            <div className="munfootercontent">
                <div className="mail">
                    <p>aayushi.thomso@gmail.com</p>
                    <p>thomso@iitr.ac.in</p>
                </div>
                 <div className="number">
                    <p>9667670298 (Jayant)</p>
                    <p>9509618239 (Sneha)</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MunFooter_mob
