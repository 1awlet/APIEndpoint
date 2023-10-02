import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Navbar from './Routes/Nav-Bar/navbar';
import DashBoard from './Components/Activities/Dashboard';
import {v4 as uuid} from "uuid";
import agent from './api-agent/agent';
import LoadingSpinner from './Components/LoadingComponent/loading';
import { useStore } from './Store/store';
import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';
export type Activity= {
  id:string,
  description:string,
  title:string,
  venue:string,
  date:string

}



function App() {
  const {activityStore} = useStore()
  const [activities, setactivities]= useState<Activity[]>([]);
  const [filteredData, setFilteredData] = useState(activities);

  const [userInput,setUserInput]= useState("");
  const [isLoading, setIsLoading]= useState(true);
  useEffect(()=>{
    agent.activitiesCrud.list().then((res)=> {
      let activitiesEdited:Activity[]=[]
      res.forEach((activity)=>{
        activity.date= activity.date.split("T")[0]
        activitiesEdited.push(activity)
      })
    setactivities(activitiesEdited) 
    setIsLoading(false)
   }
   )
  },[])

 


  const createOrEditActivityHandlar = async (activity:Activity)=>{
    const updateActivity =[...activities.filter((x)=> x.id != activity.id), activity]
    if(activity.id){
      await agent.activitiesCrud.update(activity)
      setactivities(updateActivity)
  
    }else{
      activity.id= uuid();
      await agent.activitiesCrud.add(activity)
      setactivities([...activities, activity])
    }

  }
  const DeleteActivity = (activityId:string)=>{
    const updatedActivity = activities.filter((x)=> x.id !== activityId );
    agent.activitiesCrud.delete(activityId)
    setactivities(updatedActivity)
  }
 



  return (
    <div className="App">

      <h2>{activityStore.title}</h2>
      <button onClick={activityStore.setTitle}>Click to add ok to the title</button>
      <Navbar 
      createOrEditActivityHandlar={createOrEditActivityHandlar}
      />
{isLoading ? 
<LoadingSpinner />

:
<DashBoard 
activities={activities}  
createOrEditActivityHandlar={createOrEditActivityHandlar}
DeleteActivity={DeleteActivity}

/>
}
     
    </div>
  );
}

export default observer(App);
