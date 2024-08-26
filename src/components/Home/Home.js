import React from "react"
import "./Home.css"
import Section2 from "./SECTION3/section3"
import Navbar from "../EventsNavbar/Eventsnavbar"
import { useNavigate } from "react-router-dom"
import sec1bg from '../../assets/section1-2d-bg.webp';
import sec1bgmob from '../../assets/sec1-mobbg.png';
import sec2bg from '../../assets/section2-2d-bgfull.webp';
import sec2bgmob from '../../assets/sec2-mobbg.png';
import herotitle from '../../assets/herotitle.webp';
import clouds from '../../assets/clouds copy.svg';
import bird from '../../assets/crossroad_bird.webp';
import aboutus from '../../assets/about-us.webp';
import train from '../../assets/train.webp';


export default function Home() {
	const navigate=useNavigate();
	return (
		<div className='home_wrapper'>
			{/* Navbar */}
			<Navbar/>

			{/* Section 1 */}
			<div className='sec1'>
				<img className='backdrop' src={sec1bg} alt='bg' />
        		<img className="backdrop-mob" src={sec1bgmob} alt="" />
				<img className='sec1-title' src={herotitle} alt='Thomso 24' />
				<div className='sec1-btns'>
					<button onClick={()=>navigate('/register')}>Register Now</button>
					{/* <button>Register Now</button> */}
				</div>
			</div>

			{/* Section 1.5 */}
			<div className='sec1-5'>
				<img className='sec1-ender' src={clouds} alt='' />
				<img className='sec1-bird' src={bird} alt='' />
			</div>

			{/* Section 2 */}
			<div className='sec2'>
				<img className='backdrop2' src={sec2bg} alt='bg' />
				<img className='backdrop-mob2' src={sec2bgmob} alt='bg' />
				<div className='about'>
					<img src={aboutus} alt='About Us' />
					<p>
						The theme of Thomso’23 is ‘An Eclectic Elysia’, which means a place
						or state of perfect happiness derived from a broad and diverse range
						of sources. This theme reflects the vision and mission of Thomso’23,
						which is to celebrate the diversity and richness of human expression
						and culture. Thomso’23 aims to provide a mesmerizing experience that
						will fuse the mystical charm of the universe with the vitality of
						human expression. Thomso’23 invites you to escape from the dullness
						of your daily life and dive into a world full of wonder and
						fascination, where every moment is a new adventure
						waiting to happen.
					</p>
				</div>
			</div>
      {/* Train */}
      <div className="train-wrapper">
        <img className="train" src={train} alt="" />
      </div>


      <Section2 />
		</div>
	)
}
