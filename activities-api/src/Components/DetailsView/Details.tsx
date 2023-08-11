import "./style.css"
import boardImg from "../../Assets/Images/board.jpeg"

const Details = ()=>{

    return(
            <div className="detailsContainter">
                <img src={boardImg} />
                <h3>Past events</h3>
                <p> 03-december-2023</p>
                <p> Last seen: yestarday</p>

                <div className="detailsbtns">
        <button className="edit">    Edit  </button>
        <button className="cancel">    Cancel  </button>
    ok 
                </div>
            </div>
    )
}


export default Details;