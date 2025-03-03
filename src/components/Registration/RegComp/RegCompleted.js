import React from "react";
import "./RegComp.css";
// import Nav from "../../web/NewNavbar/Nav"
import logbg1 from "../../../assets/regbg.webp";
import logbg2 from "../../../assets/logowhite.svg"
import logbgmob from "../../../assets/regbgmob.webp";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RegisComp = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="regComp">
        <div class="log_bg12">
          <img
            src={logbg1}
            className="regcompleteback"
            id="welcomebckbg"
            alt=""
          />
          <img
            src={logbgmob}
            className="regcompletebackmob"
            id="welcomebckbg"
            alt=""
          />
          <div id="log_bg1">
            <Link to="/">
              <img src={logbg2} id="nav_ev" alt="" />
            </Link>
            <p className="mob_view">Registration</p>
            <div className="Box">
              <div className="Box2">
                <h2>
                  <strong>Registration Completed!</strong>
                </h2>
                <br />
                <br />
                <p>
                  Voila! Your Registration for Thomso '24 IIT Roorkee is
                  successfully completed.
                </p>
                <h3>To add your events, login now</h3>
              </div>
              <button className="submit-log" onClick={() => navigate('/login')} type="submit">Login Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisComp;
