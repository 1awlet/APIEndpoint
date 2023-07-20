import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';


export type Activity= {
  id:string,
  description:string,
  title:string,
  venue:string

}

function App() {
  const [activities, setactivities]= useState<Activity[]>([]);

  const [filteredData, setFilteredData] = useState<Activity[]>(activities);
  const [userInput,setUserInput]= useState("");

  useEffect(()=>{
   axios.get("http://localhost:5100/api/activities").then((res)=> {
    setactivities(res.data)
    
   } 
   )
  },[])
console.log(filteredData)
  const searchHandlar = (event:any)=>{
    const value= event.target.value;

    
    setUserInput(value);

  }

  useEffect(()=>{


  const newFiltered = activities.filter((item)=>{
   return item.title.toLocaleLowerCase().includes(userInput.toLowerCase());
  })

 setFilteredData(newFiltered)
  }, [userInput, activities]);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
