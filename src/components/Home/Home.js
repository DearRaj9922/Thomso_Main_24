import React from "react"
import "./Home.css"
import Section2 from "./SECTION3/section3"

export default function Home() {
	return (
		<div className='home_wrapper'>
			{/* Navbar */}
			<div className='nav'>
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
			</div>

			{/* Section 1 */}
			<div className='sec1'>
				<img className='backdrop' src='/section1-2d-bg.webp' alt='bg' />
        <img className="backdrop-mob" src="/sec1-mobbg.png" alt="" />
				<img className='sec1-title' src='/herotitle.webp' alt='Thomso 24' />
				<div className='sec1-btns'>
					<button>Register Now</button>
					<button>Register Now</button>
				</div>
			</div>

			{/* Section 1.5 */}
			<div className='sec1-5'>
				<img className='sec1-ender' src='/clouds.svg' alt='' />
				<img className='sec1-bird' src='/crossroad_bird.webp' alt='' />
			</div>

			{/* Section 2 */}
			<div className='sec2'>
				<img className='backdrop2' src='/section2-2d-bgfull.webp' alt='bg' />
				<img className='backdrop-mob2' src='/sec2-mobbg.png' alt='bg' />
				<div className='about'>
					<img src='/about-us.webp' alt='About Us' />
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
        <img className="train" src="/train.webp" alt="" />
      </div>


      <Section2 />
		</div>
	)
}
