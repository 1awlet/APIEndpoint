import "./style.css"
import boardImg from "../../Assets/Images/board.jpeg"
import { Activity } from "../../App";
import EditForm from "../Edit-Forms/Edit-Forms";
import { useState } from "react";
type prop ={
    activities:Activity,
    CancelSelectedEvent: ()=> void,

}
const Details = ({activities, CancelSelectedEvent}:prop)=>{
    const [isEditOn, setIsEditOn] = useState(false);
   
    const {id, description,title, venue}= activities;

    const CancelEditing = ()=>{
        setIsEditOn(false)
    }

    return(
        <>
            <div className= {isEditOn ?  "detailsContainter hideDetails" : "detailsContainter"}>
                <img src={boardImg} />
                <h3>{title}</h3>
                <p> 03-december-2023</p>
                <p>{venue}</p>
                <p>{description}</p>

                <div className="detailsbtns">
        <button 
        onClick={()=> setIsEditOn(true) } 
        className="edit"
        >  
                  Edit  </button>
        <button 
        onClick={CancelSelectedEvent} 
        className="cancel">    
        Cancel  
        </button>

                </div>

            </div>
          { isEditOn && <EditForm activities ={activities} cancelEditing={CancelEditing} /> } 
           </> 
    )
}


export default Details;