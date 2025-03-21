import React, {useState, useEffect} from "react";
import "../Profile/Profile.css";
import "./Paymentbox.css";
import "../LeftSideProfile/leftsideprofile.css";
import log from "../../../assets/logout-logo.svg";
import cs1 from "../../../assets/CautionSign1.svg";
import MainProfileBox from "../MainProfileBox/MainProfileBox";
import NewNewProfileMobile from "../MobProfile/NewNewProfileMobile";
import {json, useNavigate} from "react-router-dom";
import axios from "axios";
import {connect} from "react-redux";
import Navbar from "../../EventsNavbar/Eventsnavbar";
import Back from "../../../assets/profileback.webp";
import Back1 from "../../../assets/profilebackmob.webp";
import {useLocation, Link} from "react-router-dom";
import pic from "../../../assets/profile1.png.jpg";
import icon1 from "../../../assets/profile.svg";
import Closed3 from "../../../assets/PaymentClosedGirls.png";
import Closed from "../../../assets/paymenttempgirl.png";
import Closed1 from "../../../assets/tempclosed.png";
import icon2 from "../../../assets/events.svg";
import icon3 from "../../../assets/pay_black.png";
import icon31 from "../../../assets/payment.svg";
import line from "../../../assets/line1.svg";
// import paymentcenterpic from "../../../assests/paymentpic.webp";
import PaymentSuccess from "./PaymentSuccess";
// import paymentlive from "../../../assets/pplive.webp";
// import { useHistory } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import payment from "./pay.svg";
import {AiFillCaretDown} from "react-icons/ai";
import {IoMdClose} from "react-icons/io";
import {BiRupee} from "react-icons/bi";
import SuccessPaymentPage from "./index";
import "./MobilePaymentBox.css";
import {MdDelete} from "react-icons/md";
import {message} from "antd";
import {clear} from "@testing-library/user-event";
import Loader from "../../Loader/Loader"

