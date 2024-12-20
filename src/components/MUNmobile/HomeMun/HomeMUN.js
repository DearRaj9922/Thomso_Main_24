import React, { useEffect, useState } from 'react'
// import BG from "../../../assests/MUNmobileBG.webp";
import MUNTop from "../../../assets/IITRMUN.png";
import Navbar from "../../../components/EventsNavbar/Eventsnavbar";
import Contact from "../../../components/MUNmobile/ContactUs/ContactUs";
import Executives from "../Executive/Executive";
import Executive from '../../../assets/judge.svg';
import Comittee from "../Committee/Committee";
import Prizes from "../../../assets/worth_img.svg";
import Committee from "../../../assets/COMMITTEE.svg";
import "./HomeMUN.css"
import FAQ from '../../MUN/FAQ/FAQ';
import Loader from "../../Newloader/Newloader"
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import MobBG1 from "../../../assets/assests/munBG.svg"
import MobBG2 from "../../../assets/munBGmob.svg"

function HomeMUN() {
  const navigate = useNavigate();
  const [user, setuser] = useState({})
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      axios
        .get(`https://api2.thomso.in/apiV1/current_user_participant`)
        .then((res) => {
          setuser(res.data);
          localStorage.setItem("user_id", res.data?.user_id);
          localStorage.setItem("id", res.data?.id);
          // console.log("data", res.data);
          setCheck(true);
        })
        .catch((err) => {
          console.log(err);
          if (err?.response?.status == 401) {
            if (localStorage.getItem("token")) {
              localStorage.removeItem("token");
              localStorage.removeItem("user_id");
              window.location.pathname = "/";
            }
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    {loading && <Loader />}
    <div className="HomeMUN-body">
      <div className='HomeMUN-bg'>
        {/* <img src={MobBG1} className="HomeMUN-bg-1" alt="" /> */}
        <img src={MobBG2} className="HomeMUN-bg-2" alt="" />
      </div>
      <Navbar/>
      <div className="top-HomeMUN">
        <img src={MUNTop} className="top-HomeMUN-img" alt="" />
      </div>
      <div className="registerMUNNowBtn">
      {localStorage.getItem("token") ?
          (<button
           onClick={() => {
            setLoading(true);
            navigate("/MUNregister");
          }}
           className="registerMUNNowBtnClick">Register Now</button>)
          :
          (<button
            onClick={() => {
              setLoading(true);
              navigate("/login");
            }}
            className="registerMUNNowBtnClick">Register Now</button>)}
          
      </div>  
      <div className="prizesMUNWorth">
          <div className="prizesMUNWorthDiv">
          <img src={Prizes} alt="" className="prizesMUNWorth1" />
          </div>
          <div className="mun-cont">
          Model United Nations, referred to as MUN, offers participants a distinctive opportunity to immerse themselves in the realm of international diplomacy and the resolution of global challenges through constructive forums for open dialogue. Delegates will uphold their countries' national policies while engaging in negotiations amid other, at times divergent, international policies.
          </div>
        </div>
        <div className='committee_sec'>
        <div className="CommitteeHead" id="committeeHead1">
          <img src={Committee} alt="" />
        </div>
        <Comittee/>
        </div>
        <div className='executive-sec'>
        <div className="CommitteeHead" id="committeeHead2">
          <img src={Executive} alt="" />
        </div>
        <div className="ExecutiveMobile">
        <Executives/>
        </div>
        </div>
        
        
        <FAQ/>
        <Contact/>



    </div>
    </>
  )
}

export default HomeMUN
