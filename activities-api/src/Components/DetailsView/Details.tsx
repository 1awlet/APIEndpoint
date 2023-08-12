import "./style.css"
import boardImg from "../../Assets/Images/board.jpeg"
import { Activity } from "../../App"
type prop ={
    activities:Activity
}
const Details = ({activities}:prop)=>{
    const {description,title, venue,}= activities;
   
    return(
            <div className="detailsContainter">
                <img src={boardImg} />
                <h3>{title}</h3>
                <p> 03-december-2023</p>
                <p>{venue}</p>
                <p>{description}</p>

                <div className="detailsbtns">
        <button className="edit">    Edit  </button>
        <button className="cancel">    Cancel  </button>

                </div>
            </div>
    )
}


export default Details;