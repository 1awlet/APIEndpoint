import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Navbar from './Routes/Nav-Bar/navbar';
import DashBoard from './Components/Activities/Dashboard';
import {v4 as uuid} from "uuid";


export type Activity= {
  id:string,
  description:string,
  title:string,
  venue:string,
  date:string

}

const Data=[
  {
    id:"34",
    description:"wandering in forest",
    title: "The lost boy",
    venue:"small",
    date:"2018-04-19"
   
  },
  {
    id:"3",
    description:"wandering in space",
    title: "Moon landing",
    venue:"Big ",
    date:"2018-06-9"
  },
  {
    id:"4",
    description:"wandering in air",
    title: "The flying boy",
    venue:"Medium ",
    date:"2018-03-19"
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

  const createOrEditActivityHandlar = (activity:Activity)=>{
    const updateActivity =[...activities.filter((x)=> x.id != activity.id), activity]


    if(activity.id){
      setactivities(updateActivity)
    }else{
      setactivities([...activities, {...activity, id:uuid()}])
    }

  }
 
  console.log(activities)


  return (
    <div className="App">
      <Navbar createOrEditActivityHandlar={createOrEditActivityHandlar}/>
      <DashBoard activities={activities}  createOrEditActivityHandlar={createOrEditActivityHandlar}/>
    </div>
  );
}

export default App;
