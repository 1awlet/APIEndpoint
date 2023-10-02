import {makeAutoObservable, makeObservable, observable} from "mobx"
import { Activity } from "../App";
import agent from "../api-agent/agent";
export default class ActivityStore{
    activities:Activity[] = [];
    loadingActivities=false;

    constructor(){
        makeAutoObservable(this)
    }

    fetchActivities = async ()=>{
    this.loadingActivities= true;
    try {
        const activities= await agent.activitiesCrud.list();
    
        activities.forEach((activity)=>{
            activity.date=activity.date.split("T")[0]
            this.activities.push(activity)
        })

        this.loadingActivities= false;
        
    } catch (error) {
        console.log(error)
        this.loadingActivities= false;
    }
   
    }
}