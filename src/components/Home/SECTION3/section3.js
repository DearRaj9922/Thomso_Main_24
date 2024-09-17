import React from "react"
import "./section3.css"
import bg from "./../../../assets/bg_peacock.webp"
import title from "./../../../assets/s3_title.webp"
import celeb from "./../../../assets/Celebs.webp"
// import clouds from './../../../assets/clouds.svg'
import Section4 from "./Section4"
// import title4 from './../../../assets/title_s4.svg'
import Section5 from "./Section5"
import pattern from "./../../../assets/pattern.webp"
// import Footer from '../../Footer/Footer'
import mobsecs from "../../../assets/mobsection3.webp"
import YouTube from "react-youtube"

const Section2 = () => {
	const videoOptions = {
		height: "900",
		width: "100",
		playerVars: {
			// autoplay: 1,
		},
	}

	const opts = {
		height: "390",
		width: "640",
	}

  const styles = {
    container: {
		  position: "absolute",
      bottom: "480px",
      left: "80px",
      paddingTop: "35vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "40.64vw",
      // backgroundColor: '#f9f9f9',
      backgroundColor: "transparent",
      // zIndex:'1000'
    },
    videoWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "1000",
    },
    video: {
      width: "250px", // Width smaller than height
      height: "170px", // Height larger than width
    },
  }

	return (
		<div className='' style={{ width: "100vw", zIndex: "101" }}>
			<img
				style={{
					height: "150vw",
					width: "100vw",
					zIndex: "-10",
					position: "absolute",
					objectFit: "contain",
				}}
				alt='bgbg'
				src={bg}
			/>

			{/* <div className='heading_s3' style={{color:'red', zIndex:'100', fontSize:'10vw', position:'fixed'}}>
            
        </div> */}
			<div
				className='wrapper_s3'
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					paddingTop: "16vw",
				}}
				alt='bgbgb'
			>
				<div>
					<img src={title} style={{ width: "80vw" }} />
				</div>
				<div className='celeb_pic'>
					<img src={celeb} alt='' style={{ width: "60vw" }} />
				</div>
			</div>

			<div className='mobwrapper_s4'>
				<div style={styles.container}>
					<div style={styles.videoWrapper}>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/rVsg7yOYN44?rel=0&controls=0&modestbranding=1' // Replace with your video URL
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							// allowFullScreen
							// controls='0'
							// rel='0'
							style={styles.video}
						></iframe>
					</div>
				</div>
			</div>

			<div className='wrapper_s4'>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<p className='title_s4'>New Events</p>
				</div>
				<div style={{ zIndex: "1000", marginTop: "39vw", width: "99.4vw" }}>
					<Section4 />
				</div>

				<div
					style={{
						position: "absolute",
						marginTop: "59vw",
						width: "100%",
						zIndex: "1000",
					}}
				>
					<img src={pattern} alt='' style={{ width: "98%" }} />
				</div>
				<div className='wrapper_s5' style={{ marginTop: "105vw" }}>
					<Section5 />
				</div>
			</div>
		</div>
	)
}

export default Section2
