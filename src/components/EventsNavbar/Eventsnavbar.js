import React, { useState, useEffect } from "react";
import logo from "../../assets/logowhite.svg";
import "./Eventsnavbar.css";
import MobEventnavbar from "./MobEventnavbar";
import { Link, useNavigate } from "react-router-dom";
import img_profile from "../../assets/profileimg.svg";
import { message } from "antd";
import axios from "axios";
import Loader from "../Newloader/Newloader"

function Navbar({ color, disable, setregister, register, data, fontcolor, bright }) {
  const [display1, setdisplay] = useState("none");
  const [userDetails, setuserDetails] = useState({});
  const [user, setuser] = useState({});
  const [loading, setLoading] = useState(false); // Loader state

  const navigate = useNavigate();

  const handleLogout = () => {
    setLoading(true); // Show loader
    setTimeout(() => {
      navigate("/");
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      setLoading(false); // Hide loader after navigation
    }, 1000); // Adjust delay as needed
  };

  useEffect(() => {
    setuserDetails(user);
  }, [user]);

  const onHandleClick = (e) => {
    setLoading(true); // Show loader
    setTimeout(() => {
      navigate(`/events/${e}`);
      setdisplay("none");
      if (register) {
        setregister(true);
      }
      setLoading(false); // Hide loader after navigation
    }, 1000); // Adjust delay as needed
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

  // Show loader while navigating
  const handleNavigate = (path) => {
    setLoading(true); // Show loader
    setTimeout(() => {
      navigate(path);
      setLoading(false); // Hide loader after navigation
    }, 1000); // Adjust delay as needed
  };

  const handleLogoClick = () => {
    handleNavigate("/"); // Navigate to home page
  };

  return (
    <>
      {loading && <Loader />} {/* Conditionally render Loader */}
      <div style={{ background: color }} className="nav-comp">
        <MobEventnavbar brightMob={bright} />
        <div className="mainnav">
          <img
            className="event-nav-left"
            style={{ filter: bright }}
            src={logo}
            alt=""
            onClick={handleLogoClick} // Handle logo click
          />
          <div className="event-nav-right">
            <a
              className="event-nav-right-compo hover-underline-animation"
              style={{ color: fontcolor }}
              onClick={() => handleNavigate("/events")}
            >
              Events
            </a>
            <a
              className="event-nav-right-compo hover-underline-animation"
              style={{ color: fontcolor }}
              onClick={() => handleNavigate("/mun")}
            >
              MUN
            </a>
            <a
              className="event-nav-right-compo hover-underline-animation"
              style={{ color: fontcolor }}
              href="https://ca.thomso.in/"
              target="_blank"
            >
              CA Portal
            </a>
            <a
              className="event-nav-right-compo hover-underline-animation"
              style={{ color: fontcolor }}
              href="https://zonals.thomso.in/"
              target="_blank"
            >
              Zonals
            </a>
            <a
              className="event-nav-right-compo hover-underline-animation"
              style={{ color: fontcolor }}
              href="https://thomso.in/#/sponsers"
              target="_blank"
            >
              Our Sponsors
            </a>
            {userDetails && userDetails.payment ? (
              <a
                className={localStorage.getItem("token") ? "event-nav-right-compo hover-underline-animation" : "none_display"}
                style={{ color: fontcolor }}
                href="https://thomso.in/#/id_card"
              >
                ID-CARD
              </a>
            ) : (
              <a
                className={localStorage.getItem("token") ? "event-nav-right-compo hover-underline-animation" : "none_display"}
                style={{ color: fontcolor }}
                href="https://thomso.in/#/payment"
              >
                ID-CARD
              </a>
            )}
            {localStorage.getItem("token") ? (
              <>
                <img
                  src={userDetails?.avtar ? userDetails?.avtar : img_profile}
                  onClick={() => handleNavigate("/profile")}
                  id="img_profile"
                />
              </>
            ) : (
              <>
                <button
                  onClick={() => handleNavigate("/login")}
                  className="event-regi-btn"
                  style={{ color: "white", backgroundColor: "black" }}
                  id="registernow"
                >
                  LOG IN
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;


// import React, { useState, useEffect } from "react";
// import logo from "../../assets/logowhite.svg";
// import "./Eventsnavbar.css";
// import MobEventnavbar from "./MobEventnavbar";
// import { Link, useNavigate } from "react-router-dom";
// import img_profile from "../../assets/profileimg.svg";
// import { message } from "antd";
// import axios from "axios";
// import Loader from "../Newloader/Newloader"

// function Navbar({ color, disable, setregister, register, data, fontcolor, bright }) {
//   const [display1, setdisplay] = useState("none");
//   const [userDetails, setuserDetails] = useState({});
//   const [user, setuser] = useState({});
//   const [loading, setLoading] = useState(false); // Loader state

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setLoading(true); // Show loader
//     setTimeout(() => {
//       navigate("/");
//       localStorage.removeItem("token");
//       localStorage.removeItem("user_id");
//       setLoading(false); // Hide loader after navigation
//     }, 1000); // Adjust delay as needed
//   };

//   useEffect(() => {
//     setuserDetails(user);
//   }, [user]);

//   const onHandleClick = (e) => {
//     setLoading(true); // Show loader
//     setTimeout(() => {
//       navigate(`/events/${e}`);
//       setdisplay("none");
//       if (register) {
//         setregister(true);
//       }
//       setLoading(false); // Hide loader after navigation
//     }, 1000); // Adjust delay as needed
//   };

//   useEffect(() => {
//     loadUserData();
//   }, []);

//   const loadUserData = async () => {
//     try {
//       axios
//         .get(`https://api2.thomso.in/apiV1/current_user_participant`)
//         .then((res) => {
//           setuser(res.data);
//           localStorage.setItem("user_id", res.data?.user_id);
//           localStorage.setItem("id", res.data?.id);
//         })
//         .catch((err) => {
//           console.log(err);
//           if (err?.response?.status == 401) {
//             if (localStorage.getItem("token")) {
//               localStorage.removeItem("token");
//               localStorage.removeItem("user_id");
//               window.location.pathname = "/";
//             }
//           }
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Show loader while navigating
//   const handleNavigate = (path) => {
//     setLoading(true); // Show loader
//     setTimeout(() => {
//       navigate(path);
//       setLoading(false); // Hide loader after navigation
//     }, 1000); // Adjust delay as needed
//   };


//   const handleLogoClick = () => {
//     handleNavigate("/"); // Navigate to home page
//   };

//   return (
//     <>
//       {loading && <Loader />} {/* Conditionally render Loader */}
//       <div style={{ background: color }} className="nav-comp">
//         <MobEventnavbar brightMob={bright} />
//         <div className="mainnav">
//           <img
//             className="event-nav-left"
//             style={{ filter: bright }}
//             src={logo}
//             alt=""
//             onClick={handleLogoClick} // Handle logo click
//           />
//           <div className="event-nav-right">
//             <a
//               className="event-nav-right-compo hover-underline-animation"
//               style={{ color: fontcolor }}
//               onClick={() => handleNavigate("/events")}
//             >
//               Events
//             </a>
//             <a
//               className="event-nav-right-compo hover-underline-animation"
//               style={{ color: fontcolor }}
//               onClick={() => handleNavigate("/mun")}
//             >
//               MUN
//             </a>
//             <a
//               className="event-nav-right-compo hover-underline-animation"
//               style={{ color: fontcolor }}
//               href="https://ca.thomso.in/"
//               target="_blank"
//             >
//               CA Portal
//             </a>
//             <a
//               className="event-nav-right-compo hover-underline-animation"
//               style={{ color: fontcolor }}
//               href="https://zonals.thomso.in/"
//               target="_blank"
//             >
//               Zonals
//             </a>
//             {userDetails && userDetails.payment ? (
//               <a
//                 className={localStorage.getItem("token") ? "event-nav-right-compo hover-underline-animation" : "none_display"}
//                 style={{ color: fontcolor }}
//                 href="https://thomso.in/#/id_card"
//               >
//                 ID-CARD
//               </a>
//             ) : (
//               <a
//                 className={localStorage.getItem("token") ? "event-nav-right-compo hover-underline-animation" : "none_display"}
//                 style={{ color: fontcolor }}
//                 href="https://thomso.in/#/payment"
//               >
//                 ID-CARD
//               </a>
//             )}
//             {localStorage.getItem("token") ? (
//               <>
//                 <img
//                   src={userDetails?.avtar ? userDetails?.avtar : img_profile}
//                   onClick={() => handleNavigate("/profile")}
//                   id="img_profile"
//                 />
//               </>
//             ) : (
//               <>
//                 <button
//                   onClick={() => handleNavigate("/login")}
//                   className="event-regi-btn"
//                   style={{ color: "white", backgroundColor: "black" }}
//                   id="registernow"
//                 >
//                   LOG IN
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;