const NewPaymentBox = (
    data,
    events,
    participant_id,
    paymentstatus,
    is_female,
    is_payment = false
) => {
    const navigate = useNavigate();
    const [logout, setLogout] = useState(0);
    const [userDetails, setuserDetails] = useState({});
    const [config, SetConfig] = useState({});
    // console.log(data, "amount");

    useEffect(() => {
        get_master_config();
        getData();
    }, []);

    useEffect(() => {
        setLoading(true);
        if (!localStorage.getItem("token") || !localStorage.getItem("user_id")) {
            navigate(`/login`);
        } else {
            setLoading(false);
        }
    });

    const get_master_config = async () => {
        const ress = axios
            .get(`https://api2.thomso.in/apiV1/payment_master`)
            .then((ress) => {
                data = ress.data;
                console.log(data,"hfh")
                SetConfig(data[0]);
                // console.log(data[0], "acco close");
                if (data[0].all_acco_close == true) {
                    setacco(false);
                    setStyle1({background: "white", color: "black"});
                    setStyle2({background: "transparent", color: "white"});
                }
                else if(data[0].all_acco_close==false){
                    data[0].all_acco_close=true;
                    setacco(false);
                    setStyle1({background: "white", color: "black"});
                    setStyle2({background: "transparent", color: "white"});
                }
                else if(data[0].all_payment_close==false){
                    data[0].all_payment_close=true;
                }
                
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // console.log(config, "config");

    const getData = async () => {
        setLoading(true);
        const ress = axios
            .get(`https://api2.thomso.in/apiV1/current_user_participant`)
            .then((ress) => {
                setLoading(false);
                setuserDetails(ress.data);
                console.log("payment__", paymentData)
                if (paymentData.length == 0) {
                    var temp = paymentData;
                    temp.push({id: ress.data?.thomso_id, acco: acco1.toString()});
                    setPaymentData(temp);
                    var temp1 = paymentData1;
                    temp1.push({
                        id: ress.data?.thomso_id,
                        acco: acco1.toString(),
                        gender: ress.data?.gender,
                    });
                    setPaymentData1(temp1);
                }
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    };

    // console.log(userDetails, "userdetails");

    function handleLogout() {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("Userobj");
        setLogout(!logout);
        window.location.pathname = "/";
    }

    const Locator = useLocation();

    const ON = {
        background: "white",
        color: "black",
    };

    const OFF = {
        background: "transparent",
        color: "white",
    };

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [loading, setLoading] = useState(false);
    const [eventArray, seteventArray] = useState([]);
    const [acco, setacco] = useState(
        userDetails?.gender == "Female" ? true : null
    );
    const [teamevent, setTeamEvent] = useState(null);
    const [selectedOption, setSelectedOption] = useState("Select Event");
    const [selectedOption2, setSelectedOption2] = useState("Select Event");
    const [selectedOption3, setSelectedOption3] = useState("Select Event");
    const toggling = () => setIsOpen(!isOpen);
    const toggling2 = () => setIsOpen2(!isOpen2);
    const toggling3 = () => setIsOpen3(!isOpen3);
    const [paymentLive, setPaymentLive] = useState(false);
    const [paying, setPaying] = useState(false);
    const [addpar, setAddpar] = useState(false);
    // const [submitid, setSubmitid] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [male, setMale] = useState("");
    const [paymentData, setPaymentData] = useState([]);
    const [paymentData1, setPaymentData1] = useState([]);
    const [acco1, setAcco1] = useState("true");
    const [agree, setAgree] = useState(false);

    // console.log(paymentData1, "paymentData1");
    // console.log(paymentData, "paymentData");

    const [style1, setStyle1] = useState({
        background: "transparent",
        color: "white",
    });
    const [style2, setStyle2] = useState(is_female ? ON : OFF);
    const [totalpay, setTotalpay] = useState(0);
    // console.log(totalpay);
    // const [totalpay, setTotalpay] = useState(0);

    const handleDataNo = () => {
        var temp = paymentData;
        temp.push({id: inputValue, acco: "false"});
        setPaymentData(temp);
        var temp1 = paymentData1;
        temp1.push({id: inputValue, acco: "false", gender: "Male"});
        setPaymentData1(temp1);
        let amount = 0;
        for (let i = 0; i < paymentData1.length; i++) {
            if (paymentData1[i].acco == "true") {
                amount = amount + config.max_amount + config.tax;
            } else if (paymentData1[i].acco == "false") {
                amount = amount + config.min_amount + config.tax;
            }
        }
        setTotalpay(amount);
        // console.log(amount,"amount");
        // setTotalpay(() => totalpay + config.min_amount + config.tax);
        clearthomsoid();
    };

    const handleDataYes = () => {
        var temp = paymentData;
        temp.push({id: inputValue, acco: "true"});
        setPaymentData(temp);
        var temp1 = paymentData1;
        temp1.push({id: inputValue, acco: "true", gender: "Male"});
        setPaymentData1(temp1);
        let amount = 0;
        for (let i = 0; i < paymentData1.length; i++) {
            if (paymentData1[i].acco == "true") {
                amount = amount + config.max_amount + config.tax;
            } else if (paymentData1[i].acco == "false") {
                amount = amount + config.min_amount + config.tax;
            }
        }
        setTotalpay(amount);
        // console.log(amount,"amount");
        // setTotalpay(() => totalpay + config.max_amount + config.tax);
        clearthomsoid();
    };

    const noAccommdation = () => {
        setacco(false);
        // console.log(acco1, "accoNO");
        setStyle1({background: "white", color: "black"});
        setStyle2({background: "transparent", color: "white"});
    };

    const Accommdation = () => {
        setacco(true);
        // console.log(acco1, "accoYES");
        setStyle2({background: "white", color: "black"});
        setStyle1({background: "transparent", color: "white"});
    };

    const onChangeInput = (index, value) => {
        let a = [...eventArray];
        a[index]["team_name"] = value;
        seteventArray(a);
    };

    const checkPayNow = () => {
        // console.log("HERE");
        if (acco == null) {
            return false;
        } else {
            return true;
        }
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const clearthomsoid = () => {
        setInputValue("");
    };

    async function checkInputExists(input) {
        setLoading(true);
        let obj1 = {
            id: input,
        };
        try {
            await axios.get(`https://api2.thomso.in/apiV1/controls_get_participant?participant_id=${input}`).then(async(res) => {
                if (!res.data.payment) {
                    try {
                        const response = await axios.post(
                            `https://api2.thomso.in/apiV1/verify_thomso_id`,
                            obj1
                        );
                        const u = response.data;
                        // console.log("data", u);
                        setLoading(false);
                        if (
                            u.status == "true" &&
                            u.gender == "Female" &&
                            config.girls_payment_close == false &&
                            !config.all_acco_close
                        ) {
                            var temp = paymentData;
                            temp.push({id: input, acco: "true"});
                            setPaymentData(temp);
                            var temp1 = paymentData1;
                            temp1.push({id: input, acco: "true", gender: u.gender});
                            setPaymentData1(temp1);
                            let amount = 0;
                            for (let i = 0; i < paymentData1.length; i++) {
                                if (paymentData1[i].acco == "true") {
                                    amount = amount + config.max_amount + config.tax;
                                } else if (paymentData1[i].acco == "false") {
                                    amount = amount + config.min_amount + config.tax;
                                }
                            }

                            setTotalpay(amount);
                            // console.log(amount,"amount");
                            setGenderr(u.gender);
                            setAddpar(!addpar);
                            // setTotalpay(() => totalpay + config.max_amount + config.tax);
                            clearthomsoid();
                        }

                        if (u.status === "true" && config.all_acco_close) {
                            if (u.gender == "Female") {
                                message.info("Payment for Girls will start soon");
                                setAddpar(!addpar);
                            } else {
                                var temp = paymentData;
                                temp.push({id: input, acco: "false"});
                                setPaymentData(temp);
                                var temp1 = paymentData1;
                                temp1.push({id: input, acco: "false", gender: u.gender});
                                setPaymentData1(temp1);
                                let amount = 0;
                                for (let i = 0; i < paymentData1.length; i++) {
                                    if (paymentData1[i].acco == "true") {
                                        amount = amount + config.max_amount + config.tax;
                                    } else if (paymentData1[i].acco == "false") {
                                        amount = amount + config.min_amount + config.tax;
                                    }
                                }
                                setTotalpay(amount);
                                setGenderr(u.gender);
                                setAddpar(!addpar);
                                clearthomsoid();
                            }
                        }

                        if (config.girls_payment_close == true && u.gender == "Female") {
                            message.info("Payment for Girls will start soon");
                        }

                        if (u.status == "false") {
                            message.error("Invalid Thomso id");
                        }

                        if (u.status == "true" && u.gender == "Male") {
                            setMale("Male");
                            setGenderr("Male");
                        }

                    } catch (error) {
                        console.error("Error checking input:", error);
                        // throw error;
                        message.error("Thomso ID not found");
                        // return false;
                    }
                }
                else{
                    message.error("Payment for this user is completed!")
                }
            })
        } catch (err) {
            console.log(err)
        }

    }

    const [genderr, setGenderr] = useState("Female");
    const [paracco, setParacco] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    // useEffect(() => {
    //   return () => {
    //     if (isChecked == true) {
    //       setParacco(true);
    //     }
    //   };
    // });

    const handleCheckboxChange = (event) => {
        // Update the state based on the checkbox's checked property
        setIsChecked(event.target.checked);
        if (isChecked == true) {
            setParacco(true);
        }
    };

    const paynow = () => {
        setLoading(true);
        setTotalpay(
            acco1 == "true"
                ? config.max_amount + config.tax
                : config.min_amount + config.tax
        );
        let data1 = paymentData1;
        data1[0].acco = acco1;
        setPaymentData(data1);

        let data = paymentData;
        data[0].acco = acco1;
        setPaymentData(data);

        setPaying(true);
        setLoading(false);
    };

    const paynow_non_acco = () => {
        setLoading(true);
        setTotalpay(config.min_amount + config.tax);
        let data1 = paymentData1;
        data1[0].acco = "false";
        setPaymentData(data1);

        let data = paymentData;
        data[0].acco = "false";
        setPaymentData(data);

        setPaying(true);
        setLoading(false);
    };


    // var windowReference = window.open();
    async function makePayment() {
        setLoading(true);

        try {
            const response = await axios.post(
                `https://api2.thomso.in/apiV1/participant_payment`,
                paymentData
            );
            const u = response.data;
            // console.log("data", response.data);
            if (response.data.status == "true") {
                // window.open(`${response.data.payment_url}`, "_blank");
                // windowReference.location = response.data.payment_url;
                setTimeout(() => {
                    window.open(response.data.payment_url, '_blank');
                })
            } else {
                message.error(`${response.data.error}`);
            }
            setLoading(false);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    const deletePayment = (id) => {
        setLoading(true);
        let amount = totalpay;
        let amount_delete = paymentData1;
        // console.log(amount_delete, "amount_delete");
        amount_delete = amount_delete?.filter((item) => item.id == id);
        // console.log(amount_delete, "amount_delete");
        if (amount_delete[0].acco == "true") {
            amount = amount - config.max_amount - config.tax;
        } else if (amount_delete[0].acco == "false") {
            amount = amount - config.min_amount - config.tax;
        }
        setTotalpay(amount);

        let data1 = paymentData1;
        data1 = data1?.filter((item) => item.id != id);
        setPaymentData1(data1);

        let data = paymentData;
        data = data?.filter((item) => item.id != id);
        setPaymentData(data);
        setLoading(false);

        // let amount = 0
        // for(let i=0;i<paymentData1.length;i++){
        //   if(paymentData1[i].acco == "true"){
        //     amount =amount+ config.max_amount + config.tax;
        //   }else if(paymentData1[i].acco == "false"){
        //     amount =amount+ config.min_amount + config.tax;
        //   }
        // }
        // setTotalpay(amount);

        if (paymentData1.length == 0) {
            setTotalpay(0);
        }
    };

    const locator = useLocation();

    const AccomodationCondition = () => {
        if ((userDetails?.gender == "Male" || userDetails?.gender == "Others") && (config.all_acco_close)) {
            return <div
                className="Payleft-right"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "20px",
                }}
            >
                <>
                    <p className="Payevent">
                        Accomodation is full now, only get ticket for non accomodation
                        (* Accommodation Compulsory for Female)
                    </p>
                    <div className="agree-terms-and-conditions">
                        <input
                            className="agree-checkbox"
                            style={{cursor: "pointer"}}
                            type="checkbox"
                            checked={agree}
                            onChange={(e) => setAgree(!agree)}
                            required
                        />
                        <a
                            className="agree-a"
                            style={{
                                color: "white",
                                cursor: "pointer",
                            }}
                            href="https://drive.google.com/file/d/10pYZiG7enMSYHwjSYv-fTvTJkgLPNtJL/view?usp=sharing"
                            target="_blank"
                        >
                            Agree Terms and Conditions *
                        </a>
                    </div>

                    {checkPayNow() == true && agree == true ? (
                        <button
                            className="PayNowBtnActive"
                            onClick={paynow_non_acco}
                        >
                            {loading ? (
                                <CircularProgress
                                    color="inherit"
                                    size={20}
                                />
                            ) : (
                                "Pay Now"
                            )}
                        </button>
                    ) : (
                        <button
                            onClick={() => {
                                message.info(
                                    "Please agree terms and conditions"
                                );
                            }}
                            className="PayNowBtn"
                        >
                            Pay Now
                        </button>
                    )}
                </>
            </div>
        } else if (userDetails?.gender == "Male" || userDetails?.gender == "Others") {
            return <div
                className="Payleft-right"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "20px",
                }}
            >
                <>
                    <p className="Payevent">
                        Are you going to take Accommodation in IITR?
                        (* Accommodation Compulsory for Female)
                    </p>
                    <div
                        className="yesNo"
                        style={{opacity: is_female ? "0.5" : "1"}}
                    >
                        <button
                            className="yesbtn"
                            disabled={is_female}
                            onClick={() => {
                                setAcco1("true");
                                Accommdation();
                            }}
                            style={style2}
                        >
                            Yes
                        </button>
                        <button
                            className="nobtn"
                            disabled={is_female}
                            onClick={() => {
                                setAcco1("false");
                                noAccommdation();
                            }}
                            style={style1}
                        >
                            No
                        </button>
                    </div>
                    <div className="agree-terms-and-conditions">
                        <input
                            className="agree-checkbox"
                            style={{cursor: "pointer"}}
                            type="checkbox"
                            checked={agree}
                            onChange={(e) => setAgree(!agree)}
                            required
                        />
                        <a
                            className="agree-a"
                            style={{
                                color: "white",
                                cursor: "pointer",
                            }}
                            href="https://drive.google.com/file/d/10pYZiG7enMSYHwjSYv-fTvTJkgLPNtJL/view?usp=sharing"
                            target="_blank"
                        >
                            Agree Terms and Conditions *
                        </a>
                    </div>

                    {checkPayNow() == true && agree == true ? (
                        <button
                            className="PayNowBtnActive"
                            onClick={paynow}
                        >
                            {loading ? (
                                <CircularProgress
                                    color="inherit"
                                    size={20}
                                />
                            ) : (
                                "Pay Now"
                            )}
                        </button>
                    ) : (
                        <button
                            onClick={() => {
                                if (agree == true) {
                                    message.info(
                                        "Please select one accomodation option"
                                    );
                                } else {
                                    message.info(
                                        "Please agree terms and conditions"
                                    );
                                }
                            }}
                            className="PayNowBtn"
                        >
                            Pay Now
                        </button>
                    )}
                </>
            </div>
        } else {
            return <div
                className="Payleft-right"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "20px",
                }}
            >
                <p
                    className="Payevent"
                    style={{marginBottom: "5vh"}}
                >
                    {" "}
                    * Accommodation is Compulsory for Female
                </p>
                <div
                    className="agree-terms-and-conditions"
                    style={{marginBottom: "5vh"}}
                >
                    <input
                        className="agree-checkbox"
                        style={{cursor: "pointer"}}
                        type="checkbox"
                        checked={agree}
                        onChange={(e) => setAgree(!agree)}
                        required
                    />
                    <a
                        className="agree-a"
                        style={{
                            color: "white",
                            cursor: "pointer",
                        }}
                        href="https://drive.google.com/file/d/10pYZiG7enMSYHwjSYv-fTvTJkgLPNtJL/view?usp=sharing"
                        target="_blank"
                    >
                        Agree Terms and Conditions *
                    </a>
                </div>
                {agree == true ? (
                    <button
                        className="PayNowBtnActive"
                        onClick={paynow}
                    >
                        {loading ? (
                            <CircularProgress
                                color="inherit"
                                size={20}
                            />
                        ) : (
                            "Pay Now"
                        )}
                    </button>
                ) : (
                    <button
                        onClick={() =>
                            message.info(
                                "Please agree terms and conditions"
                            )
                        }
                        className="PayNowBtn"
                    >
                        Pay Now
                    </button>
                )}
            </div>
        }
    }

    const AccomodationConditionMob = () => {
        if ((userDetails?.gender == "Male" || userDetails?.gender == "Others") && (config.all_acco_close)) {
            return <div
                className="Payleft-right"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "20px",
                }}
            >
                <>
                    <p className="MPayevent">
                        Accomodation is full now, only get ticket for non accomodation
                        (* Accommodation Compulsory for Female)
                    </p>
                    <div className="agree-terms-and-conditions">
                        <input
                            className="agree-checkbox"
                            style={{cursor: "pointer"}}
                            type="checkbox"
                            checked={agree}
                            onChange={(e) => setAgree(!agree)}
                            required
                        />
                        <a
                            className="agree-a"
                            style={{
                                color: "white",
                                cursor: "pointer",
                            }}
                            href="https://drive.google.com/file/d/10pYZiG7enMSYHwjSYv-fTvTJkgLPNtJL/view?usp=sharing"
                            target="_blank"
                        >
                            Agree Terms and Conditions *
                        </a>
                    </div>
                    {checkPayNow() == true && agree == true ? (
                        <button
                            style={{marginTop: "20px"}}
                            className="PayNowBtnActive"
                            onClick={paynow_non_acco}
                        >
                            {loading ? (
                                <CircularProgress
                                    color="inherit"
                                    size={20}
                                />
                            ) : (
                                "Pay Now"
                            )}
                        </button>
                    ) : (
                        <button
                            style={{marginTop: "20px"}}
                            onClick={() => {
                                message.info(
                                    "Please agree terms and conditions"
                                );
                            }}
                            className="PayNowBtn"
                        >
                            Pay Now
                        </button>
                    )}
                </>
            </div>
        } else if (userDetails?.gender == "Male" || userDetails?.gender == "Others") {
            return <div
                className="Payleft-right"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "20px",
                }}
            >
                <>
                    <p className="MPayevent">
                        Are you going to take Accommodation in IITR?
                        (* Accommodation Compulsory for Female)
                    </p>
                    <div
                        className="MyesNo"
                        style={{opacity: is_female ? "0.5" : "1"}}
                    >
                        <button
                            className="Myesbtn"
                            disabled={is_female}
                            onClick={() => {
                                setAcco1("true");
                                Accommdation();
                            }}
                            style={style2}
                        >
                            Yes
                        </button>
                        <button
                            className="Mnobtn"
                            disabled={is_female}
                            onClick={() => {
                                setAcco1("false");
                                noAccommdation();
                            }}
                            style={style1}
                        >
                            No
                        </button>
                    </div>
                    <div className="agree-terms-and-conditions">
                        <input
                            className="agree-checkbox"
                            style={{cursor: "pointer"}}
                            type="checkbox"
                            checked={agree}
                            onChange={(e) => setAgree(!agree)}
                            required
                        />
                        <a
                            className="agree-a"
                            style={{
                                color: "white",
                                cursor: "pointer",
                            }}
                            href="https://drive.google.com/file/d/10pYZiG7enMSYHwjSYv-fTvTJkgLPNtJL/view?usp=sharing"
                            target="_blank"
                        >
                            Agree Terms and Conditions *
                        </a>
                    </div>
                    {checkPayNow() == true && agree == true ? (
                        <button
                            style={{marginTop: "20px"}}
                            className="PayNowBtnActive"
                            onClick={paynow}
                        >
                            {loading ? (
                                <CircularProgress
                                    color="inherit"
                                    size={20}
                                />
                            ) : (
                                "Pay Now"
                            )}
                        </button>
                    ) : (
                        <button
                            style={{marginTop: "20px"}}
                            onClick={() => {
                                if (agree == true) {
                                    message.info(
                                        "Please select one accomodation option"
                                    );
                                } else {
                                    message.info(
                                        "Please agree terms and conditions"
                                    );
                                }
                            }}
                            className="PayNowBtn"
                        >
                            Pay Now
                        </button>
                    )}
                </>
            </div>
        } else {
            return <div
                className="Payleft-right"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "20px",
                }}
            >
                <p
                    className="Payevent"
                    style={{marginBottom: "5vh"}}
                >
                    {" "}
                    * Accommodation is Compulsory for Female
                </p>
                <div
                    className="agree-terms-and-conditions"
                    style={{marginBottom: "5vh"}}
                >
                    <input
                        className="agree-checkbox"
                        style={{cursor: "pointer"}}
                        type="checkbox"
                        checked={agree}
                        onChange={(e) => setAgree(!agree)}
                        required
                    />
                    <a
                        className="agree-a"
                        style={{
                            color: "white",
                            cursor: "pointer",
                        }}
                        href="https://drive.google.com/file/d/10pYZiG7enMSYHwjSYv-fTvTJkgLPNtJL/view?usp=sharing"
                        target="_blank"
                    >
                        Agree Terms and Conditions *
                    </a>
                </div>
                {agree == true ? (
                    <button
                        className="PayNowBtnActive"
                        onClick={paynow}
                    >
                        {loading ? (
                            <CircularProgress
                                color="inherit"
                                size={20}
                            />
                        ) : (
                            "Pay Now"
                        )}
                    </button>
                ) : (
                    <button
                        onClick={() =>
                            message.info(
                                "Please agree terms and conditions"
                            )
                        }
                        className="PayNowBtn"
                    >
                        Pay Now
                    </button>
                )}
            </div>
        }
    }

    return (
        <>
            {loading && <Loader/>}
            <div className="nnp-container">
                <img src={Back} className="pro-back-img" alt=""/>
                <img src={Back1} className="pro-back-img2" alt=""/>
                <div className="nnp-head">
                    <Navbar color="transparent" data={userDetails}/>
                </div>
                <div className="boxborder">
                    <div className="nnp-laphead">
                        <div className="nnp-content">
                            <div className="lsp-box">
                                <div className="lsp-pic">
                                    <img
                                        className="lsp-img1"
                                        src={userDetails?.avtar ? userDetails?.avtar : pic}
                                        alt="profilepic"
                                    />
                                    <span className="lsp-text1">
                    {userDetails?.name} {userDetails?.is_ca ? "(CA)" : ""}
                  </span>
                                    <span className="lsp-text2">
                    Thomso ID:{userDetails?.thomso_id}
                  </span>
                                    {userDetails?.is_ca && (
                                        <span className="lsp-text2">
                      CA ID : {userDetails?.ca_thomso_id}
                    </span>
                                    )}
                                </div>
                                {/* <div>
            {userDetails?.username}
            {userDetails?.thomso_id}
          </div> */}
                                <div className="lsp-centre event-space payment-profile">
                                    <div
                                        className={
                                            locator.pathname === "/profile"
                                                ? "lsp-c1 c1-text"
                                                : "lsp-c2 c2-text"
                                        }
                                    >
                                        <img src={icon1} alt="icon1"/>
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
                                        <div
                                            className={
                                                locator.pathname === "/eventbox"
                                                    ? "lsp-c1 c1-text"
                                                    : "lsp-c2 c2-text"
                                            }
                                        >
                                            <img src={icon2} alt="icon2"/>
                                            <Link
                                                to="/pevents"
                                                className={
                                                    locator.pathname === "/eventbox"
                                                        ? "c1-text"
                                                        : "c2-text"
                                                }
                                            >
                                                My Events
                                            </Link>
                                        </div>
                                    )}
                                    {userDetails?.is_iitr_alumn ? (
                                        <div
                                            className={
                                                locator.pathname === "/newpayment"
                                                    ? "lsp-c2 c2-text"
                                                    : "lsp-c2 c2-text"
                                            }
                                        >
                                            <img src={icon3} alt="icon3"/>
                                            <Link
                                                to="/newpayment"
                                                className={
                                                    locator.pathname === "/newpayment"
                                                        ? "c1-text"
                                                        : "c2-text"
                                                }
                                            >
                                                Payment
                                            </Link>
                                        </div>
                                    ) : (
                                        <div className="lsp-c1">
                                            <img src={icon3} alt="icon3"/>
                                            <Link
                                                to="/payment"
                                                className={
                                                    locator.pathname === "/payment"
                                                        ? "c1-text"
                                                        : "c2-text"
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
                                        <img src={log} alt="log"/>
                                        <span>Logout</span>
                                    </button>
                                </div>
                            </div>
                            <div className="c-line1">
                                <img className="c-line1-img" src={line} alt="line"/>
                            </div>

                            <div
                                className="Paycontainer"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <>
                                    {/* <img src={paymentcenterpic} alt="" /> */}
                                    {userDetails.payment ? (
                                        <PaymentSuccess/>
                                    ) : userDetails.gender == "Female" 
                                     ? (
                                        <>
                                            <img className="PaymentClosedAll1" src={Closed} alt=""/>
                                        </>
                                    ) : config.all_payment_close ? (
                                        <>
                                            <img className="PaymentClosedAll" src={Closed1} alt=""/>
                                        </>
                                    ) : (
                                        <>
                                         {paying ? (
                                                <>
                                                    <div
                                                        className="Payleft1"
                                                        style={{marginRight: "auto", marginTop: "0"}}
                                                    >
                                                        <table className="pay-table">
                                                            <thead className="par-head">
                                                            <tr className="pay-tr-head">
                                                                <th className="pay-th">Sr. No.</th>
                                                                <th className="pay-th">Thomso ID</th>
                                                                <th className="pay-th">Gender</th>
                                                                <th className="pay-th">Accomodation</th>
                                                            </tr>
                                                            </thead>
                                                            <hr/>
                                                            <tbody
                                                                className="pay-body-data"
                                                                style={{overflowY: "scroll"}}
                                                            >
                                                            <>
                                                                {paymentData1.map((data, index) => {
                                                                    return (
                                                                        <tr className="pay-tr">
                                                                            <td className="pay-th">{index + 1}.</td>
                                                                            <td className="pay-th">{data?.id}</td>
                                                                            <td className="pay-th">
                                                                                {data?.gender}
                                                                            </td>

                                                                            <td className="pay-th">
                                                                                {data?.acco == "true" ? "YES" : "NO"}
                                                                            </td>
                                                                            <td
                                                                                style={{width: "20px"}}
                                                                                className="pay-th"
                                                                            >
                                                                                <MdDelete
                                                                                    onClick={() =>
                                                                                        deletePayment(data?.id)
                                                                                    }
                                                                                    style={{
                                                                                        cursor: "pointer",
                                                                                        size: "20px",
                                                                                    }}
                                                                                    color="red"
                                                                                    size="20px"
                                                                                />
                                                                            </td>
                                                                        </tr>
                                                                    );
                                                                })}
                                                            </>
                                                            </tbody>
                                                        </table>
                                                        <div
                                                            onClick={() => setAddpar(!addpar)}
                                                            className="add-participant"
                                                            style={{
                                                                color: "Selective-Yellow",
                                                                cursor: "pointer",
                                                            }}
                                                        >
                                                            + Add Participant
                                                        </div>
                                                        <div className="total-pay">
                                                            <div className="total-pay-1">
                                                                <h1 className="total-pay-1-h1">TOTAL</h1>
                                                                <h2 className="total-pay-1-h2">
                                                                    No. of Participants
                                                                </h2>
                                                            </div>
                                                            <div className="total-pay-2">
                                                                <p className="total-pay-1-p1">
                                                                    ₹{totalpay}
                                                                    <span style={{fontSize: "0.8vw"}}>
                                    {" "}
                                                                        (incl. all the taxes)
                                  </span>
                                                                </p>
                                                                <p className="total-pay-1-p2">
                                                                    {paymentData.length}
                                                                </p>
                                                            </div>
                                                            <div className="total-pay-3">
                                                                <button
                                                                    className="total-pay-3-btn"
                                                                    onClick={makePayment}
                                                                    disabled={!paymentData.length}
                                                                >
                                                                    Pay Now
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div
                                                        className="Payleft"
                                                        style={{
                                                            marginRight: "auto",
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                            gap: "10vw",
                                                            marginLeft: "auto",
                                                        }}
                                                    >
                                                        <div
                                                            className="Payleft-left"
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                            }}
                                                        >
                                                            <>
                                                                <p className="payheading">Payment Details</p>
                                                                <div className="amountBox">
                                                                    <div className="PayAmount">
                                                                        <div>
                                                                            <p>Thomso Fees</p>
                                                                            {acco == true || acco == null ? (
                                                                                <p>Accommodation</p>
                                                                            ) : (
                                                                                <p
                                                                                    style={{
                                                                                        color: "rgba(64, 64, 64, 1)",
                                                                                    }}
                                                                                >
                                                                                    Accommodation
                                                                                </p>
                                                                            )}
                                                                        </div>
                                                                        <div>
                                                                            <p>₹ {config.min_amount}</p>
                                                                            {acco == true || acco == null ? (
                                                                                <p>
                                                                                    ₹{" "}
                                                                                    {config.max_amount -
                                                                                        config.min_amount}
                                                                                </p>
                                                                            ) : (
                                                                                <p
                                                                                    style={{
                                                                                        color: "rgba(64, 64, 64, 1)",
                                                                                    }}
                                                                                >
                                                                                    ₹{" "}
                                                                                    {config.max_amount -
                                                                                        config.min_amount}
                                                                                </p>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div className="Payline1"></div>
                                                                    <div className="TotalAmount">
                                                                        <p className="Paylarge">TOTAL</p>
                                                                        <p>
                                      <span className="Paylarge">
                                        ₹{" "}
                                          {acco == true || acco == null
                                              ? `${config.max_amount}`
                                              : `${config.min_amount}`}
                                      </span>
                                                                            <br/>
                                                                            <span className="PayTaxes">+ (Convenience Fees & Taxes)</span>
                                                                        </p>
                                                                    </div>
                                                                    <p className="PayAccommodation">
                                                                        Accommodation includes 4 day-4 night stay
                                                                        and Food (Breakfast + Lunch){" "}
                                                                    </p>
                                                                </div>
                                                            </>
                                                        </div>

                                                        {/* acco non-acco conditions for male and female */}
                                                        <div>
                                                            {AccomodationCondition()}
                                                        </div>
                                                        {/* end page 1 */}

                                                    </div>
                                                </>
                                            )}
                                        </>

                                    )}
                                </>
                            </div>
                        </div>
                    </div>

                    {/* -------------------Logout Modal ------------------- */}
                    <div className={!logout ? "none" : ""} id="logout">
                        <div className="l_body">
                            <div
                                className="logout_body"
                                style={{position: "relative", height: "318px"}}
                            >
                                <div className="redpic">
                                    <img src={cs1} alt="redpic"/>
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

                    {/* ------------------Add participant modal-------------- */}
                    <div className={addpar ? "" : "none"} id="logout">
                        <div className="l_body">
                            <div
                                className="logout_body"
                                style={{position: "relative", height: "207px"}}
                            >
                                {genderr === "Male" && !config.all_acco_close ? (
                                    <div className="add-acco">
                                        <div className="does-he">
                                            <h1 className="dacc">Does he want accomodation?</h1>
                                        </div>
                                        <div className="fle-ro2">
                                            <button
                                                onClick={() => {
                                                    setAddpar(!addpar);
                                                    handleDataYes();
                                                    setGenderr("Female");
                                                    // clearthomsoid();
                                                }}
                                                className="submit-par"
                                                style={{fontSize: "16px", padding: "6px"}}
                                            >
                                                YES
                                            </button>
                                            <button
                                                onClick={() => {
                                                    // setSubmitid(false);
                                                    setAddpar(!addpar);
                                                    handleDataNo();
                                                    // clearthomsoid();
                                                    setMale(false);
                                                    setGenderr("Female");
                                                }}
                                                className="clear-par"
                                                style={{fontSize: "16px", padding: "6px"}}
                                            >
                                                NO
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="add-par">
                                        <h1 className="add-parti" style={{fontSize: "20px"}}>
                                            Add Participants
                                        </h1>
                                        <input
                                            className="add-par-id"
                                            type="text"
                                            placeholder="thomso id *"
                                            value={inputValue}
                                            onChange={handleInputChange}
                                        />
                                        <div className="fle-ro2">
                                            <button
                                                onClick={() => {
                                                    setAddpar(!addpar);
                                                    // setSubmitid(false);
                                                    clearthomsoid();
                                                }}
                                                className="clear-par"
                                                style={{padding: "6px", fontSize: "16px"}}
                                            >
                                                Clear
                                            </button>

                                            <button
                                                onClick={() => {
                                                    checkInputExists(inputValue);
                                                    // clearthomsoid();
                                                }}
                                                className="submit-par"
                                                style={{padding: "6px", fontSize: "16px"}}
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* ----------------------------------------------- */}

                    {/* --------------Mobile----------------------------- */}

                    <div className="nnp-mobile">
                        <div
                            className="mobpaymentcenterimg"
                            style={{
                                justifyContent: "flex-start",
                            }}
                        >
                            <div className="mpb-mobileview">
                                <div className="mv-top">
                                    <div className="mv-top-1">
                                        <Link
                                            to="/profile"
                                            className={
                                                Locator.pathname === "/profile"
                                                    ? "nav-active"
                                                    : "nav-passive"
                                            }
                                        >
                                            <img src={icon1} alt="profile" className="img--1"/>
                                            Profile
                                        </Link>
                                    </div>
                                    {userDetails?.is_iitr_alumn ? null : (
                                        <div className="mv-top-2">
                                            <Link
                                                to="/pevents"
                                                className={
                                                    Locator.pathname === "/pevents"
                                                        ? "nav-active"
                                                        : "nav-passive"
                                                }
                                            >
                                                <img src={icon2} alt="Events" className="img--1"/>
                                                Events
                                            </Link>
                                        </div>
                                    )}
                                    {userDetails?.is_iitr_alumn ? (
                                        <div className="mv-top-2">
                                            <img src={icon3} alt="payment" className="img--1"/>
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
                                                    Locator.pathname === "/payment"
                                                        ? "nav-active"
                                                        : "nav-passive"
                                                }
                                            >
                                                <img src={icon31} alt="payment" className="img--1"/>
                                                Payment
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                <div className="mpb-line1"/>
                            </div>
                            {userDetails.payment ? (
                                <PaymentSuccess/>
                            ) : userDetails.gender == "Female" 
                            ? (
                                <>
                                    <img className="PaymentClosedAll" src={Closed} alt=""/>
                                </>
                            ) : config.all_payment_close ? (
                                <>
                                    <img className="PaymentClosedAll1" src={Closed1} alt=""/>
                                </>
                            ) : (
                                <>
                                 {paying ? (
                                        <>
                                            <div
                                                className="Payleft1"
                                                style={{marginRight: "auto", marginTop: "0"}}
                                            >
                                                <table className="pay-table">
                                                    <thead className="par-head">
                                                    <tr className="pay-tr-head">
                                                        <th className="pay-th">Thomso ID</th>
                                                        <th className="pay-th" style={{width: "14vw"}}>
                                                            Gender
                                                        </th>
                                                        <th className="pay-th">Accomodation</th>
                                                    </tr>
                                                    </thead>
                                                    <hr/>
                                                    <tbody
                                                        className="pay-body-data"
                                                        style={{overflowY: "scroll"}}
                                                    >
                                                    <>
                                                        {paymentData1.map((data) => {
                                                            return (
                                                                <tr className="pay-tr">
                                                                    <td className="pay-th">{data?.id}</td>
                                                                    <td
                                                                        className="pay-th"
                                                                        style={{width: "14vw"}}
                                                                    >
                                                                        {data?.gender}
                                                                    </td>
                                                                    <td
                                                                        className="pay-th"
                                                                        style={{width: "14vw"}}
                                                                        // style={{ gap: "10px",alignItems:"center" }}
                                                                    >
                                                                        <>{data?.acco == "true" ? "YES" : "NO"}</>
                                                                    </td>
                                                                    <td
                                                                        className="pay-th"
                                                                        style={{width: "20px"}}
                                                                    >
                                                                        <>
                                                                            <MdDelete
                                                                                onClick={(index) =>
                                                                                    deletePayment(data?.id)
                                                                                }
                                                                                style={{
                                                                                    cursor: "pointer",
                                                                                    size: "10px",
                                                                                }}
                                                                                color="red"
                                                                                size="20px"
                                                                            />
                                                                        </>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })}
                                                    </>
                                                    </tbody>
                                                </table>

                                                <div
                                                    onClick={() => setAddpar(!addpar)}
                                                    className="add-participant"
                                                    style={{
                                                        color: "Selective-Yellow",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    + Add Participant
                                                </div>
                                                <div className="total-pay">
                                                    <div className="total-pay-up">
                                                        <div className="total-pay-1">
                                                            <h1 className="total-pay-1-h1">TOTAL</h1>
                                                            <h2 className="total-pay-1-h2">
                                                                No. of Participants
                                                            </h2>
                                                        </div>
                                                        <div className="total-pay-2">
                                                            <p className="total-pay-1-p1">
                                                                ₹{totalpay}
                                                                <span style={{fontSize: "11px"}}>
                                  {" "}
                                                                    (incl. all the taxes)
                                </span>
                                                            </p>
                                                            <p className="total-pay-1-p2">
                                                                {paymentData.length}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="total-pay-3">
                                                        <button
                                                            className="total-pay-3-btn"
                                                            onClick={makePayment}
                                                            disabled={!paymentData.length}
                                                        >
                                                            Pay Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div
                                                className="main_boxx"
                                                style={{overflowY: "scroll"}}
                                            >
                                                <div className="MPaycontainer">
                                                    <div className="MPayleft">
                                                        <p className="Mpayheading">Payment Details</p>
                                                        <div className="MamountBox">
                                                            <div className="MPayAmount">
                                                                <div>
                                                                    <p>Thomso Fees</p>
                                                                    {acco == true || acco == null ? (
                                                                        <p>Accommodation</p>
                                                                    ) : (
                                                                        <p style={{color: "rgba(64, 64, 64, 1)"}}>
                                                                            Accommodation
                                                                        </p>
                                                                    )}
                                                                </div>
                                                                <div>
                                                                    <p>₹ {config.min_amount}</p>
                                                                    {acco == true || acco == null ? (
                                                                        <p>
                                                                            ₹ {config.max_amount - config.min_amount}
                                                                        </p>
                                                                    ) : (
                                                                        <p style={{color: "rgba(64, 64, 64, 1)"}}>
                                                                            ₹ {config.max_amount - config.min_amount}
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="MPayline1"></div>
                                                            <div className="MTotalAmount">
                                                                <p className="MPaylarge">TOTAL</p>
                                                                <p>
                                  <span className="MPaylarge">
                                    ₹{" "}
                                      {acco == true || acco == null
                                          ? `${config.max_amount}`
                                          : `${config.min_amount}`}
                                  </span>
                                                                    <span className="MPayTaxes"> + Taxes</span>
                                                                </p>
                                                            </div>
                                                            <p className="MPayAccommodation">
                                                                Accommodation includes 4 day-4 night stay and
                                                                Food (Breakfast + Lunch){" "}
                                                            </p>
                                                        </div>
                                                        <p className="MPayinfo"></p>

                                                        {/* Mobile acc non acco confirmation */}
                                                        {AccomodationConditionMob()}
                                                        {/* end */}

                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </>
                            )}
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

export default connect(mapStateToProps, null)(NewPaymentBox);
