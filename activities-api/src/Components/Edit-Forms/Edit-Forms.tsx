import { Activity } from "../../App"
import "./style.css";

type prop ={
    id:number

}
const EditForm = ({id}:prop)=>{

    return(
        <div >
            <form > 
                <h3>Edit for event with the id {id}</h3>
            <div className="editFormContainer">
            <input placeholder="Title"/>
            <input placeholder="Description"/>
            <input placeholder="venue"/>
           
           <div>  <button className="cancel">Cancel </button>
            <button className="submitbtn" type="submit"> Submit </button>
            </div>
            </div>
            </form>
        </div>
    )

}

export default EditForm;
