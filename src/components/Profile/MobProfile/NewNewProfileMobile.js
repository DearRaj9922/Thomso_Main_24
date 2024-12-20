import React, { useEffect } from "react";
import "./NewNewProfileMobileView.css";
import { useState } from "react";
import pic from "../../../assets/profile1.png.jpg";
import icon1 from "../../../assets/profile.svg";
import icon2 from "../../../assets/events.svg";
import icon3 from "../../../assets/payment.svg";
import { connect } from "react-redux";
import { message } from "antd";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { fetchUser } from "../../User/UserActions";
import Loader from "../../Loader/Loader";
import { RiDeleteBin6Line } from "react-icons/ri";
import log from "../../../assets/logout-logo.svg";
import cs1 from "../../../assets/CautionSign1.svg";
import { FileUploader } from "react-drag-drop-files";
import ProfileNameEditModel from "../MainProfileBox/ProfileNameEditModel";
import { BiEdit } from "react-icons/bi";
import ProfileContactEditModel from "../MainProfileBox/ProfileContactEditModel";
import ReferralModule from "../MainProfileBox/Referral";
const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];

const NewNewProfileMobile = ({ data }) => {
  const Locator = useLocation();
  const locator = useLocation();
  const [profilepic, setprofilepic] = useState(0);
  const [logout, setLogout] = useState(0);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [userDetails, setuserDetails] = useState({});
  const [opencollege, setOpencollege] = useState(false);
  const [openbranch, setOpenbranch] = useState(false);
  const [openstate, setOpenstate] = useState(false);
  const [openemail, setOpenemail] = useState(false);
  const [display1, setdisplay1] = useState(false);
  const [display2, setdisplay2] = useState(false);
  const [display3, setdisplay3] = useState(false);

  useEffect(() => {
    setuserDetails(data);
  }, [data]);

  const deleteUserImage = () => {
    const obj = {
      user_id: userDetails.user_id,
    };
    axios
      .post("https://api2.thomso.in/apiV1/delete_user_image", obj)
      .then((res) => {
        fetchUser();
        // setLoading(false);
        // setShowModal(false);
        window.location.reload(false);
      })
      .catch((error) => {
        // setLoading(false);
        console.log(error);
      });
  };

  const OpenCollege = () => {
    setOpencollege(!opencollege);
  };
  const OpenBranch = () => {
    setOpenbranch(!openbranch);
  };
  const OpenState = () => {
    setOpenstate(!openstate);
  };
  const OpenEmail = () => {
    setOpenemail(!openemail);
  };

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("Userobj");
    setLogout(!logout);
    window.location.pathname = "/";
  }

  const changeHandler = async (file) => {
    const userId = userDetails?.user_id;
    let formData = new FormData();
    formData.append("college_id", file);
    setLoading(true);

    if (file.size > 819200) {
      message.warning("Size is too large. Size must be less than 800KB");
      setFile(null);
      setLoading(false);
      return false;
    } else {
      message.success("File successfully selected");
      // window.location.reload(false);
    }
    const response = await axios.put(
      `https://api2.thomso.in/apiV1/registeruser/${userId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.status === 200) {
      setFile(file);
      fetchUser();
      setLoading(false);
      window.location.reload(false);
      // window.location.reload(true);
    } else {
      setLoading(false);
      message.error("something went wrong while uploading, please reupload");
      setFile(null);
    }
  };

  const changeHandler1 = async (file) => {
    const userId = userDetails?.user_id;
    let formData = new FormData();
    formData.append("avtar", file);
    // setprofilepic(true);

    if (file.size > 512000) {
      message.warning("size is too large.Size must be less than 500KB");
      setprofilepic(null);
      return false;
    } else {
      message.success("file successfully selected");
      setprofilepic(true);
    }
    const response = await axios.put(
      `https://api2.thomso.in/apiV1/registeruser/${userId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.status == 200) {
      // setprofilepic(true);
      fetchUser();
      setLoading(false);
      window.location.reload(false);
    } else {
      setLoading(false);
      message.error("something went wrong while uploading, please reupload");
      setprofilepic(null);
    }
  };

  return (
    <div
      className="new-mob-profile"
      style={{ height: "81vh", overflowY: "hidden", overflowX: "hidden",backdropFilter:"blur(2px)",border:"2px solid #555",borderRadius:"5px" }}
    >
      {loading && <Loader />}
      <div className="mpb-mobileview">
        <div className="mv-top">
          <div className="mv-top-2">
            <Link
              to="/profile"
              className={
                Locator.pathname === "/profile" ? "nav-active" : "nav-passive"
              }
            >
              <img src={icon1} alt="profile" className="img--1" />
              Profile
            </Link>
          </div>
          {userDetails?.is_iitr_alumn ? null : (
            <div className="mv-top-2">
              <Link
                to="/pevents"
                className={
                  Locator.pathname === "/pevents" ? "nav-active" : "nav-passive"
                }
              >
                <img src={icon2} alt="Events" className="img--1" />
                Events
              </Link>
            </div>
          )}
          {userDetails?.is_iitr_alumn ? (
            <div className="mv-top-2">
              <img src={icon3} alt="payment" className="img--1" />
              <Link
                to="/payment-alumn"
                className={
                  Locator.pathname === "/payment-alumn"
                    ? "nav-active"
                    : "nav-passive"
                }
              >
                Payment
              </Link>
            </div>
          ) : (
            <div className="mv-top-2">
              <Link
                to="/payment"
                className={
                  Locator.pathname === "/payment" ? "nav-active" : "nav-passive"
                }
              >
                <img src={icon3} alt="payment" className="img--1" />
                Payment
              </Link>
            </div>
          )}
        </div>
        <div className="mpb-line1" />
      </div>
      <div className="mainscroll">
      <div
        className={
          locator.pathname === "/payment" || locator.pathname === "/pevents"
            ? "paymentmobpage lsp-pic-1"
            : "lsp-pic-1"
        }
      >
        <div id="profile_mob_cover">
          <p id="mob_upload_pic">
            {" "}
            <FileUploader
            style={{display:"flex",flexDirection:"column",justifyContent:"center"}}
              type="file"
              types={fileTypes}
              handleChange={changeHandler1}
              accept="image/jpeg, image/png"
              className="fileupload-mob-profile"
            >
              <img
                className="lsp-img11"
                src={userDetails?.avtar ? userDetails?.avtar : pic}
                alt="profilepic"
              />
              <div className="lsp-text0">
                {userDetails?.avtar ? "Change Profile" : "Upload Profile"}
              </div>
            </FileUploader>
          </p>
        </div>
        <div className="mob-lt1">
          {/* {display1 && <ProfileNameEditModel />} */}
          <span className="lsp-text1">
            {userDetails?.name}
            {userDetails?.is_ca ? "(CA)" : ""}
            {/* <BiEdit
              size={20}
              style={{ cursor: "pointer" }}
              onClick={() => {
                setdisplay1(true);
              }}
            /> */}
          </span>
          <span className="lsp-text2">{userDetails?.thomso_id}</span>
          {userDetails?.is_ca && (
            <span className="lsp-text2">
              CA ID : {userDetails?.ca_thomso_id}
            </span>
          )}
        </div>
      </div>
      <div
        className={
          locator.pathname === "/paymentbox" || locator.pathname === "/eventbox"
            ? "paymentmobpage main-prof-box"
            : "main-prof-box"
        }
      >
        <div
          className={
            locator.pathname === "/payment" || locator.pathname === "/pevents"
              ? "main-box-center-event-payment"
              : "main-prof-box-flex-1"
          }
        >
          <div className="main-prof-detail-1">
            <div className="main-prof-box-head-div">
              <h1 className="main-prof-box-head-text1">College Details</h1>
            </div>
            <div className="main-prof-box-details-div">
              <div className="main-prof-box-detail-row">
                <span className="main-prof-box-detail-row-text">College</span>
                <span
                  className={
                    !opencollege
                      ? "main-prof-box-detail-row-text-col"
                      : "main-prof-box-detail-row-text-col-2"
                  }
                  onClick={OpenCollege}
                >
                  {userDetails?.college}
                </span>
              </div>
              <div className="main-prof-box-detail-row">
                <span className="main-prof-box-detail-row-text">City</span>
                <span className="main-prof-box-detail-row-text-col">
                  {userDetails?.city}
                </span>
              </div>
              <div className="main-prof-box-detail-row">
                <span className="main-prof-box-detail-row-text">State</span>
                <span
                  className={
                    !openstate
                      ? "main-prof-box-detail-row-text-col"
                      : "main-prof-box-detail-row-text-col-2"
                  }
                  onClick={OpenState}
                >
                  {userDetails?.state}
                </span>
              </div>
              <div className="main-prof-box-detail-row">
                <span className="main-prof-box-detail-row-text">Degree</span>
                <span
                  className={
                    !openbranch
                      ? "main-prof-box-detail-row-text-col"
                      : "main-prof-box-detail-row-text-col-2"
                  }
                  onClick={OpenBranch}
                >
                  {userDetails?.branch}
                </span>
              </div>
              {userDetails?.is_iitr_alumn ? (
                <div className="main-prof-box-detail-row">
                  <span className="main-prof-box-detail-row-text">
                    Graduation Year
                  </span>
                  <span className="main-prof-box-detail-row-text-col">
                    {" "}
                    {userDetails?.graduation_year}
                  </span>
                </div>
              ) : (
                <div className="main-prof-box-detail-row">
                  <span className="main-prof-box-detail-row-text">Year</span>
                  <span className="main-prof-box-detail-row-text-col">
                    {" "}
                    {userDetails?.year}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="main-prof-detail-2">
            <div className="main-prof-box-head-div">
              <h1 className="main-prof-box-head-text1">Personal Details</h1>
            </div>
            <div className="main-prof-box-details-div">
              <div className="main-prof-box-detail-row">
                <span className="main-prof-box-detail-row-text">Email</span>
                <span
                  className={
                    !openemail
                      ? "main-prof-box-detail-row-text-col"
                      : "main-prof-box-detail-row-text-col-2"
                  }
                  onClick={OpenEmail}
                >
                  {userDetails?.email}
                </span>
              </div>
              <div className="main-prof-box-detail-row">
                <span className="main-prof-box-detail-row-text">Contact</span>
                <span className="main-prof-box-detail-row-text-col">
                  {userDetails?.contact}
                </span>
                <BiEdit
                  color="white"
                  size={20}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setdisplay2(true);
                  }}
                />
              </div>
              {display2 && <ProfileContactEditModel />}
              <div className="main-prof-box-detail-row">
                <span className="main-prof-box-detail-row-text">Gender</span>
                <span className="main-prof-box-detail-row-text-col">
                  {userDetails?.gender}
                </span>
              </div>
            </div>
            {userDetails?.is_ca === false && (
              <div className="main-prof-box-flex-2">
                <div className="flex-2-title">CA-Referral</div>
                <div className="main-prof-box-details-div">
                  <div className="main-prof-box-detail-row ca-ref-box">
                    <span className="main-prof-box-detail-row-text">
                      CA-Referral
                    </span>
                    <span className="main-prof-box-detail-row-text-col">
                      {display3 && <ReferralModule />}
                      {userDetails?.ca_thomso_id}
                      {userDetails?.ca_thomso_id === null && (
                        <>
                          <BiEdit
                            size={20}
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setdisplay3(true);
                            }}
                          />
                        </>
                      )}
                    </span>
                  </div>
                  <div className="main-prof-box-detail-row">
                    <span className="main-prof-box-detail-row-text">Name</span>
                    <span className="main-prof-box-detail-row-text-col">
                      {userDetails?.ca_name}
                    </span>
                  </div>
                  <div className="main-prof-box-detail-row">
                    <span className="main-prof-box-detail-row-text">
                      Phone Number
                    </span>
                    <span className="main-prof-box-detail-row-text-col">
                      {userDetails?.ca_contact}
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div className="main-prof-box-flex-2">
              <div className="flex-2-title">College ID</div>
              <div className="upload-doc-container">
                {userDetails?.college_id ? (
                  <p className="mpb-text">Document Uploaded</p>
                ) : (
                  <p className="mpb-text">Upload document to verify</p>
                )}
              </div>
              {userDetails?.college_id ? (
                <div style={{ paddingTop: "10px", paddingRight: "50px" }}>
                  <img
                    src={userDetails?.college_id}
                    style={{ width: "100%" }}
                  />
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      margin: "10px 0px",
                    }}
                  >
                    <button className="delete-but" onClick={deleteUserImage}>
                      <label className="drag-3-box">
                        <span className="delete-3">
                          <RiDeleteBin6Line style={{ paddingRight: "3px" }} />{" "}
                          Delete
                        </span>
                      </label>
                    </button>
                  </div>
                </div>
              ) : (
                <FileUploader
                  type="file"
                  types={fileTypes}
                  className="drag-3-input"
                  handleChange={changeHandler}
                >
                  <button className="drag-but">
                    <label className="drag-3-box">
                      <span className="drag-3">Browse File</span>
                    </label>
                  </button>
                </FileUploader>
              )}
              {file && <div style={{ color: "white" }}>{file.name}</div>}
            </div>
            <button
              className="main-logout-btn"
              onClick={() => setLogout(!logout)}
            >
              <img src={log} alt="log" />
              <span>Logout</span>
            </button>
            <div className={!logout ? "none" : ""} id="logout">
              <div className="l_body">
                <div className="logout_body">
                  <div className="redpic">
                    <img src={cs1} alt="redpic" />
                  </div>
                  <div className="textt">
                    <div className="fText">Are You Sure?</div>
                    <div className="sText">
                      Do you really want to leave and logout?
                    </div>
                  </div>
                  <div className="btns">
                    <button className="btn1">
                      <span
                        onClick={() => {
                          setLogout(!logout);
                        }}
                      >
                        Cancel
                      </span>
                    </button>
                    <button className="btn2" onClick={handleLogout}>
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  let userDetails = state.user.user;
  return {
    userDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: (params) => dispatch(fetchUser(params)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNewProfileMobile);
