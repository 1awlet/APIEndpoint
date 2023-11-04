import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Navbar from './Routes/Nav-Bar/navbar';
import DashBoard from './Components/DashBoard/dashBoard';
import {v4 as uuid} from "uuid";
import agent from './api-agent/agent';
import LoadingSpinner from './Components/LoadingComponent/loading';
import { useStore } from './Store/store';
import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Route, Router, Routes } from 'react-router-dom';
import Test from './Components/test';
import EditForm from './Components/Edit-Forms/Edit-Forms';
import Details from './Components/DetailsView/Details';
import Home from './Components/Home Page/Home';
export type Activity= {
  id:string,
  description:string,
  title:string,
  venue:string,
  date:string

}



function App() {
  const {activityStore} = useStore()

  useEffect(()=>{
   activityStore.fetchActivities()

  },[activityStore])



  return (
    <div className="App">

      <Routes>
      <Route index element={<Home />} />
       <Route path='/' element={<Navbar />} > 
      
       <Route path='add/:activityId?' element={<EditForm />} />
       <Route path='selectedActivity/:activityID' element={<Details />}/>
       <Route path='/act' element={<DashBoard />} />
       </Route>
      </Routes>
     
    </div>
  );
}

export default observer(App);
