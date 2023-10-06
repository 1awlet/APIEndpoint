import { FormEventHandler, useEffect, useState } from "react";

import "./style.css";
import { channel } from "diagnostics_channel";
import { ChangeEvent } from "react";
import { FormEvent } from "react";
import { useStore } from "../../Store/store";
import { observer } from "mobx-react-lite";
import { useNavigate, useParams } from "react-router-dom";
import FormInput from "../FormInputs/formInputs";
export type Activity= {
    id:string,
    description:string,
    title:string,
    venue:string,
    date:string
  
  }
type prop ={
    activities?:Activity | undefined 
}

const EditForm = observer(({activities:selectedActivity}:prop)=>{
    const initialState =  selectedActivity ?? {
    id:"",
    description: "",
    title: "",
    venue: "",
    date: "",
    
    }

    const {activityId} = useParams();
    
    console.log(activityId)
    const {activityStore}= useStore()
    const {createActivity}=activityStore;
    const [activity, setActivity] = useState(initialState)
    const Navigate = useNavigate()

    const getActivity:Activity | undefined = activityStore.activities.find((x:Activity)=> x.id ==activityId)
    useEffect(()=>{
      
            const findActivity= activityStore.activities.find(x => x.id == activityId);
            if(findActivity){
                setActivity(findActivity)
        }
        
    },[activityId,activityStore])


  
    return(
        <div >

            {
             activityId?
                   activityStore.activities.map((activity)=>{
                    if(activity.id == activityId){
                        return(
                        
                            <FormInput selectedActivity={activity}  key={activityId}/>
                        )
                    }
                   })
                    :
                    <FormInput />
                }

               
            
    
        </div>
    )

})

export default EditForm;
