import React, { useEffect, useState } from 'react'
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Renderer from "./Renderer";
import { connect } from "react-redux";
import { fetchUser, logout } from "../User/UserActions";
import { Store } from "../../Config/Store";
import loader from "../../components/Newloader/Newloader.js"

import "./Pdfcss.css";

const PdfDownload = ({ userDetails, loading }) => { // Destructure props correctly here


  // const func = () => {
  //   const { dispatch } = Store;
  //   dispatch(fetchUser());
  // }
  useEffect(()=>{
    // console.log("lauda",userDetails)
  },[])

  return (
    <>
      <div className="laptop">
        
        <PDFViewer style={{ width: "100vw", height: "100vh" }}>
          <Renderer user={userDetails} /> 
        </PDFViewer>
      </div>
      <div className="mobile">
                             
        <div>
          <PDFDownloadLink document={<Renderer user={userDetails} />} fileName='Id Card'>
            {({ loading }) =>
              loading ? (
                <button>Loading document...</button>
              ) : (
                <button>Download</button>
              )   
            }
          </PDFDownloadLink>
        </div>
      </div>
    </>
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

export default connect(mapStateToProps, null)(PdfDownload);
