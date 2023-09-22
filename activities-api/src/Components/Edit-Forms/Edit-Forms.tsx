import { FormEventHandler, useState } from "react";
import { Activity } from "../../App"
import "./style.css";
import { channel } from "diagnostics_channel";
import { ChangeEvent } from "react";
import { FormEvent } from "react";

type prop ={
    activities:Activity,
    cancelEditing:()=> void,
    createOrEditActivityHandlar: (activity:Activity)=> void
}

const EditForm = ({activities:selectedActivity,cancelEditing, createOrEditActivityHandlar}:prop)=>{
    const initialState =  selectedActivity ?? {
    id:"",
    description: "",
    title: "",
    venue: "",
    date: "",
    
    }
    const [activity, setActivity] = useState(initialState)

    const submitHandlar = (event:FormEvent)=>{
        event.preventDefault();
        createOrEditActivityHandlar(activity)

    }
    const changeHandlar = (event:ChangeEvent<HTMLInputElement>)=>{
        let {name, value}= event.target;
        setActivity({...activity, [name]:value})
    }
    return(
        <div >
            <form onSubmit={submitHandlar} > 
               
            <div className="editFormContainer">
            <h3>Edit for event with the id {activity.id}</h3>
            <input placeholder="Title" value={activity.title} name="title" onChange={changeHandlar} />
            <input placeholder="Description" value={activity.description} name="description" onChange={changeHandlar}/>
            <input placeholder="venue" value={activity.venue} name="venue" onChange={changeHandlar}/>
            <input placeholder="venue" value={activity.date} name="date" onChange={changeHandlar}/>
           
           <div> 
             <button onClick={cancelEditing} className="cancel">Cancel </button>
            <button className="submitbtn" type="submit"> Submit </button>
            </div>
            </div>
            </form>
        </div>
    )

}

export default EditForm;
