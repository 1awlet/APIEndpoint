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
  const [filteredData, setFilteredData] = useState(activityStore.activities);
  const [userInput,setUserInput]= useState("");
  const [isLoading, setIsLoading]= useState(true);


  useEffect(()=>{
   activityStore.fetchActivities()

  },[activityStore])

  const {activities} =activityStore;


  const createOrEditActivityHandlar = async (activity:Activity)=>{
        if(activity.id){
      await agent.activitiesCrud.update(activity)

  
    }else{
      activity.id= uuid();
      await agent.activitiesCrud.add(activity)
     
    }

  }
  const DeleteActivity = (activityId:string)=>{
    const updatedActivity = activities.filter((x)=> x.id !== activityId );
    agent.activitiesCrud.delete(activityId)
   
  }
 



  return (
    <div className="App">
     <Navbar 
      createOrEditActivityHandlar={createOrEditActivityHandlar}
      />
{activityStore.loadingActivities ? 
<LoadingSpinner />

:
<DashBoard 
activities={activityStore.activities}  
createOrEditActivityHandlar={createOrEditActivityHandlar}
DeleteActivity={DeleteActivity}

/>
}
     
    </div>
  );
}

export default observer(App);
