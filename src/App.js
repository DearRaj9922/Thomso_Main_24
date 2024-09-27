// import logo from './logo.svg';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
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
// import EventsMain from "./components/Profile/EventsPage/EventMainPage"
import ProfileNameEditModel from "./components/Profile/MainProfileBox/ProfileNameEditModel";
import Carousel1 from "./components/Profile/Carousel/Carousel1";
import Profilenavbar from "./components/Navbar/Profilenavbar";
import Forget from "./components/forget_pwd/forget";
import ResetPassword from "./components/Registration/ResetPass/ResetPass";
// import EventMainPage from "./components/Profile/EventsPage/EventMainPage";
import Home3d from "./components/3dhome/Home3d.js";
import EventMainPage from "./components/EventsPage/EventMainPage";
import NewEve from "./components/Profile/EventsPage/NewEventCard/NewEventcard.js";
import WebPayment from "./components/Profile/PaymentBox/WebPayment.js";
import Pdffile from "./components/PdfRenderer/PdfDownload.js"

// import EventPayment from "./components/EventPayment/EventPayment";

import React,{useEffect, useState} from "react";
import axios from "axios"
// import Pevents from "./components/Pevents/Pevents";
// import Section3 from './components/Home/SECTION3/section3.js';
import Section2 from './components/Home/SECTION3/section3.js';
import Section5 from './components/Home/SECTION3/Section5.js';
import Section4 from './components/Home/SECTION3/Section4.js';
import NewEventpage from './components/Profile/EventsPage/Neweventpage/newEventPage.js';
import Newloader from "./components/Newloader/Newloader.js";
// import Newevents  from "./components/Profile/EventsPage/Newevents.js";

import Id_Card from "./components/Profile/PaymentBox/Id_Card";
// import NewPaymentbox from "./components/Profile/PaymentBox/NewPaymentBox";

import MUN from "./components/MUN/Home/Home.js";
import Home2Reg from "./components/MUNmobile/Registration/Registration";
import MUNMoreInfoPage1 from "./components/MUN/MoreInfo/Moreinfopage1/Moreinfopage1";
import MUNMoreInfoPage2 from "./components/MUN/MoreInfo/Moreinfopage2/Moreinfopage2";
import MUNMoreInfoPage3 from "./components/MUN/MoreInfo/Moreinfopage3/Moreinfopage3";
import Pevents from "./components/Pevents/Pevents";
import EventPayment from "./components/EventPayment/EventPayment";
// import VideoPlayer from "./components/Home/SECTION3/demo.js";

function App(props) {
  const [user,setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // const [items,setItems] = useState();

  // useEffect(()=>{
  //   (async()=>{
  //     await axios.get("https://api2.thomso.in/apiV1/controls_get_participant?participant_id=Th-2400011").then((res)=>{
  //       console.log("abc",res.data)
  //     })
  //   })()
  // },[])
useEffect(() => {
  if(!localStorage.getItem("token")){
    loadUserData();
  };
  }, [user]);


  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("user_id");
    if (token) {
      props?.userDetails && props?.fetchUsers({ id: userId });
    }
  }, []);

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

    const loadUserData = async () => {
    try {
      axios.get(`https://api2.thomso.in/apiV1/current_user_participant`).then((res) => {
        setUser(res.data);
        setIsLoading(false);
        // console.log("data", res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Router>
      <Routes>
      {/* <Route exact={true} path="/" element={<Home />} /> */}
      <Route path="/home3d" element={<Home3d/>}/>

      {/* <Route path="/demo" element={<VideoPlayer/>}/> */}


        <Route path="/" element={<Home/>}/>

      <Route path="/section2" element={<Section2 />} />
      <Route path="/section4" element={<Section4 />} />
        <Route path="/section5" element={<Section5 />} />


        <Route path="/register" element={<Registeration/>}/>
        <Route path="/otpverify" element={<RegPage />} />
        <Route path="/emailverified" element={<EmailVerify />} />
        <Route path="/regcompleted" element={<RegisComp />} />
        <Route path="/login" element={<Login />} />
         <Route exact={true} path="/peventsmeow" element={<Pevents />} />
        <Route path="/navbar" element={<Profilenavbar />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/eventsnavbar" element={<Eventsnavbar />} />
          <Route path="/events/:id" element={<EventMainPage />} />
          {/* <Route exact={true} path="/eventpayment" element={<EventPayment />} /> */}
          <Route path="/pevents" element={<EventBox />} />
          <Route path="/paynow" element={<Paymentbox />} />
          <Route path="/payment-gateway/rkeoCVAE43JI303FNN40IjFDIJF9932yxnijr8j93ruggc8H" element={<NewPaymentbox/>} />
          <Route path="/payment" element={<WebPayment/>}/>
          <Route path="/pdf" element={<Pdffile/>}/>

          {/* <Route path="/payment" element={<WebPayment/>} /> */}
          <Route path="/card" element={<EventCard/>} />
          {/* <Route exact={true} path="/events" element={<EventsMain />} /> */}
          <Route path="/events" element={<NewEventpage/>}/>
          <Route path="/ProfileNameEdit" element={<ProfileNameEditModel />} />
          <Route path="/Carousel" element={<Carousel1/>} />
          <Route path="/forgotpassword" element={<Forget/>} />
          <Route path="/neweventcard" element={<NewEve/>}/> 
          <Route path="/loader" element={<Newloader/>}/>
          <Route path= "/id_card" element={<Id_Card/>}/>
          <Route exact={true} path="/eventpayment" element={<EventPayment />} />
          <Route
          
            path="/auth/reset-password/:email/:token"
            element={<ResetPassword />}
          />
          <Route exact={true} path="/mun" element={<MUN/>}/>
          <Route exact={true} path="/MUNregister" element={<Home2Reg/>} />
          <Route exact={true} path="/muninfo_page1" element={<MUNMoreInfoPage1/>} />
          <Route exact={true} path="/muninfo_page2" element={<MUNMoreInfoPage2/>} />
          <Route exact={true} path="/muninfo_page3" element={<MUNMoreInfoPage3/>} />

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
