import "./style.css"
import boardImg from "../../Assets/Images/board.jpeg"

import EditForm from "../Edit-Forms/Edit-Forms";
import { useEffect, useState } from "react";
import { useStore } from "../../Store/store";
import { useNavigate, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
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


const Details = observer(( )=>{

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
        activityID ? 
          activityStore.activities.map((activity)=>{
            return(
              
            )
          })

          :
          <>
          </>
      }
      
        </> 
    )
})


export default Details;