import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registeration from "./components/Registration/step1/collegeDetails.js"
import Home from  "./components/Home/Home.js"
import RegPage from "./components/Registration/RegPage/RegPage"
import EmailVerify from "./components/Registration/EmailVerify/EmailVerify";
import RegisComp from "./components/Registration/RegComp/RegCompleted";
import Login from "./components/Registration/login/Login";

import React,{useEffect, useState} from "react";
import axios from "axios"
import Pevents from "./components/Pevents/Pevents";

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
//
//     const loadUserData = async () => {
//     try {
//       axios.get(`/apiV1/current_user_participant`).then((res) => {
//         setUser(res.data);
//         // console.log("data", res.data);
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
  return (
    <Router>
      <Routes>
      {/* <Route exact={true} path="/" element={<Home />} /> */}
        <Route exact={true} path="/register" element={<Registeration/>}/>
        <Route exact={true} path="/otpverify" element={<RegPage />} />
        <Route exact={true} path="/emailverified" element={<EmailVerify />} />
        <Route exact={true} path="/regcompleted" element={<RegisComp />} />
        <Route exact={true} path="/login" element={<Login />} />
        <Route exact={true} path="/pevents" element={<Pevents />} />
      </Routes>
    </Router>

  );
}

export default App;
