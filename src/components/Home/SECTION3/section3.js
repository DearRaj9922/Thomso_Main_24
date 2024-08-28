import React from 'react'
import './section3.css'
import bg from './../../../assets/bg_peacock.webp'
import title from './../../../assets/s3_title.svg'
import celeb from './../../../assets/Celebs.svg'
// import clouds from './../../../assets/clouds.svg'
import Section4 from './Section4'
// import title4 from './../../../assets/title_s4.svg'
import Section5 from './Section5'
import pattern from './../../../assets/pattern4-5.svg'
import Footer from '../../Footer/Footer'



const Section2 = () => {


  return (
    <div className='' style={{width:'100vw'}}>
        <img style={{height:'150vw', width:'100vw', zIndex:'-10', position:'absolute', objectFit:'contain'}}  alt ="bgbg"src={bg}/>

        {/* <div className='heading_s3' style={{color:'red', zIndex:'100', fontSize:'10vw', position:'fixed'}}>
            
        </div> */}
        <div className='wrapper_s3' style={{display:'flex', flexDirection:'column', alignItems:'center', paddingTop:'16vw'}} alt="bgbgb">
          <div>
          <img src={title} style={{ width:'80vw', }}/>
          </div>
          <div className='celeb_pic' >
            <img src={celeb} alt=""  style={{width:'60vw'}}/>
          </div>
        </div>
        

        <div className='wrapper_s4' >
          <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            {/* <img src={title4} alt="" style={{position:'absolute', marginTop:'85vw', zIndex:'100',paddingTop:'5vw'}}/> */}
          </div>
          <div style={{zIndex:'1000', marginTop:'39vw', width:'99.4vw'}}>
          <Section4/>
          </div>

          <div style={{position:'absolute', marginTop:'59vw',width:'100%', zIndex:'1000'}}>
            <img src={pattern} alt="" style={{width:'98%'}}/>
          </div>
          <div className='wrapper_s5' style={{marginTop:'105vw'}}>
          <Section5/>
          </div>
          
          <Footer/>
        </div>

       

        
    </div>
  )
}

export default Section2