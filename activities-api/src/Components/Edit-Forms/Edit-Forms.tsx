import { Activity } from "../../App"
import "./style.css";

type prop ={
    id:number,
    cancelEditing:()=> void,

}
const EditForm = ({id,cancelEditing}:prop)=>{

    return(
        <div >
            <form > 
               
            <div className="editFormContainer">
            <h3>Edit for event with the id {id}</h3>
            <input placeholder="Title"/>
            <input placeholder="Description"/>
            <input placeholder="venue"/>
           
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
