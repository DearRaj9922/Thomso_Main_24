import React, { useState } from "react";
import "./FAQ.css";
import img1 from "../../../assets/Cross.webp";
import FAQ1 from "../../../assets/FAQ.svg";
import {
  AiOutlineMinus,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";

function FAQ() {
  const [plus, setPlus] = useState({
    "1st": true,
    "2nd": true,
    "3rd": true,
    "4th": true,
    "5th": true,
    "6th": true
  });
  return (
    <div className="MUN_FAQ_main_div">
      <div className="FAQdiv">
        <img src={FAQ1} className="FAQimg" alt="" />
      </div>
      <div className="accordion">
        <div className="left_num_faq">01</div>
        <div className="right_mun_faq_head">
          Where can I register for Thomso?
          {plus["1st"] ? (
            <AiFillPlusCircle
              class="accordion_1 plus_btn_mun"
              onClick={() => {
                setPlus({ ...plus, ["1st"]: false });
              }}
            />
          ) : (
            <>
              <AiFillMinusCircle
                class="accordion_1 plus_btn_mun"
                onClick={() => {
                  setPlus({ ...plus, ["1st"]: true });
                }}
              />
              <div class="panel">
                Registration can be done at &nbsp;

                <a href="https://thomso.in/#/register " style={{ color: "#a09faf", opacity: ".5" }}>https://thomso.in/#/register </a>

              </div>
            </>
          )}
        </div>
      </div>
      <div className="mun_faq_cutline"></div>
      <div className="accordion">
        <div className="left_num_faq">02</div>
        <div className="right_mun_faq_head">
          What are the agendas of the IITR MUN 2024?
          {plus["2nd"] ? (
            <AiFillPlusCircle
              class="accordion_1 plus_btn_mun"
              onClick={() => {
                setPlus({ ...plus, ["2nd"]: false });
              }}
            />
          ) : (
            <>
              <AiFillMinusCircle
                class="accordion_1 plus_btn_mun"
                onClick={() => {
                  setPlus({ ...plus, ["2nd"]: true });
                }}
              />
              <div className="panel">
                <p>

                <div>
                There are three committees this year: <br />
                AIPPM: National-Revocation of the Central Governments Decision on Lateral Entry into Civil Services<br />
                UNGA: International- The Kursk Incursion by Ukraine: Addressing Escalation in the Ukraine-Russia Conflict <br /> 

                SHIELD: Developing a Global Defense Strategy Against Extraterrestrial Threats to Earth..
 <br />
                {/* <a href="https://thomso.in/#/events" style={{color:"#a09faf",opacity:".5"}}>https://thomso.in/#/events</a> */}


                  </div>




                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="mun_faq_cutline"></div>
      <div className="accordion">
        <div className="left_num_faq">03</div>
        <div className="right_mun_faq_head">
          What will be included in the registration fees?
          {plus["3rd"] ? (
            <AiFillPlusCircle
              class="accordion_1 plus_btn_mun"
              onClick={() => {
                setPlus({ ...plus, ["3rd"]: false });
              }}
            />
          ) : (
            <>
              <AiFillMinusCircle
                class="accordion_1 plus_btn_mun"
                onClick={() => {
                  setPlus({ ...plus, ["3rd"]: true });
                }}
              />
              <div class="panel">
                <p>
                  Registration fee is Rs.2949+taxes. <br />
                  It will include accommodation(compulsory for girls) for three days, breakfast and lunch, goodies, participation in all events and pronites. <br />
                  What about dinner? <br />
                  At the time of dinner, pronites will be going on but participants could avail the facilities of stalls and canteens.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="mun_faq_cutline"></div>
      <div className="accordion">
        <div className="left_num_faq">04</div>
        <div className="right_mun_faq_head">
          How do I get the details/rulebook for any particular event?
          {plus["4th"] ? (
            <AiFillPlusCircle
              class="accordion_1 plus_btn_mun"
              onClick={() => {
                setPlus({ ...plus, ["4th"]: false });
              }}
            />
          ) : (
            <>
              <AiFillMinusCircle
                class="accordion_1 plus_btn_mun"
                onClick={() => {
                  setPlus({ ...plus, ["4th"]: true });
                }}
              />
              <div class="panel">
                <p>
                  Details can be found at - <a href="https://thomso.in/#/events" style={{ color: "#a09faf", opacity: ".5" }}>https://thomso.in/#/events</a>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="mun_faq_cutline"></div>
      <div className="accordion">
        <div className="left_num_faq">05</div>
        <div className="right_mun_faq_head">
          What are the dates of IITR MUN?
          {plus["5th"] ? (
            <AiFillPlusCircle
              class="accordion_1 plus_btn_mun"
              onClick={() => {
                setPlus({ ...plus, ["5th"]: false });
              }}
            />
          ) : (
            <>
              <AiFillMinusCircle
                class="accordion_1 plus_btn_mun"
                onClick={() => {
                  setPlus({ ...plus, ["5th"]: true });
                }}
              />
              <div class="panel">
                <p>
                  IITR MUN is a two days conference and will be held on 4th and 5th October
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="mun_faq_cutline"></div>
      <div className="accordion">
        <div className="left_num_faq">06</div>
        <div className="right_mun_faq_head">
          What is the prize worth of the event?
          {plus["6th"] ? (
            <AiFillPlusCircle
              class="accordion_1 plus_btn_mun"
              onClick={() => {
                setPlus({ ...plus, ["6th"]: false });
              }}
            />
          ) : (
            <>
              <AiFillMinusCircle
                class="accordion_1 plus_btn_mun"
                onClick={() => {
                  setPlus({ ...plus, ["6th"]: true });
                }}
              />
              <div class="panel">
                <p>
                  The prize worth is 100k
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
