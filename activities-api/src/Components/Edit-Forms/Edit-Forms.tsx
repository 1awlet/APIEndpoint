import { useState } from "react";
import { Activity } from "../../App"
import "./style.css";

type prop ={
    activities:Activity,
    cancelEditing:()=> void,
}

const EditForm = ({activities:selectedActivity,cancelEditing}:prop)=>{
    const initialState =  selectedActivity ?? {
    id:"",
    description: "",
    title: "",
    venue: "",
    date: "",
    
    }
    const [activity, setActivity] = useState(initialState)

    return(
        <div >
            <form > 
               
            <div className="editFormContainer">
            <h3>Edit for event with the id {activity.id}</h3>
            <input placeholder="Title" value={activity.title}/>
            <input placeholder="Description" value={activity.description}/>
            <input placeholder="venue" value={activity.venue}/>
            <input placeholder="venue" value={activity.date}/>
           
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
