import React, { useEffect } from 'react'
import "./NewEventcard.css";
// import cdbg from "../../../../assets/eventcardbg.webp";
import default_image from "../../../../assets/events.png";
import { useNavigate } from 'react-router-dom';

const NewEventcard = ({data}) => {
    const navigate = useNavigate();
    
  const onHandleClick = (e) => {
    navigate(`/events/${e}`);
  };
  useEffect(()=>{
    console.log("data",data)
  })
  return (
    <>
    {data &&
        data?.map((datas, index) => {
          if(datas.id<=5){
            return(<></>)
          }
          else{

          return (
            <>
    <div 
    key={index}
    onClick={() => onHandleClick(datas?.id)}
    className='new_ev_main'>
        {/* <img src={cdbg} className='newcdbg' alt= "newcdbg"/> */}
        <div className="newcdwrap">
        <div className="newimgsec">
            <img src={datas?.image == null ? default_image : datas?.image}
            className="newimg"
             alt="newimg"
             id="img_1__card_ec"
             />
                <div className="hidwrap">
            <div className="newhiddensec">
                <p>{datas?.description.slice(0, 100)}</p>
                <button className='newcdbutton'>Know More</button>
                </div>
            </div>

        </div>
        <div className="newcdtitle"
        style={{color:"black"}}>
        {datas?.solo_team ? (
                      <h2>
                        {datas?.name.slice(0,15)}...({datas?.solo_team})
                      </h2>
                    ) : (
                      <h2>{datas?.name}</h2>
                    )}
        </div>
        </div>
      
    </div>
    </>
          )};
        })}
    </>
  )
}

export default NewEventcard
