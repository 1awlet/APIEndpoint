import { FormEventHandler, useState } from "react";

import "./style.css";
import { channel } from "diagnostics_channel";
import { ChangeEvent } from "react";
import { FormEvent } from "react";
import { useStore } from "../../Store/store";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
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

    const submitHandlar = (event:FormEvent)=>{
        event.preventDefault();
        if(activityId){
            activityStore.updateActivity(activity)
        }else{
            activityStore.createActivity(activity) 
        }
   

    }
    const changeHandlar = (event:ChangeEvent<HTMLInputElement>)=>{
        let {name, value}= event.target;
        setActivity({...activity, [name]:value})
    }
    return(
        <div >
            <form onSubmit={submitHandlar} > 
               
            <div className="editFormContainer">
            
            <input placeholder="Title" value={activity.title} name="title" onChange={changeHandlar} />
            <input placeholder="Description" value={activity.description} name="description" onChange={changeHandlar}/>
            <input placeholder="venue" value={activity.venue} name="venue" onChange={changeHandlar}/>
            <input placeholder="venue" type="date" value={activity.date} name="date" onChange={changeHandlar}/>
           
           <div> 
             <button onClick={activityStore.closeForm} type="button" className="cancel">Cancel </button>
            <button className="submitbtn" type="submit"> Submit </button>
            </div>
            </div>
            </form>
        </div>
    )

})

export default EditForm;
