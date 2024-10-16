import React, { useEffect, useState } from "react";
import MUNTop from "../../../assets/MUN-Top.webp";
// import BG from "../../../assests/BGMUN.webp";
// import BG_mob from "../../../assests/mun_mob.webp";
import Navbar from "../../../components/EventsNavbar/Eventsnavbar";
import Judges from "../Judges/Judges";
import FAQ from "../FAQ/FAQ";
import Contact from "../Footer/Footer";
import Commitee from "../Commitee/Commitee";
import Prizes from "../../../assets/worth_img.svg";
import MUNmob from "../../../components/MUNmobile/HomeMun/HomeMUN";
import Footer from "../../../components/Footer/Footer.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../Newloader/Newloader.js";
import MUN_Bg1 from "../../../assets/munBG copy.svg";
// import MUN_Bg2 from "../../../assets/assests/munBG.svg";
import "./Home.css";


function Home() {
  const navigate = useNavigate();
  const [user, setuser] = useState({});
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


  // const RegisterMUN = () => {
  //   {localStorage.getItem("token") ? (navigate("/MUNregister")) : message.info("Please login to register for MUN")}
  // }
  
  return (
    <>
    {loading && <Loader />}
      {" "}
      <div className="MUN-bg">
        <div className="MUN-Bg">
          <img src={MUN_Bg1} className="Bg-top" alt="" />
          {/* <img src={MUN_Bg2} className="Bg-bottom" alt="" /> */}
        </div>
        <Navbar color="transparent" />
        <div className="top-MUN-img">
          <img src={MUNTop} alt="" className="topImgMUN iitr_mun" />
        </div>
        
        <div className="registerNowBtn">
          {localStorage.getItem("token") ?
          (<button
           onClick={() => {
            setLoading(true);
            navigate("/MUNregister");
          }}
           className="registerNowBtnClick">Register Now</button>)
          :
          (<button
            onClick={() => {
              setLoading(true);
              navigate("/login");
            }}
            className="registerNowBtnClick">Register Now</button>)}
        </div>
        <div className="prizesWorth">
          <div className="prizesWorthDiv">
            <img src={Prizes} alt="" className="prizesWorth1" />
          </div>
          Model United Nations, referred to as MUN, offers participants a distinctive opportunity to immerse themselves in the realm of international diplomacy and the resolution of global challenges through constructive forums for open dialogue. MUN conferences foster a range of critical skills, including public speaking, research, negotiation, and teamwork, while also promoting a deeper understanding of global affairs and international relations. Delegates will uphold their countries' national policies while engaging in negotiations amid other, at times divergent, international policies.
        </div>
        <div className="MUNCommitee">
          <Commitee />
        </div>
        <div className="MUNjuDges">
          <Judges />
        </div>
        <FAQ />
        <div className="MUNFooter">
          <Contact />
        </div>
        <div className="MUNFooter">
          <Footer style={{backgroundColor:"transparent"}} className="mun_footer_web"/>
        </div>
      </div>
      <div className="MUN-mob">
        <MUNmob/>
      </div>
    </>
  );
}

export default Home;
