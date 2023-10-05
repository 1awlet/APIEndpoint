import "./style.css"
import boardImg from "../../Assets/Images/board.jpeg"

import EditForm from "../Edit-Forms/Edit-Forms";
import { useEffect, useState } from "react";
import { useStore } from "../../Store/store";
import { useNavigate, useParams } from "react-router-dom";
export type Activity= {
    id:string,
    description:string,
    title:string,
    venue:string,
    date:string
  
  }
type prop ={
  
    createOrEditActivityHandlar:(activity:Activity)=> void,
  
    

}


const Details = ( )=>{

    const [isEditOn, setIsEditOn] = useState(false);
    const {activityStore} = useStore()
    const {activityID} = useParams();
    const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>()
    //const {selectedActivity}= activityStore;
    const CancelEditing = ()=>{
        setIsEditOn(false)
      }
 
      useEffect(()=>{
        const chosenActivity = activityStore.activities.find(x=> x.id ==activityID)
        setSelectedActivity(chosenActivity)
      },[])

    const setEditOn = ()=>{
          setIsEditOn(true)
    }
   const Navigate = useNavigate()
    console.log(activityStore.editMode)
    const handleForm= ()=>{
        Navigate(`add/${activityID}?`)
    }

    return(
        <>
        {
            selectedActivity&& 

            <div className= {"detailsContainter"}>
            <img src={boardImg} />
            <h3>{selectedActivity?.title}</h3>
            <p> {selectedActivity?.date}</p>
            <p>{selectedActivity?.venue}</p>
            <p>{selectedActivity?.description}</p>

            <div className="detailsbtns">
    <button 
    onClick={ ()=> Navigate(`/add/${activityID}`)} 
    className="edit"
    >  
              Edit  </button>
    <button 
    onClick={activityStore.cancellActivity}
    className="cancel">    
    Cancel  
    </button>

            </div>

        </div>
        }

   
           </> 
    )
}


export default Details;