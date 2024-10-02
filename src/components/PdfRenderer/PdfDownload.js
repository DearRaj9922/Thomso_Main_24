import React, { useEffect, useState } from 'react';
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Renderer from "./Renderer";
import { connect } from "react-redux";
import { fetchUser } from "../User/UserActions";
import "./Pdfcss.css";

const PdfDownload = ({ userDetails, loading }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the user is on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define mobile width as 768px or less
    };

    // Check on component mount
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
      <>
        {/* Laptop/Desktop View */}
        <div className="laptop">
          <PDFViewer style={{ width: "100vw", height: "100vh" }}>
            <Renderer user={userDetails} />
          </PDFViewer>
        </div>

        {/* Mobile View */}
        {isMobile && (
            <div className="mobile">
              <div>
                {/* Provide a download link on mobile */}
                <PDFDownloadLink
                    document={<Renderer user={userDetails} />}
                    fileName='IdCard.pdf'
                >
                  {({ loading }) =>
                      loading ? (
                          <button>Loading document...</button>
                      ) : (
                          <button>Download PDF</button>
                      )
                  }
                </PDFDownloadLink>
              </div>
            </div>
        )}
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
