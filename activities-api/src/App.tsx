import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Navbar from './Routes/Nav-Bar/navbar';
import DashBoard from './Components/Activities/Dashboard';

export type Activity= {
  id:string,
  description:string,
  title:string,
  venue:string

}

function App() {
  const [activities, setactivities]= useState<Activity[]>([]);
  const [filteredData, setFilteredData] = useState(activities);
  const [userInput,setUserInput]= useState("");

  useEffect(()=>{
   /*axios.get<Activity[]>("http://localhost:5100/api/activities").then((res)=> {
    setactivities(res.data)
    
   }
   ) */
  },[])

  const searchHandlar = (event:any)=>{
    const value= event.target.value;

    
    setUserInput(value);

  }

 


  return (
    <div className="App">
      <Navbar />
      <DashBoard activities={activities} />
    </div>
  );
}

export default App;
