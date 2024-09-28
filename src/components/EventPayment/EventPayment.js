import React, { useEffect, useState } from "react";
import "./EventPayment.css";
import logo from "../../assets/Logo-blue.png";
import axios from "axios";
import { message } from "antd";
import Loader from "../Loader/Loader";
import PopUp from "./PopUp"; // Import PopUp component

function EventPayment() {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState("");
  const [loading, setLoading] = useState(false);
  const [slot, setSlot] = useState("");
  const [details, setDetails] = useState(false); // Control PopUp visibility
  const [gsuiteID, setGsuiteID] = useState(""); // Store GSuite ID
  const [name, setName] = useState(""); // Store Name
  const [enrollmentNo, setEnrollmentNo] = useState(""); // Store Enrollment Number
  const [contact,setContact] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://api2.thomso.in/apiV1/event");
        setEvents(response.data);
        setLoading(false);
        console.log(response.data)
      } catch (error) {
        message.error("Error fetching events data");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  async function payForEvent() {
    setLoading(true);

    // Slot validation for "SILENT DJ"
    if (event === "SILENT DJ" && !slot) {
      message.error("Please select a slot.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `https://api2.thomso.in/apiV1/paid_events_iitr`,
        {
          event_name: event,
          slot: slot,
          name: name,
          email: gsuiteID,
          enrollment_no: enrollmentNo,
          contact:contact
        }
      );

      if (response.data.status === "true") {
        setTimeout(() => {
          window.open(response.data.payment_url, "_blank");
        }, 500);
      } else {
        message.error(response.data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      message.error("Something went wrong, please try again.");
    }

    setLoading(false);
  }

  return (
    <div className="eventpayment">
      {loading && <Loader />}
      <div className="eventpayment_header">
        <img className="eventpayment_logo" src={logo} alt="" />
      </div>
      <div className="eventpayment_body">
        <h1>Paid events</h1>

        {events
          .filter((el) => el.is_payment === true)
          .map((el) => {
            if(el.name==="Sneaker Design"){
              return (
                  <div className="eventpayment_card" id={el.id} key={el.id}>
                    <div className="eventpayment_left">
                      <img src={el.image} alt="" className="eventpayment_image" />
                    </div>
                    <div className="eventpayment_right">
                      <h2>{el.name} ({el.solo_team})</h2>
                      <p>{el.description}</p>
                      <div className="eventpayment_entry_fee">
                        <span className="entry">Entry Fee :</span>
                        <span className="fee">Rs. {el.payment_amount}/-</span>
                      </div>

                      <div
                          className="eventpayment_pay"
                          onClick={() => {
                            setEvent(el.name); // Set the selected event name
                            setDetails(true); // Show the PopUp
                          }}
                      >
                        PAY NOW
                      </div>
                    </div>
                  </div>
              );
            }
            else{
              return (
                  <div className="eventpayment_card" id={el.id} key={el.id}>
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
                            setEvent(el.name); // Set the selected event name
                            setDetails(true); // Show the PopUp
                          }}
                      >
                        PAY NOW
                      </div>
                    </div>
                  </div>
              );
            }

          })}
      </div>

      {/* PopUp component for user details input */}
      {details && (
        <PopUp
          details={details}
          setDetails={setDetails}
          setSlot={setSlot}
          setGsuiteID={setGsuiteID}
          setName={setName}
          setContact={setContact}
          setEnrollmentNo={setEnrollmentNo}
          payForEvent={payForEvent}
          event={event} // Pass selected event
        />
      )}
    </div>
  );
}

export default EventPayment;
