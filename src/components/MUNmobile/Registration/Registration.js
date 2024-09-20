import React, { useState, useEffect } from "react";
import axios from "axios"
import "./Registration.css";
import { json, useNavigate } from "react-router-dom";
// import Navbar from '../../EventsNavbar/MobEventnavbar';
import Navbar from "../../EventsNavbar/Eventsnavbar";
import Loader from "../../Newloader/Newloader"
import BGimg from "../../../assets/munbg.svg";
import Select from "react-select";
import BgMunReg from "../../../assets/munbg.svg";
import CircularProgress from "@mui/material/CircularProgress";
import {message} from "antd"


const Portfolio = [
  "UNITED NATIONS GENERAL ASSEMBLY (UNGA)",
  "ALL INDIA POLITICAL PARTY MEET (AIPPM)",
  "S.H.I.E.L.D (Strategic Homeland Intervention, Enforcement, and Logistics Division)",
].map((Portfolio) => ({
  value: Portfolio,
  label: Portfolio,
}));

const Portfolio1 = [
  "ALL INDIA POLITICAL PARTY MEET (AIPPM)",
  "S.H.I.E.L.D (Strategic Homeland Intervention, Enforcement, and Logistics Division)",
].map((Portfolio) => ({
  value: Portfolio,
  label: Portfolio,
}));

const Portfolio2 = [
  "UNITED NATIONS GENERAL ASSEMBLY (UNGA)",
  "S.H.I.E.L.D (Strategic Homeland Intervention, Enforcement, and Logistics Division)",
].map((Portfolio) => ({
  value: Portfolio,
  label: Portfolio,
}));

const Portfolio3 = [
  "UNITED NATIONS GENERAL ASSEMBLY (UNGA)",
  "ALL INDIA POLITICAL PARTY MEET (AIPPM)",
].map((Portfolio) => ({
  value: Portfolio,
  label: Portfolio,
}));
const UNGA = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Angola",
  "Argentina",
  "Armenia",
  "Australia ",
  "Austria ",
  "Bahamas",
  "Bangladesh ",
  "Belarus",
  "Belgium ",
  "Bhutan ",
  "Bolivia",
  "Brazil ",
  "Bulgaria",
  "Burundi",
  "Cambodia ",
  "Canada ",
  "Central African Republic",
  "Chile",
  "China",
  "Colombia ",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba ",
  "Czech Republic ",
  "Denmark ",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Eritrea",
  "Estonia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Germany",
  "Ghana",
  "Greece",
  "Guatemala",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Kazakhstan",
  "Kenya",
  "Kyrgystan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Libya",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malaysia",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritius",
  "Mexico",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "Norway",
  "Oman",
  "PAkistan",
  "Papua New Guinea",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Tunisia",
  "Turkey",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States Of America",
  "Uruguay",
  "Vanuata",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
].map((UNGA) => ({
  value: UNGA,
  label: UNGA,
}));

