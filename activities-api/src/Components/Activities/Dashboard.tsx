import { useState,useEffect } from "react";
import {Activity} from '../../App';


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
            setFilteredData(newFiltered)
        }) 
    }, [userInput, filteredData])






    return(
      
 <div>
        <div  className='SearchBar'>
      <h3>Search for activity</h3>

      <input type='text'  onChange={searchHandlar}/>
        </div>

        <div>
          {filteredData.map((activity)=>(
            //const {title} = activity;
           
              <div key={activity.id}>
                    <h2>{activity.title}</h2>
              </div>
         
          ))}
        </div>
    </div>
    )
}


export  default DashBoard;
