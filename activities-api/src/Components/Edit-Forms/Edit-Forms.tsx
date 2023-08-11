import { Activity } from "../../App"
import "./style.css";

const EditForm = ()=>{

    return(
        <div >
            <form > 
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
