import React, { useState, useEffect } from "react";
import "./mainprofilebox.css";
import drag from "../../../assets/drag.svg";
import log from "../../../assets/logout-logo.svg";
import line from "../../../assets/line1.svg";
import { connect } from "react-redux";
// import Alert from "@mui/material/Alert";
import cs1 from "../../../assets/CautionSign1.svg";
import { FileUploader } from "react-drag-drop-files";
import "./LogoutModel.css";
import "../LeftSideProfile/leftsideprofile.css";
import "../Profile/Profile.css";
import { message } from "antd";
import axios from "axios";
// import { Button } from "@mui/material";
import { CgClose } from "react-icons/cg";
// import DeleteModule from "./DeleteModule";
import Loader from "../../Loader/Loader";
import { RiDeleteBin6Line } from "react-icons/ri";
import { fetchUser } from "../../User/UserActions";
import { useLocation, Link,useNavigate } from "react-router-dom";
import pic from "../../../assets/profile1.png.jpg";
import icon1 from "../../../assets/icon1.png";
import icon2 from "../../../assets/events.svg";
import icon3 from "../../../assets/payment.svg";
import ProfileNameEditModel from "./ProfileNameEditModel";
import ProfileContactEditModel from "./ProfileContactEditModel";
import { BiEdit } from "react-icons/bi";
import ReferralModule from "./Referral";
const fileTypes = ["JPG", "PNG", "GIF"];

