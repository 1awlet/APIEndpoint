import { useState,useEffect } from "react";
import {Activity} from '../../App';
import SingleActivity from "../SingleActivity/activity";
import "./style.css";
import Details from "../DetailsView/Details";
type prop={
    activities:Activity[]
}



const DashBoard = ({activities}:prop)=>{
    const [filteredData, setFilteredData] = useState(activities);
    const [userInput,setUserInput]= useState("");
   
    const searchHandlar = (event:any)=>{
        const value= event.target.value;
      
        setUserInput(value);
    
      }

     
      useEffect(()=>{
        const newFiltered = activities.filter((item)=>{
            return item.title.toLocaleLowerCase().includes(userInput.toLowerCase());
        }
    
        ) 
        setFilteredData(newFiltered)
    }, [userInput, activities])






    return(
      
 <div>
        <div  className='SearchBar'>
      <h3>Search for activity</h3>

      <input type='text'  onChange={searchHandlar}/>
        </div>
   
        <SingleActivity activity={filteredData}/>
<Details />
    </div>
    )
}


export  default DashBoard;
