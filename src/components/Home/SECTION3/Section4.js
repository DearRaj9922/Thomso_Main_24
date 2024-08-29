import React, { useState } from 'react'
import './Section4.css'
import bg4 from './../../../assets/bg_s4.webp'
import { useNavigate } from 'react-router-dom'
// import title4 from './../../../assets/title_s4.svg'

// import img1 from './../../../assets/bg event.svg'
// import img2 from './../../../assets/bg event.svg'
// import img3 from './../../../assets/bg event.svg'
// import img4 from './../../../assets/bg event.svg'
// import img5 from './../../../assets/bg event.svg'

import img1 from './../../../assets/totebag.jpeg'
import img2 from './../../../assets/sneaker.jpeg'
import img3 from './../../../assets/cubelelo.jpeg'
import img4 from './../../../assets/mimicry.jpeg'
import img5 from './../../../assets/bgeventcard.webp'


const Section4 = () => {
    const navigate=useNavigate();

    const [curr, setCurr]=useState('');
  return (
    <div>
        <div className='bgwrappers4' style={{zIndex:'10'}}>
            
            <img src={bg4} alt="" style={{objectFit:'contain', width:'100%'}}/>
        </div>
        
        {/* <div className='' style={{display:'flex', zIndex:'100', height:'10vh', position:'absolute', width:'60%',left:'30%', marginTop:'10vw'}}>
            <button className={curr==='E'?'btnimgclicked':'btn-home-img'}  onClick={()=>{setCurr('E')}}>
                EVENTS
            </button>

            <button className={curr==='G'?'btnimgclicked':'btn-home-img'} onClick={()=>{setCurr('G')}}>
                GAMES
            </button>

            <button className={curr==='W'?'btnimgclicked':'btn-home-img'} onClick={()=>{setCurr('W')}}>
                WORKSHOPS
            </button>

            <button className={curr==='C'?'btnimgclicked':'btn-home-img'} onClick={()=>{setCurr('C')}}>
                CARNIVAL
            </button>
        </div> */}

        <div className='eventimgflex' >
            <img onClick={()=>{navigate('/events/80')}} src={img1} alt="" className='imgevent1' title='tote bag Artistry'/>
            <img onClick={()=>{navigate('/events/79')}} src={img2} alt="" className='imgevent2' title='Sneaker Design'/>
            <img onClick={()=>{navigate('/events/72')}} src={img3} alt="" className='imgevent3' title='Cubelelo'/>
            <img onClick={()=>{navigate('/events/73')}} src={img4} alt="" className='imgevent4' title='Mimicry'/>
            <img onClick={()=>{navigate('/events/74')}} src={img5} alt="" className='imgevent5' title=''/>
        </div>

    </div>
  )
}

export default Section4