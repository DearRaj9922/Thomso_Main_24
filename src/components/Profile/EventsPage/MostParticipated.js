import React, { useState, useEffect } from "react";
import "./eventmainpage.css";
import EventSideMenu from "./EventSideMenu";
import "./eventcarddisplay.css";
import EventCard from "./NewEventCard/NewEventcard.js";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import EventMainPageMob from "./EventMainPageMob";
import { Store } from "../../../Config/Store";
import { connect } from "react-redux";
import { escapeRegex } from "./helper";
import { ImCross } from "react-icons/im";
// import Navbar2 from "../../EventsNavbar/Eventsnavbar";
// import eventsback2 from "../../../assets/profileback.webp";

const EventMainPage = ({ events }) => {
  const { dispatch } = Store;
  const [data, setData] = useState();
  const [category, setCategory] = useState();
  // const [eventdata, setEventData] = useState();
  const [categoryId, setCategoryId] = useState("");
  const [search, setSearch] = useState("");
  const [isNew, setIsNew] = useState(false);

  const getData = (category) => {
    if (category === "") {
      category = 0;
    }
    if(category===18){

            axios.get(`https://api2.thomso.in/apiV1/event`).then((res)=>{
            const paidevent = res.data;
              setData(paidevent)
              setIsNew(true);
              console.log("paid event", paidevent)
              dispatch({
            type: "SET_EVENTS",
            payload: {
              ...events,
              [category]: paidevent,
            },
          });
            })

    }
    else{
      if (events[category]) {
      setData(events[category]);
    } else {
      axios
        .get(
          `https://api2.thomso.in/apiV1/event?id=&category=${category === 0 ? "" : category}&status=true&is_zonal=`
        )
        .then((response) => {
          setData(response.data);
        //   console.log("loda", response.data)
          
          console.log("category", category)


             dispatch({
            type: "SET_EVENTS",
            payload: {
              ...events,
              [category]: response.data,
            },
          });



        });
    }
    }

  };
  // useEffect(()=>{
  //   console.log(category)
  // },[category])
  const getCategory = () => {
    axios.get(`https://api2.thomso.in/apiV1/category?status=true`).then((response) => {
      setCategory(response.data);
      console.log("data",response.data);
    });
  };
  useEffect(() => {
    getData(18);
    getCategory();
  }, []);

  const changeCategory = (category) => {
    setCategoryId(category);
    getData(category);
    console.log(category);
  };

  const checkSearch = (pName) => {
    const regExp = new RegExp(escapeRegex(search), "i");
    return regExp.test(pName);
  };

  // console.log(categoryId);

  return (
    <>
      <div className="EMP-container-new" id="event-page">
      <div className="ECD-card-Display-new">
        {/* {isNew?( */}
        <div className="ecdwrap">
            <EventCard
            data={data?.filter((item) => item.name=== "Vogue"||item.name=== "MMT" || item.name=== "Footlooose (Allegro)" ||item.name=== "Footlooose (Natraj'Cradle)" ||item.name=== "Footlooose (Nritya)" ||item.name=== "Footlooose (Nine Muses)" ||item.name=== "Footlooose (Two-to-Tango)" || item.name=== "Nukkad Natak" || item.name=== "Battle of Bands" || item.name=== "Gully War" || item.name=== "TGT" || item.name=== "Seiger")}
            // data={
            //   search === ""
            //     ? data
            //     : data?.filter((item) => item.id===18)
            // }
          />
        {/* ):(<></>)} */}
        </div>
              </div>

        {/* <div className="newevents">
          <EventCard 
          data={category===17?data:""}/>
        </div> */}
      </div>
      <div className="Event-MObile-View">
        <EventMainPageMob
        disp="none"
          data={data?.filter((item) => item.name=== "Vogue"||item.name=== "MMT" || item.name=== "Footlooose (Allegro)" ||item.name=== "Footlooose (Natraj'Cradle)" ||item.name=== "Footlooose (Nritya)" ||item.name=== "Footlooose (Nine Muses)" ||item.name=== "Footlooose (Two-to-Tango)" || item.name=== "Nukkad Natak" || item.name=== "Battle of Bands" || item.name=== "Gully War" || item.name=== "TGT" || item.name=== "Seiger")}
          category={category}
          activeCategory={categoryId}
          changeCategory={changeCategory}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  let events = state.user.total_events;

  return {
    events,
  };
};

export default connect(mapStateToProps, null)(EventMainPage);
