import React from 'react'
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
                    <p>aayush.thomso@gmail.com</p>
                    <p>anunjay.thomso@gmail.com</p>
                </div>
                 <div className="number">
                    <p>9128004995 (Anunjay)</p>
                    <p>9056667714 (Sehaj)</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MunFooter_mob
