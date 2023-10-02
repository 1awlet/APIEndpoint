import "./style.css"
import boardImg from "../../Assets/Images/board.jpeg"
import { Activity } from "../../App";
import EditForm from "../Edit-Forms/Edit-Forms";
import { useState } from "react";
import { useStore } from "../../Store/store";
type prop ={
  
    createOrEditActivityHandlar:(activity:Activity)=> void,
  
    

}


const Details = ({createOrEditActivityHandlar }:prop)=>{

    const [isEditOn, setIsEditOn] = useState(false);
    const {activityStore} = useStore()
    const {selectedActivity}= activityStore;
    const CancelEditing = ()=>{
        setIsEditOn(false)
      }
    

    const setEditOn = ()=>{
          setIsEditOn(true)
    }
   


   console.log( activityStore.selectedActivity)
    

    return(
        <>
            <div className= {activityStore.editMode ?  "detailsContainter hideDetails" : "detailsContainter"}>
                <img src={boardImg} />
                <h3>{selectedActivity?.title}</h3>
                <p> {selectedActivity?.date}</p>
                <p>{selectedActivity?.venue}</p>
                <p>{selectedActivity?.description}</p>

                <div className="detailsbtns">
        <button 
        onClick={setEditOn } 
        className="edit"
        >  
                  Edit  </button>
        <button 
     
        className="cancel">    
        Cancel  
        </button>

                </div>

            </div>
          { isEditOn && <EditForm activities ={selectedActivity} CancelEditing={CancelEditing} createOrEditActivityHandlar={createOrEditActivityHandlar} /> } 
           </> 
    )
}


export default Details;