import React, {useEffect} from "react"
import "./Home.css"
import Section2 from "./SECTION3/section3"
import Navbar from "../EventsNavbar/Eventsnavbar"
import { useNavigate } from "react-router-dom"
import clouds from "../../assets/clouds.svg";
import secimg1 from "../../assets/section1-2d-bg.webp"
import secimg2 from "../../assets/sec1-mobbg.webp"
import secimg3 from "../../assets/herotitle.webp"
import secimg4 from "../../assets/bird.svg"
import secimg5 from "../../assets/section2-2d-bgfull.webp"
import secimg6 from "../../assets/sec2-mobbg.webp"
import secimg7 from "../../assets/about-us.webp"
import secimg8 from "../../assets/train.webp";
import Loader from "../Newloader/Newloader";
import Footer from '../Footer/Footer';
import { useState } from "react"

export default function Home() {
	const navigate=useNavigate();
	const [loader, setLoader] = useState(false)
	const [loading, setLoading] = useState(false);
	const [loggedin, setLoggedin] = useState(false)

	useEffect(()=>{
		if (localStorage.getItem('token')){
			setLoggedin(true)
		}
		else{
			setLoggedin(false)
		}
	},[])
	const handleNavigate = (path) => {
		setLoading(true); // Show loader
		setTimeout(() => {
		  navigate(path);
		  setLoading(false); // Hide loader after navigation
		}, 1000); // Adjust delay as needed
	  };
	
	
	  const handleReisterClick = () => {
		handleNavigate("/register"); // Navigate to home page
	  };
	  const handleEventsClick = () => {
		handleNavigate("/events"); // Navigate to home page
	  };
	  
	// const [loader, setLoader] = useState(false)
	return (
		<>
		{loading && <Loader />} 
		<div className='home_wrapper'>
			{/* Navbar */}
			<Navbar
			fontcolor="black"
			bright="brightness(0)"
			/>
			{/* <div className='nav'>
				<div className='navlogo'>
					<img src='/navlogo.svg' alt='thomso' />
				</div>
				<div className='navigation'>
					<a href='#' className='nav-link'>
						Ca Portal
					</a>
					<a href='#' className='nav-link'>
						Zonals
					</a>
					<a href='#' className='nav-link'>
						Events
					</a>
					<a href='#' className='nav-link'>
						Merch
					</a>
					<button type='button' className='nav-btn'>
						Log In
					</button>
				</div>
			</div> */}

			{/* Section 1 */}
			<div className='sec1'>
				<img className='backdrop' src={secimg1} alt='bg' />
        <img className="backdrop-mob" src={secimg2} alt="" />
				<img className='sec1-title' src={secimg3} alt='Thomso 24' />
				<div className='sec1-btns'>
					{!loggedin?(<button style={{border:"2px solid white"}} onClick={handleReisterClick}>Register Now</button>):(<></>)}
					<button style={{backgroundColor:"white",color:"#004D9D",border:"2px solid #004D9D"}} onClick={handleEventsClick}>Explore Events</button>
				</div>
			</div>

			{/* Section 1.5 */}
			<div className='sec1-5'>
				<img className='sec1-ender' src={clouds} alt='' />
				<img className='sec1-bird' src={secimg4} alt='' />
			</div>

			{/* Section 2 */}
			<div className='sec2'>
				<img className='backdrop2' src={secimg5} alt='bg' />
				<img className='backdrop-mob2' src={secimg6} alt='bg' />
				<div className='about'>
					<img src={secimg7} alt='About Us' />
					<p>
						The theme of Thomso’24 is ‘A Crossroad of Cultures’, which means a place
						or state of perfect happiness derived from a broad and diverse range
						of sources. This theme reflects the vision and mission of Thomso’24,
						which is to celebrate the diversity and richness of human expression
						and culture. Thomso’24 aims to provide a mesmerizing experience that
						will fuse the mystical charm of the universe with the vitality of
						human expression. Thomso’24 invites you to escape from the dullness
						of your daily life and dive into a world full of wonder and
						fascination, where every moment is a new adventure
						waiting to happen.
					</p>
				</div>
			</div>
      {/* Train */}
      <div className="train-wrapper">
        <img className="train" src={secimg8} alt="" />
      </div>


      <Section2 />
	  <Footer />
		</div>
		</>
	)
}
