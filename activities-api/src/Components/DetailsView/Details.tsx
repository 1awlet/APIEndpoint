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
   
    console.log(activityStore.editMode)


    return(
        <>
            <div className= {"detailsContainter"}>
                <img src={boardImg} />
                <h3>{selectedActivity?.title}</h3>
                <p> {selectedActivity?.date}</p>
                <p>{selectedActivity?.venue}</p>
                <p>{selectedActivity?.description}</p>

                <div className="detailsbtns">
        <button 
        onClick={()=> activityStore.openForm()} 
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
   
           </> 
    )
}


export default Details;