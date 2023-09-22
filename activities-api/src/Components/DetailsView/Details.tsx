import "./style.css"
import boardImg from "../../Assets/Images/board.jpeg"
import { Activity } from "../../App";
import EditForm from "../Edit-Forms/Edit-Forms";
import { useState } from "react";
type prop ={
    activities:Activity | undefined,
    CancelSelectedEvent: ()=> void
}
const Details = ({activities:selectedActivity, CancelSelectedEvent}:prop)=>{
    const [isEditOn, setIsEditOn] = useState(false);
    const [activity, setActivities]= useState();

    const intiaSate= selectedActivity ?? {
        id: "",
        description: "",
        title: "",
        venue: "",
        date: "",
    }
    
 const CancelEditing = ()=>{
    setIsEditOn(false)
 }
    return(
        <>
            <div className="detailsContainter">
                <img src={boardImg} />
                <h3></h3>
                <p> 03-december-2023</p>
                <p></p>
                <p></p>

                <div className="detailsbtns">
        <button onClick={()=> setIsEditOn(true)} className="edit">  
                  Edit  </button>
        <button onClick={CancelSelectedEvent} className="cancel">    Cancel  </button>

                </div>

            </div>
          { isEditOn && <EditForm id={2} cancelEditing={CancelEditing} /> } 
           </> 
    )
}


export default Details;