const MainProfileBox = ({ data }) => {
  const [logout, setLogout] = useState(0);
  const [file, setFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [profilepic, setprofilepic] = useState(false);
  const [loading, setLoading] = useState(false);
  const [opencollege, setOpencollege] = useState(false);
  const [openbranch, setOpenbranch] = useState(false);
  const [openstate, setOpenstate] = useState(false);
  const [openemail, setOpenemail] = useState(false);
  const locator = useLocation();
  const [userDetails, setuserDetails] = useState({});
  const [docup, setDocup] = useState(false);
  const [user, setuser] = useState({});
  const [display1, setdisplay1] = useState(false);
  const [display2, setdisplay2] = useState(false);
  const [display3, setdisplay3] = useState(false);
  useEffect(() => {
    setuserDetails(data);
  }, [data]);

  useEffect(() => {
    fetchUser();
  });
  const navigate=useNavigate();

  // const cadeta = () => {
  //   ca_id = userDetails?.referred_by_id;
  //   const response = axios.get(`/apiV1/registerca/${localStorage.getItem(ca_id)}`);
  //   const { data } = response;
  //     console.log(data);
  //     setuser(data);
  // }

  // console.log(userDetails, "profiledetails");

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
      message.error("Something went wrong while uploading, please reupload");
      setFile(null);
    }
  };

  const changeHandler1 = async (file) => {
    // setprofilepic(false);
    const userId = userDetails?.user_id;
    let formData = new FormData();
    formData.append("avtar", file);
    // console.log(formData);
    // setprofilepic(true);

    if (file.size > 2048000) {
      message.warning("Size is too large.Size must be less than 2MB");
      setprofilepic(null);
      return false;
    } else {
      message.success("File successfully selected");
      setprofilepic(true);
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
      // setprofilepic(true);
      fetchUser();
      setLoading(false);
      window.location.reload(false);
    } else {
      setLoading(false);
      message.error("Something went wrong while uploading, please reupload");
      setprofilepic(null);
    }
  };

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("id");
    localStorage.removeItem("state");
    // localStorage.removeItem("Userobj");
    setLogout(!logout);
    // window.location.pathname = "/";
    navigate('/');
  }

  function handleFileDelete() {
    setFile(null);
    setShowModal(false);
  }

  return (
    <>
      <div className="lsp-background">
        <div className="lsp-box">
          <div className="lsp-pic">
            <div>
              <FileUploader
                type="file"
                types={fileTypes}
                handleChange={changeHandler1}
                accept="image/jpeg, image/png, image/jpg"
              >
                <img
                  className="lsp-img1"
                  src={userDetails?.avtar ? userDetails?.avtar : pic}
                  alt="profilepic"
                />
                <div className="lsp-text0">
                  {userDetails?.avtar ? "Change Profile" : "Upload Profile"}
                </div>
              </FileUploader>
            </div>
            <span className="lsp-text1">
              {display1 && <ProfileNameEditModel />}
              {userDetails?.name} {userDetails?.is_ca ? "(CA)" : ""}
              {/* <BiEdit
                size={20}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setdisplay1(true);
                }}
              /> */}
            </span>
            <span className="lsp-text2">
              Thomso ID : {userDetails?.thomso_id}
            </span>
            {userDetails?.is_ca && (
              <span className="lsp-text2">
                CA ID : {userDetails?.ca_thomso_id}
              </span>
            )}
          </div>
          <div>
            {userDetails?.username}
            {userDetails?.thomso_id}
            {/* {userDetails?.is_ca && {userDetails}} */}
          </div>
          <div className="lsp-centre">
            <div className="lsp-c1">
              <img src={icon1} alt="icon1" />
              <Link
                to="/profile"
                className={
                  locator.pathname === "/profile" ? "c1-text" : "c2-text"
                }
              >
                Profile
              </Link>
            </div>
            {!userDetails?.is_iitr_alumn && (
              <div className="lsp-c2">
                <img src={icon2} alt="icon2" />
                <Link
                  to="/pevents"
                  className={
                    locator.pathname === "/eventbox" ? "c1-text" : "c2-text"
                  }
                >
                  My Events
                </Link>
              </div>
            )}
            {userDetails?.is_iitr_alumn ? (
              <div className="lsp-c3">
                <img src={icon3} alt="icon3" />
                <Link
                  to="/payment-alumn"
                  className={
                    locator.pathname === "/paymentbox" ? "c1-text" : "c2-text"
                  }
                >
                  Payment
                </Link>
              </div>
            ) : (
              <div className="lsp-c3">
                <img src={icon3} alt="icon3" />
                <Link
                  to="/payment"
                  className={
                    locator.pathname === "/payment" ? "c1-text" : "c2-text"
                  }
                >
                  Payment
                </Link>
              </div>
            )}
            <button
              className="main-logout-btn"
              onClick={() => setLogout(!logout)}
            >
              <img src={log} alt="log" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="c-line1">
        <img className="c-line1-img" src={line} alt="line" />
      </div> */}
      {loading && <Loader />}
      <div className="main-prof-box">
        <div className="main-prof-box-flex-1">
          <div className="main-prof-detail-1">
            <div className="main-prof-box-head-div">
              <h1 className="main-prof-box-head-text">College Details</h1>
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
                <span className="main-prof-box-detail-row-text">Branch</span>
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
                    {userDetails?.graduation_year}
                  </span>
                </div>
              ) : (
                <div className="main-prof-box-detail-row">
                  <span className="main-prof-box-detail-row-text">Year</span>
                  <span className="main-prof-box-detail-row-text-col">
                    {userDetails?.year}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="main-prof-detail-2">
            <div className="main-prof-box-head-div">
              <h1 className="main-prof-box-head-text">Personal Details</h1>
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
              <div className="main-prof-detail-2">
                <div className="main-prof-box-head-div">
                  <h1 className="main-prof-box-head-text">CA Referral</h1>
                </div>
                <div className="main-prof-box-details-div">
                  <div className="main-prof-box-detail-row">
                    <span className="main-prof-box-detail-row-text">
                      CA-Referral-ID
                    </span>
                    <span
                      className={
                        !openemail
                          ? "main-prof-box-detail-row-text-col"
                          : "main-prof-box-detail-row-text-col-2"
                      }
                      onClick={OpenEmail}
                    >
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
                      Phone number
                    </span>
                    <span className="main-prof-box-detail-row-text-col">
                      {userDetails?.ca_contact}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="c-line">
          <img className="c-line1-img" src={line} alt="line" />
        </div>
        <div className="main-prof-box-flex-2">
          <div className="flex-2-title">College ID</div>
          {userDetails?.college_id ? (
            <div style={{ paddingTop: "10px", paddingRight: "50px" }}>
              <img src={userDetails?.college_id} style={{ width: "50%" }} alt="essr" />
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
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
            <div className="upload-doc-container">
              {file ? (
                <>
                <p className="mpb-text">Document Uploaded</p>
                {/* <p className="mpb-text">Bring College Id card with you for registration verification.</p> */}
                </>
              ) : (
                <>
                <p className="mpb-text">Upload document to verify</p>
                {/* <p className="mpb-text">Bring College Id card with you for registration verification.</p> */}
                </>
              )}
              {/* <p className="mpb-text">Document Uploaded</p> */}
              {file ? (
                <div className="after-upload-container">
                  {file.name}
                  <CgClose
                    onClick={() => setShowModal(true)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              ) : (
                <FileUploader
                  type="file"
                  types={fileTypes}
                  className="drag-3-input"
                  handleChange={changeHandler}
                >
                  <div className="mpb-drop">
                    <img src={drag} alt="drag & drop" />
                    <span className="drag-1">Drag and Drop file here</span>
                    <span className="drag-2">or</span>
                    <button className="drag-but">
                      <label className="drag-3-box">
                        <span className="drag-3">Browse File</span>
                      </label>
                    </button>
                  </div>
                </FileUploader>
              )}
              {/* <Button variant="contained" component="label">
              Upload File
              <input type="file" hidden onChange={changeHandler} />
            </Button> */}
            </div>
          )}
        </div>
      </div>
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
      <div className={!showModal ? "none" : ""} id="logout">
        <div className="l_body">
          <div className="logout_body">
            <div className="redpic">
              <img src={cs1} alt="redpic" />
            </div>
            <div className="textt">
              <div className="fText">Are You Sure?</div>
              <div className="sText">
                Do you really want to delete the file?
              </div>
            </div>
            <div className="btns">
              <button className="btn1">
                <span
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  Cancel
                </span>
              </button>
              <button className="btn2" onClick={handleFileDelete}>
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
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
    fetchUser: (params) => dispatch(fetchUser(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainProfileBox);
