import React, { useEffect, useState } from "react";
import "./Profile.css";
import MainProfileBox from "../MainProfileBox/MainProfileBox";
import NewNewProfileMobile from "../MobProfile/NewNewProfileMobile";
// import EventMobileNav from "../EventsPage/EventMobileNav";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "../../EventsNavbar/Eventsnavbar";
import Back from "../../../assets/profileback.webp";
import Back1 from "../../../assets/profilebackmob.webp";
import axios from "axios";


const Profile = ({ userDetails }) => {
    const [loader, setLoader] = useState(false)
  const navigate = useNavigate();
  const [user, setuser] = useState({})
  useEffect(() => {
      console.log(userDetails)
    if(!(userDetails.user || userDetails.id)){
        navigate('/login')
    }
    setLoader(true)

  }, []);


  // const loadUserData = async () => {
  //
  // };
   useEffect(() => {
    (async()=>{
      try {
      axios
        .get(`https://api2.thomso.in/apiV1/current_user_participant`)
        .then((res) => {
          setuser(res.data);
          // console.log(res.data)
          localStorage.setItem("user_id", res.data?.user_id);
          localStorage.setItem("id", res.data?.id);
          // console.log("data", res.data);
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
    })()
  }, []);
   if(!loader){
       return(<></>)
   }
   else{
       return (
    <>
      <div className="nnp-container">
        <img src={Back} className="pro-back-img" alt="" />
        <img src={Back1} className="pro-back-img2" alt="" />
        <div className="nnp-head">
          <Navbar color="transparent" data={user}/>
          {/* <div className="nnp-mobhead">
            <EventMobileNav />
          </div> */}
        </div>
          <div className="boxborder">
        <div className="nnp-laphead">
          <div className="nnp-content">
            <MainProfileBox data={user}/>
          </div>
        </div>
        <div className="nnp-mobile">
          <NewNewProfileMobile data={user}/>
        </div>
        </div>
      </div>
    </>
  );
};
   }


const mapStateToProps = (state) => {
  let userDetails = state.user.user;
  return {
    userDetails,
  };
};

export default connect(mapStateToProps, null)(Profile);
