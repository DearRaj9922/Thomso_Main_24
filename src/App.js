import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registeration from "./components/Registration/step1/collegeDetails.js"
import Home from  "./components/Home/Home.js"
import { fetchUser } from "./components/User/UserActions";
import { connect, useDispatch } from "react-redux";
import RegPage from "./components/Registration/RegPage/RegPage"
import EmailVerify from "./components/Registration/EmailVerify/EmailVerify";
import RegisComp from "./components/Registration/RegComp/RegCompleted";
import Login from "./components/Registration/login/Login";
import Profile from "./components/Profile/Profile/Profile";
import Eventsnavbar from "./components/EventsNavbar/Eventsnavbar";
import EventBox from "./components/Profile/EventBox/EventBox";
import Paymentbox from "./components/Profile/PaymentBox/Paymentbox";
import NewPaymentbox from "./components/Profile/PaymentBox/NewPaymentBox";
import EventCard from "./components/Profile/EventCard/EventCard";
import EventsMain from "./components/Profile/EventsPage/EventMainPage"
import ProfileNameEditModel from "./components/Profile/MainProfileBox/ProfileNameEditModel";
import Carousel1 from "./components/Profile/Carousel/Carousel1";
import Profilenavbar from "./components/Navbar/Profilenavbar";
import Forget from "./components/forget_pwd/forget";
import ResetPassword from "./components/Registration/ResetPass/ResetPass";
import EventMainPage from "./components/Profile/EventsPage/EventMainPage";
import Home3d from "./components/3dhome/Home3d.js";
// import EventMainPage from "./components/EventsPage/EventMainPage";
// import EventPayment from "./components/EventPayment/EventPayment";

import React,{useEffect, useState} from "react";
import axios from "axios"
import Pevents from "./components/Pevents/Pevents";
// import Section3 from './components/Home/SECTION3/section3.js';
import Section2 from './components/Home/SECTION3/section3.js';
import Section5 from './components/Home/SECTION3/Section5.js';
import Section4 from './components/Home/SECTION3/Section4.js';

function App(props) {
  const [user,setUser] = useState({});
  const [items,setItems] = useState();


// useEffect(() => {
//   if(localStorage.getItem("token")){
//     loadUserData();
//   };
//   }, [user]);
//
//
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const userId = localStorage.getItem("user_id");
//     if (token) {
//       props?.userDetails && props?.fetchUsers({ id: userId });
//     }
//   }, []);

    const dispatch = useDispatch()
    useEffect(() => {
        // console.log("main", props)

        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("user_id");
        if (token) {
            dispatch(fetchUser({id:userId}))
            props?.userDetails && props?.fetchUsers({ id: userId });
        }
    }, []);

  //   const loadUserData = async () => {
  //   try {
  //     axios.get(`https://api2.thomso.in/apiV1/current_user_participant`).then((res) => {
  //       setUser(res.data);
  //       // console.log("data", res.data);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <Router>
      <Routes>
      {/* <Route exact={true} path="/" element={<Home />} /> */}
      <Route exact={true} path="/" element={<Home3d/>}/>

      <Route exact={true} path="/section2" element={<Section2 />} />
      <Route exact={true} path="/section4" element={<Section4 />} />
        <Route exact={true} path="/section5" element={<Section5 />} />

        <Route exact={true} path="/register" element={<Registeration/>}/>
        <Route exact={true} path="/otpverify" element={<RegPage />} />
        <Route exact={true} path="/emailverified" element={<EmailVerify />} />
        <Route exact={true} path="/regcompleted" element={<RegisComp />} />
        <Route exact={true} path="/login" element={<Login />} />
        {/* <Route exact={true} path="/pevents" element={<Pevents />} /> */}
        <Route exact={true} path="/navbar" element={<Profilenavbar />} />
          <Route exact={true} path="/profile" element={<Profile />} />
          <Route exact={true} path="/eventsnavbar" element={<Eventsnavbar />} />
          <Route exact={true} path="/events/:id" element={<EventMainPage />} />
          {/* <Route exact={true} path="/eventpayment" element={<EventPayment />} /> */}
          <Route exact={true} path="/pevents" element={<EventBox />} />
          <Route exact={true} path="/payment" element={<Paymentbox />} />
          <Route exact={true} path="/payment_gupt" element={<NewPaymentbox/>} />

          <Route exact={true} path="/payment_thsp" element={<NewPaymentbox/>} />
          <Route exact={true} path="/card" element={<EventCard/>} />
          <Route exact={true} path="/events" element={<EventsMain />} />
          <Route exact={true} path="/ProfileNameEdit" element={<ProfileNameEditModel />} />
          <Route exact={true} path="/Carousel" element={<Carousel1/>} />
          <Route exact={true} path="/forgotpassword" element={<Forget/>} />
          <Route
            exact={true}
            path="/auth/reset-password/:email/:token"
            element={<ResetPassword />}
          />

      </Routes>
    </Router>

  );
}

const mapStateToProps = (state) => {
  let userDetails = state.user.user;
  let loading = state.user.loading;

  return {
    userDetails,
    loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: (params) => dispatch(fetchUser(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
