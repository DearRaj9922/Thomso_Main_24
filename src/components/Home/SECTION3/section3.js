import React from 'react'
import './section3.css'
// import bg from './../../../assets/bg_peacock.png'
import title from './../../../assets/s3_title.svg'
import celeb from './../../../assets/Celebs.svg'
import clouds from './../../../assets/clouds.svg'
import Section4 from './Section4'
import title4 from './../../../assets/title_s4.svg'
import Section5 from './Section5'
import pattern from './../../../assets/pattern4-5.svg'



const Section2 = () => {


  return (
    <div className='' style={{}}>
        {/* <img style={{height:'auto', width:'99.4vw', zIndex:'-10',}} src={bg}/> */}

        {/* <div className='heading_s3' style={{color:'red', zIndex:'100', fontSize:'10vw', position:'fixed'}}>
            
        </div> */}
        <div className='wrapper_s3' style={{display:'flex', flexDirection:'column', alignItems:'center', paddingTop:'40vh'}}>
          <div>
          <img src={title} style={{height:'auto'}}/>
          </div>
          <div style={{marginTop:'20vh'}}>
            <img src={celeb} alt="" />
          </div>
        </div>

        <div className='wrapper_s4' >
          <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <img src={title4} alt="" style={{position:'absolute', marginTop:'210vh', zIndex:'100'}}/>
          </div>
          <div style={{zIndex:'1000', marginTop:'95vh', width:'99.4vw'}}>
          <Section4/>
          </div>

          <div style={{position:'absolute', top:'440%',width:'100%', zIndex:'1000'}}>
            <img src={pattern} alt="" />
          </div>
          <div style={{marginTop:'110%'}}>
          <Section5/>
          </div>
          
          {/* <img src={bg4} alt=""  /> */}
        </div>

        {/* <div className='wrapper_s5'
      style={{
        backgroundImage: `url('./../../../assets/bgs4.svg')`,
        clipPath: `url(${celeb}#clip-path-id)`, // Replace with the id of your SVG path
        backgroundSize: "cover",
        zIndex:'10000'
      }}
    /> */}
        
    </div>
  )
}

export default Section2