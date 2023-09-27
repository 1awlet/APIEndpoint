import "./style.css"
import boardImg from "../../Assets/Images/board.jpeg"
import { Activity } from "../../App";
import EditForm from "../Edit-Forms/Edit-Forms";
import { useState } from "react";
type prop ={
    activities:Activity,
    CancelSelectedEvent: ()=> void,
    createOrEditActivityHandlar:(activity:Activity)=> void,
    CancelEditing: ()=> void,
    isEditOn: boolean,
    setEditOn: ()=> void

}

const Details = ({activities, CancelSelectedEvent,createOrEditActivityHandlar,CancelEditing,isEditOn,setEditOn }:prop)=>{
   
   
    const {id, description,title, venue}= activities;

    

    return(
        <>
            <div className= {isEditOn ?  "detailsContainter hideDetails" : "detailsContainter"}>
                <img src={boardImg} />
                <h3>{title}</h3>
                <p> 03-december-2023</p>
                <p>{venue}</p>
                <p>{description}</p>

                <div className="detailsbtns">
        <button 
        onClick={setEditOn } 
        className="edit"
        >  
                  Edit  </button>
        <button 
        onClick={CancelSelectedEvent} 
        className="cancel">    
        Cancel  
        </button>

                </div>

            </div>
          { isEditOn && <EditForm activities ={activities} CancelEditing={CancelEditing} createOrEditActivityHandlar={createOrEditActivityHandlar} /> } 
           </> 
    )
}


export default Details;