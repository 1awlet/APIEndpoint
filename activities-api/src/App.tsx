import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Navbar from './Routes/Nav-Bar/navbar';
import DashBoard from './Components/Activities/Dashboard';

export type Activity= {
  id:number,
  description:string,
  title:string,
  venue:string

}

const Data=[
  {
    id:34,
    description:"wandering in forest",
    title: "The lost boy",
    venue:"small",
   
  },
  {
    id:3,
    description:"wandering in space",
    title: "Moon landing",
    venue:"Big "
  },
  {
    id:4,
    description:"wandering in air",
    title: "The flying boy",
    venue:"Medium "
  },
]

function App() {
  const [activities, setactivities]= useState<Activity[]>(Data);
  const [filteredData, setFilteredData] = useState(activities);
  const [userInput,setUserInput]= useState("");

  useEffect(()=>{
   /*axios.get<Activity[]>("http://localhost:5100/api/activities").then((res)=> {
    setactivities(res.data)
    
   }
   ) */
  },[])


 


  return (
    <div className="App">
      <Navbar />
      <DashBoard activities={activities} />
    </div>
  );
}

export default App;
