import React, { useState, useEffect } from "react";
import logo from "../../assets/logowhite.svg";
import "./Eventsnavbar.css";
import MobEventnavbar from "./MobEventnavbar";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import img_profile from "../../assets/profileimg.svg";
import { message } from "antd";
import axios from "axios";
import { Payment } from "@mui/icons-material";

function Navbar({ color, disable, setregister, register, data,fontcolor ,bright}) {
  const [display1, setdisplay] = useState("none");
  const [userDetails, setuserDetails] = useState({});
  const [user, setuser] = useState({});

  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
  };

  useEffect(() => {
    setuserDetails(user);
  }, [user]);

  const onHandleClick = (e) => {
    navigate(`/events/${e}`);
    setdisplay("none");
    if (register) {
      setregister(true);
    }
  };

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

  // console.log(userDetails,"user");

  return (
    <div style={{ background: color }} className="nav-comp">
      <MobEventnavbar
      brightMob={bright}
       />
      <div className="mainnav">
        <Link to="/">
          <img className="event-nav-left" 
          style={{filter:bright}}
          src={logo} alt="" />
        </Link>
        <div className="event-nav-right">
          <a
            className="event-nav-right-compo hover-underline-animation"
            style={{color:fontcolor}}
            onClick={() => {
              navigate("/events");
            }}
          >
            Events
          </a>
          {/* <a
            className="event-nav-right-compo hover-underline-animation"
            onClick={() => {
              navigate("/merch_home");
            }}
          >
            Merch
          </a> */}
          <a
            className="event-nav-right-compo hover-underline-animation"
            style={{color:fontcolor}}
            onClick={() => {
              navigate("/MUN");
            }}
          >
            MUN
          </a>
          <a
            className="event-nav-right-compo hover-underline-animation"
            style={{color:fontcolor}}
            href="https://ca.thomso.in/"
            target="_blank"
          >
            CA Portal
          </a>
          <a
            className="event-nav-right-compo hover-underline-animation"
            style={{color:fontcolor}}
            href="https://zonals.thomso.in/"
            target="_blank"
          >
            Zonals
          </a>
          {userDetails && userDetails.payment ? (
            <a
              className={
                localStorage.getItem("token")
                  ? "event-nav-right-compo hover-underline-animation"
                  : "none_display"
              }
              style={{color:fontcolor}}
              href="https://thomso.in/id_card"
            >
              ID-CARD
            </a>
          ) : (
            <a
              className={
                localStorage.getItem("token")
                  ? "event-nav-right-compo hover-underline-animation"
                  : "none_display"
              }
              style={{color:fontcolor}}
              href="https://thomso.in/payment"
            >
              ID-CARD
            </a>
          )}
          <a
            className="event-nav-right-compo hover-underline-animation"
            style={{color:fontcolor}}
            onClick={() => {
              navigate("/spons");
            }}
          >
            Sponsors
          </a>
          {localStorage.getItem("token") ? (
            <>
              {/* <img src={profile} alt=""  onClick={() => navigate("/newprofile")} className="ca-profile1" /> */}
              <img
                src={userDetails?.avtar ? userDetails?.avtar : img_profile}
                onClick={() => {
                  navigate("/profile");
                }}
                id="img_profile"
              />
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="event-regi-btn"
                style={{color:fontcolor}}
                id="registernow"
              >
                LOG IN
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
