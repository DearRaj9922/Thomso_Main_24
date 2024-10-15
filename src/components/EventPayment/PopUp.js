import React from "react";
import "./Popup.css";

function PopUp({
  details,
  setDetails,
  setSlot,
  setGsuiteID,
  setName,
  setEnrollmentNo,
  payForEvent,
  event,
  setContact,
  category
}) {
    console.log(event);
  return (
    <div className="popwrap">
    <div className="popup">
      <div className="popup_inner">
        <h2>Enter Payment Details</h2>
        <div>
          <label>Name:</label>
          <input className="popLabel"
            type="text"
            placeholder={category==="Solo"?"Your Name":"Team Name"}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>GSuite ID:</label>
          <input className="popLabel"
            type="email"
            placeholder="Your GSuite ID"
            onChange={(e) => setGsuiteID(e.target.value)}
          />
        </div>
        <div>
          <label>Contact:</label>
          <input className="popLabel"
            type="number"
            placeholder="Your Contact Number"
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div>
          <label>Enrollment No:</label>
          <input className="popLabel"
            type="text"
            placeholder="Your Enrollment No."
            onChange={(e) => setEnrollmentNo(e.target.value)}
          />
        </div>

        {/* Show slot selection if "SILENT DJ" is selected */}
        {event === "Silent DJ" && (
          <div>
            <label>Select Slot:</label>
            <select className="popSelect" onChange={(e) => setSlot(e.target.value)}>
              <option value="">Choose Slot</option>
              <option value="Day1">Day1</option>
              <option value="Day2">Day2</option>
              <option value="Day3">Day3</option>
            </select>
          </div>
        )}

        <div className="popup_buttons">
          <button onClick={payForEvent}>Proceed to Payment</button>
          <button
            onClick={() => {
              setDetails(false); // Close the popup
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default PopUp;
