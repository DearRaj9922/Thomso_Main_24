import React, { useEffect, useState } from "react";
import "./EventPayment.css";
import logo from "../../assets/Logo-blue.png";
import axios from "axios";
import { message } from "antd";

// import PopUp from "../Merch_page/PopUp/PopUp";
import Loader from "../Loader/Loader";
function EventPayment() {
  const [events, setevents] = useState([]);
  const [event, setevent] = useState("");
  const [loading, setLoading] = useState(false);
  const [slot, setSlot] = useState("");
  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get("https://api2.thomso.in/apiV1/event");
      // console.log(response);
      console.log(response.data);
      setevents(response.data);
      setLoading(false);
    };
    fetchdata();
  }, []);
  async function payForEvent() {
    setLoading(true);
    // setdetails(!details);
    // setevent(el.name);

    if(events[0].name == "SILENT DJ" && slot.length < 2){
      message.error("Please Select any slot");
      setLoading(false);
    }else{

      try{
        const response = await axios.post(
          `https://api2.thomso.in/apiV1/paid_events_iitr`,
          { event_name: events[0].name, slot: slot }
        );
        const u = response.data;
        // console.log("data", response.data);
        if (response.data.status == "true") {
          setTimeout(() => {
            window.open(response.data.payment_url, "_blank");
          });
        } else {
          message.error(`${response.data.error}`);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    }
  }


  const [details, setdetails] = useState(false);
  return (
    <div className="eventpayment">
      {loading && <Loader />}
      <div className="eventpayment_header">
        <img className="eventpayment_logo" src={logo} alt="" />
      </div>
      <div className="eventpayment_body">
        <h1>Paid events</h1>
        {events
          .filter((el) => {
            return el.is_payment === true && el.name==="SILENT DJ";
          })
          .map((el) => {
            return (
              <div className="eventpayment_card" id={el.id}>
                <div className="eventpayment_left">
                  <img src={el.image} alt="" className="eventpayment_image" />
                </div>
                <div className="eventpayment_right">
                  <h2>{el.name}</h2>
                  <p>{el.description}</p>
                  <div className="eventpayment_entry_fee">
                    <span className="entry">Entry Fee :</span>
                    <span className="fee">Rs. {el.payment_amount}/-</span>
                  </div>
                  <div
                    className="eventpayment_pay"
                    onClick= {payForEvent}
                  >
                    PAY NOWs
                  </div>
                </div>
              </div>
            );
          })}
        {events
          .filter((el) => {
            return el.is_payment === true && el.name!=="SILENT DJ";
          })
          .map((el) => {
            return (
              <div className="eventpayment_card" id={el.id}>
                <div className="eventpayment_left">
                  <img src={el.image} alt="" className="eventpayment_image" />
                </div>
                <div className="eventpayment_right">
                  <h2>{el.name}</h2>
                  <p>{el.description}</p>
                  <div className="eventpayment_entry_fee">
                    <span className="entry">Entry Fee :</span>
                    <span className="fee">Rs. {el.payment_amount}/-</span>
                  </div>
                  <div
                    className="eventpayment_pay"
                    onClick={() => {
                      setdetails(!details);
                      setevent(el.name);
                    }}
                  >
                    PAY NOW
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {/* {details && (
        <PopUp details={details} setdetails={setdetails} event={event}/>
      )} */}
    </div>
  );
}

export default EventPayment;
