import React from 'react'
import YouTube from 'react-youtube';
import './sec5.css'
import bg5 from '../../../assets/bg_s5.webp'
// import bg4 from '../../../assets/bgs4.svg'

const Section5 = () => {
    const videoOptions = {
        height: '900',
        width: '100',
        playerVars: {
          // autoplay: 1,
        },
      };

      const opts = {
        height: '390',
        width: '640',
        // playerVars: {
        //   // https://developers.google.com/youtube/player_parameters
        //   autoplay: 1,
        // },
      };
    
      return (
        <div className="background-container">

<img src={bg5} alt=""  className='bg-s5' style={{position:'absolute', zIndex:'0', width:'100%'}}/>
          <div className="video-mask">
          {/* <YouTube videoId="rVsg7yOYN44" opts={videoOptions} className="youtube-video" /> */}


          




            
            

            {/* <img src={bg4} alt="" id='image1' /> */}
            <p style={{zIndex:'1000'}}>Thomso Aftermovie</p>
          </div>

          <div style={styles.container}>
            
      <div style={styles.videoWrapper}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/watch?v=rVsg7yOYN44" // Replace with your video URL
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={styles.video}
        ></iframe>
      </div>
    </div>
        </div>
      );


    // return(
    //     <div>
    //         <img src={bg4} alt="" />


            
    //     </div>
    // )
}


const styles = {
  container: {
    // position:'fixed',
    paddingTop:'35vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40.64vw',
    // backgroundColor: '#f9f9f9',
    backgroundColor:'transparent',
  },
  videoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width:'44vw',  // Width smaller than height
    height: '32vw', // Height larger than width
  },
};

export default Section5