const AIPPM = [
  "Amit Shah",
  "Jyotiraditya Scindia",
  "Nitin Gadkari",
  "Ravi Shankar Prasad",
  "Dr Harsh Vardhan",
  "Vasundhara Raje",
  "RAMESH BIDHURI",
  "MAHENDRA NATH PANDEY",
  "KRISHAN PAL",
  "VIRENDRA KUMAR",
  "DHARMENDRA PRADHAN",
  "DR. RAMESH POKHRIYAL",
  "YOGI ADITYA NATH",
  "MEENAKSHI LEKHI",
  "Kiren Rijiju",
  "Syed Shahnawaz Hussain",
  "Piyush Goyal",
  "Mukhtar Abbas Naqvi",
  "Ashwini Vaishnav",
  "Shivraj Singh Chauhan",
  "Sudhanshu Trivedi",
  "Anandiben M Patel",
  "Anju Bala",
  "Subramanyam Jaishankar",
  "Manoharlal Khattar",
  "Anurag Singh Thakur",
  "Manoj Tiwari",
  "Kirron Kher",
  "Mansukh Mandaviya",
  "Rajnath Singh",
  "Narayana Swamy Abbaiah",
  "Rajendra Agrawal",
  "S.S. Ahluwalia",
  "Guharam Ajgalley",
  "Mangal Suresh Angadi",
  "Bache Gowda B.N.",
  "Prof. S.P. Singh Baghel",
  "Sanjay Kumar Bandi",
  "John Barla",
  "Sudarshan Bhagat",
  "Bhagirath Choudhary",
  "Sachin Pilot",
  "Salman Khurshid",
  "Dr Manmohan Singh",
  "Mallikarjun Kharge",
  "Sonia Gandhi",
  "Rahul Gandhi",
  "Ambika Soni",
  "GAURAV GOGOI",
  "Dr Shashi Tharoor",
  "Meira Kumar",
  " P. Bhattacharya",
  "G.C. Chandrashekhar",
  "P. Chidambaram",
  "Neeraj Dangi",
  "Manish Tewari",
  "Kamal Nath",
  "Manish Tewari",
  "KTS Tulsi",
  "Shaktisinh Gohil",
  "Arvind Kejriwal",
  "Satyendar Jain",
  "Sanjay Singh",
  "Gopal Rai",
  "RAGHAV CHADHA",
  "Sanjay Singh",
  "Atishi",
  "Bhagwant Mann",
  "Tejashvi Yadav",
  "Misa Bharti",
  "Rabri Devi",
  "Manoj Jha",
  "Akhilesh Yadav",
  "AZAM KHAN",
  "UMAR ALI KHAN",
  "Ram Gopal Yadav",
  "Nitish Kumar",
  "Sharad Pawar",
  "Ajit Pawar",
  "Praful Patel",
  "Kumari Mayawati",
  "Satish Mishra",
  "Sangeeta Azad",
  "Girish Chandra",
  "Sanjay Raut",
  "Uddhav Thackeray",
  "Vinayak Raut",
  "MAMTA BANERJEE",
  "Derek O'Brien",
  "Asaddudin Owaisi",
  "Imtiaz Jaleel",
  "Pashupati Kumar Paras",
  "Lok Janshakti Party",
  "Sitaram Yechury",
  "Brinda Karat",
  "Pinaki Mishra",
  "Bhartruhari Mahtab",
  "Yogendra Yadav",
  "N K Premachandran",
  "Captain Amarinder Singh",
  "Chirag Paswan",
  "Raj Thackeray",
  "Agatha Sangma",
  "K R Reddy",
  "Dayanidhi Maran",
  "Kanimozhi Karunanidhi",
  "Anupriya Patel",
  "Harsimrat Kaur Badal",
  "JaganMohan Reddy",
  "Naba Kumar Sarania",
  "Ranjan Gogoi",
  "Sumalatha Ambareesh",
  "naveen Patnaik",
  "K. Chandrashekar Rao",
  "Jagan Mohan Reddy",
  "Pinarayi Vijayan",
  "M. K. Stalin",
  "H. D. Kumaraswamy",
  "N. Chandrababu Naidu",
  "Pawan Kalyan",
  "K. J. George",
  "Akhilesh Yadav",
  "Sharad Pawar",
  "Arvind Kejriwal",
  "K. J. Alphons",
  "Farooq Abdullah",
  "Raghav Chadha",
  "H. D. Deve Gowda",
  "N. Rangasamy",
  "Mehbooba Mufti",
  "H. Vasanthakumar",
  "M. M. Hassan",
  "Jai Ram Thakur",
  "Nitish Kumar",
  "Jagadish Shettar",
  "P. T. R. Palanivel Rajan",
  "P. K. Kunhalikutty",
  "K. K. Shailaja",
  "T. R. Baalu",
  "K. Muraleedharan",
  "N. K. Premachandran",
].map((AIPPM) => ({
  value: AIPPM,
  label: AIPPM,
}));
const Historic = [
  "Nick Fury",
  "Tony Stark",
  "Maria Hill",
  "Phil Coulson",
  "Alexander Pierce",
  "Carol Denvers",
  "Thor Odinson",
  "Stephen Strange",
  "Melinda May",
  "Natasha Romanoff",
  "Clint Barton",
  "Peggy Carter",
  "Sam Wilson",
  "James \"Rhodey\" Rhodes",
  "Jessica Drew",
  "Shuri",
  "Daisy Johnson",
  "Leopold Fitz",
  "Jemma Simmons",
  "Bobbi Morse (Mockingbird)",
  "Helmut Zemo",
  "Sharon Carter",
  "T'Challa",
  "Hank Pym",
  "Wanda Maximoff",
  "Bruce Banner",
  "Charles Xavier",
  "Reed Richards",
  "Valkyrie",
  "Okoye",
  "Magneto",
  "Hope van Dyne",
  "Hank McCoy"
]
.map((Historic) => ({
  value: Historic,
  label: Historic,
}));
export default function MUNmobileregistration({ fetchMuns }) {
  const [choice1, Setchoice1] = useState(false);
  const [choice2, Setchoice2] = useState(false);
  // const [choice3, Setchoice3] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    first_preference: "",
    second_preference: "",
    first_preference_choice_one: "",
    first_preference_choice_two: "",
    first_preference_choice_three: "",
    second_preference_choice_one: "",
    second_preference_choice_two: "",
    second_preference_choice_three: "",
    MUN_num:"0",
  });

  const navigate = useNavigate();
  // console.log(userDetails);

  const handleChange1 = (first_preference) => {
    setUser({ ...user, first_preference: first_preference?.value });
    Setchoice1(true);
  };
  const handleChange11 = (first_preference_choice_one) => {
    setUser({
      ...user,
      first_preference_choice_one: first_preference_choice_one?.value,
    });
  };
  const handleChange12 = (first_preference_choice_two) => {
    setUser({
      ...user,
      first_preference_choice_two: first_preference_choice_two?.value,
    });
  };
  const handleChange13 = (first_preference_choice_three) => {
    setUser({
      ...user,
      first_preference_choice_three: first_preference_choice_three?.value,
    });
  };
  const handleChange2 = (second_preference) => {
    setUser({ ...user, second_preference: second_preference?.value });
    Setchoice2(true);
  };
  const handleChange21 = (second_preference_choice_one) => {
    setUser({
      ...user,
      second_preference_choice_one: second_preference_choice_one?.value,
    });
  };
  const handleChange22 = (second_preference_choice_two) => {
    setUser({
      ...user,
      second_preference_choice_two: second_preference_choice_two?.value,
    });
  };
  const handleChange23 = (second_preference_choice_three) => {
    setUser({
      ...user,
      second_preference_choice_three: second_preference_choice_three?.value,
    });
  };

  const HandleChangeMUNnumber=(evt)=>{
    // const updatedUser=(...user, MUN_num:0);
    // setUser(updatedUser);

    const val=evt.target.value;
    setUser({...user, MUN_num:val});
    // console.log(typeof val);
  }

  useEffect(() => {
    setLoading(true);
    if (!localStorage.getItem("token") || !localStorage.getItem("user_id")) {
      navigate(`/login`);
    }else{
      setLoading(false);
    }
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userresponse = {
        first_preference: user.first_preference,
        second_preference: user.second_preference,
        first_preference_choice_one: user.first_preference_choice_one,
        first_preference_choice_two: user.first_preference_choice_two,
        first_preference_choice_three: user.first_preference_choice_three,
        second_preference_choice_one: user.second_preference_choice_one,
        second_preference_choice_two: user.second_preference_choice_two,
        second_preference_choice_three: user.second_preference_choice_three,
      };
      console.log(userresponse)
      const response = await axios.post("https://api2.thomso.in/apiV1/mun_register", userresponse);
      // const { data } = response;
      setLoading(false);
      if(response.status == 201){
          message.success("🎉 You are Registered Successully for MUN")
      }

      if(response.status == 200){
          message.info(response.data.message)
      }

    }catch (err) {
      setLoading(false);
      message.error("😓 Something went wrong please try again")
    }
  };

  return (
    <>
    {loading && <Loader />}
    <div className="mun-register">
      <div className="bgImg">
        <img src={BGimg} className="MobileBG" alt="" />
        <img src={BgMunReg} className="BGMunreg" alt="" />
      </div>
      <Navbar color="transparent" />
      <div className="RegistrationMain">
        <form onSubmit={(e) => onSubmit(e)}>
          {/* <> */}
        <div className="RegSmall">
          <div className="IRMUNmob">
            {/* <div className="IRMUNtext">
              <div className="Portfoliotext1">IRMUN/</div>
              <div className="Portfoliotext2">PORTFOLIO</div>
            </div> */}
            <div className="DelegateApp">
              <div className="DelegateApp1">
                DELEGATE APPLICATION FORM <br />
              </div>
              <div className="DelegateApp2">PORTFOLIO SELECTION</div>
            </div>
          </div>
          <div className="portfolio">
            <div className="Portfolio1">
              <div className="Portfoliohead">PORTFOLIO 1</div>
              <div className="Portfoliosubhead">
                <div className="selectcommittee">
                  Select a committee
                  <Select
                    styles={{
                      backgroundColor: "rgb(48, 77, 127)",
                    }}
                    name="first_preference"
                    className="Portfolio_options"
                    placeholder="None"
                    // value={user.first_preference}
                    onChange={handleChange1}
                    required
                    // styles={customStyles}
                    options={
                      user.second_preference ===
                      "UNITED NATIONS GENERAL ASSEMBLY (UNGA)"
                        ? Portfolio1
                        : user.second_preference ===
                          "ALL INDIA POLITICAL PARTY MEET (AIPPM)"
                        ? Portfolio2
                        : user.second_preference ===
                          "S.H.I.E.L.D (Strategic Homeland Intervention, Enforcement, and Logistics Division)"
                        ? Portfolio3
                        : Portfolio
                    }
                    isSearchable={false}
                  />
                </div>
                {choice1 &&
                (
                <><div>
                  Preference 1
                  <Select
                    name="first_preference_choice_one"
                    className="Portfolio_options"
                    placeholder=""
                    // value={user.first_preference_choice_one}
                    onChange={handleChange11}
                    required
                    // styles={customStyles}
                    options={
                      user.first_preference ===
                      "UNITED NATIONS GENERAL ASSEMBLY (UNGA)"
                        ? UNGA
                        : user.first_preference ===
                          "ALL INDIA POLITICAL PARTY MEET (AIPPM)"
                        ? AIPPM : Historic
                    }
                    isSearchable={false}
                  />
                </div>
                <div>
                  Preference 2
                  <Select
                    name="first_preference_choice_two"
                    className="Portfolio_options"
                    placeholder=""
                    // value={user.first_preference_choice_two}
                    onChange={handleChange12}
                    required
                    // styles={customStyles}
                    options={user.first_preference ===
                      "UNITED NATIONS GENERAL ASSEMBLY (UNGA)"
                        ? UNGA
                        : user.first_preference ===
                          "ALL INDIA POLITICAL PARTY MEET (AIPPM)"
                        ? AIPPM
                        : Historic}
                    isSearchable={false}
                  />
                </div>
                <div>
                  Preference 3
                  <Select
                    name="first_preference_choice_three"
                    className="Portfolio_options"
                    placeholder=""
                    // value={user.first_preference_choice_three}
                    onChange={handleChange13}
                    required
                    // styles={customStyles}
                    options={user.first_preference ===
                      "UNITED NATIONS GENERAL ASSEMBLY (UNGA)"
                        ? UNGA
                        : user.first_preference ===
                          "ALL INDIA POLITICAL PARTY MEET (AIPPM)"
                        ? AIPPM
                        : Historic}
                    isSearchable={false}
                  />
                </div></>)}
              </div>
            </div>
            <div className="Portfolio1">
              <div className="Portfoliohead">PORTFOLIO 2</div>
              <div className="Portfoliosubhead">
                <div className="gap_set">
                 <div>

                  Select a committee
                  <Select
                    name="second_preference"
                    className="Portfolio_options"
                    placeholder="None"
                    // value={user.second_preference}
                    onChange={handleChange2}
                    required
                    // styles={customStyles}
                    options={
                      user.first_preference ===
                      "UNITED NATIONS GENERAL ASSEMBLY (UNGA)"
                        ? Portfolio1
                        : user.first_preference ===
                          "ALL INDIA POLITICAL PARTY MEET (AIPPM)"
                        ? Portfolio2
                        : user.first_preference ===
                          "S.H.I.E.L.D (Strategic Homeland Intervention, Enforcement, and Logistics Division)"
                        ? Portfolio3
                        : Portfolio
                    }
                    isSearchable={false}
                  />
                 </div>
                  {choice2 &&
                  (<><div>
                  Preference 1
                  <Select
                    name="second_preference_choice_one"
                    className="Portfolio_options"
                    placeholder=""
                    // value={user.second_preference_choice_one}
                    onChange={handleChange21}
                    required
                    // styles={customStyles}
                    options={user.second_preference ===
                      "UNITED NATIONS GENERAL ASSEMBLY (UNGA)"
                        ? UNGA
                        : user.second_preference ===
                          "ALL INDIA POLITICAL PARTY MEET (AIPPM)"
                        ? AIPPM
                        : Historic}
                    isSearchable={false}
                  />
                </div>
                <div>
                  Preference 2
                  <Select
                    name="second_preference_choice_two"
                    className="Portfolio_options"
                    placeholder=""
                    // value={user.second_preference_choice_two}
                    onChange={handleChange22}
                    required
                    // styles={customStyles}
                    options={user.second_preference ===
                      "UNITED NATIONS GENERAL ASSEMBLY (UNGA)"
                        ? UNGA
                        : user.second_preference ===
                          "ALL INDIA POLITICAL PARTY MEET (AIPPM)"
                        ? AIPPM
                        : Historic}
                    isSearchable={false}
                  />
                </div>
                <div>
                  Preference 3
                  <Select
                    name="second_preference_choice_three"
                    className="Portfolio_options"
                    placeholder=""
                    // value={user.second_preference_choice_three}
                    onChange={handleChange23}
                    required
                    options={user.second_preference ===
                      "UNITED NATIONS GENERAL ASSEMBLY (UNGA)"
                        ? UNGA
                        : user.second_preference ===
                          "ALL INDIA POLITICAL PARTY MEET (AIPPM)"
                        ? AIPPM
                        : Historic}
                    isSearchable={false}
                  />
                </div></>)}
                </div>
              </div>
            </div>
          </div>

          <div className="MUNnum">
            <div className="Portfoliosubhead">No of MUNs you have done before? </div>
            <div className="">
              <input
                type="number"
                className="Portfolio_options MUNnuminp"
                name="mun_number"
                // placeholder="Enter MUN Number"
                // value={user.MUN_num}
                onChange={evt=>{HandleChangeMUNnumber(evt)}}
                required
              />
            </div>
          
            
          </div>
          {localStorage.getItem("token") &&
          <div className="sub-button">
            <button type="submit" className="subbutton">
            {loading ? (
                <CircularProgress color="inherit" size={20} />
              ) : (
                "SUBMIT"
              )}
            </button>
          </div>}
        </div>
      {/* </> */}
      </form>
      </div>
    </div>
    </>
  );
}
