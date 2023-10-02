import {makeAutoObservable, makeObservable, observable} from "mobx"
import { Activity } from "../App";
import agent from "../api-agent/agent";
export default class ActivityStore{
    activities:Activity[] = [];
    loadingActivities=false;
    selectedActivity: Activity | undefined = undefined;
    editMode = false
    constructor(){
        makeAutoObservable(this)
    }

    fetchActivities = async ()=>{
        this.setLoadingState(true)
    try {
        const activities= await agent.activitiesCrud.list();
    
        activities.forEach((activity)=>{
            activity.date=activity.date.split("T")[0]
            this.activities.push(activity)
        })

        this.setLoadingState(false)
        
    } catch (error) {
        console.log(error)
        this.setLoadingState(false)
    }
   
    }


    setLoadingState = (state:boolean)=>{
        this.loadingActivities=state;
    }

    setSelectedActivity = (id:string)=>{
        console.log(id)
        this.selectedActivity= this.activities.find((activity)=> activity.id == id);
    }

    cancellActivity = ()=>{
        this.selectedActivity= undefined;
    }

    openForm = (id?:string)=>{
        id ? this.setSelectedActivity(id) : this.cancellActivity()
        this.editMode=true
    }

    closeForm= ()=>{
        this.editMode=false
    }
}