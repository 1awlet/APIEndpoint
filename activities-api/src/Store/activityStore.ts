import {makeAutoObservable, makeObservable, observable, runInAction} from "mobx"
import { Activity } from "../App";
import agent from "../api-agent/agent";
import {v4 as uuid} from "uuid";
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

    openEditMode = ()=>{
        this.editMode=true;
    }

    createActivity = async (activity:Activity)=>{
        activity.id= uuid()
        this.setLoadingState(true)
        try {
            await agent.activitiesCrud.add(activity)
            runInAction(()=>{
                this.activities.push(activity)
                this.selectedActivity=activity;
                this.editMode=false;
                this.setLoadingState(false)
            })
        } catch (error) {
            console.log(Error)
            this.selectedActivity=undefined;
        }
    }


    updateActivity = async(activity:Activity)=>{
        this.setLoadingState(true)
        try {
            agent.activitiesCrud.update(activity);
            runInAction(()=>{
                this.activities=[...this.activities.filter((x)=>x.id != activity.id), activity]
                this.editMode=false;
                this.selectedActivity=activity;
                this.setLoadingState(false)
            })
        } catch (error) {
            console.log(error)
        
        }
    }

    deleteActivity = async(id:string)=>{
        this.setLoadingState(true)
        try {
            agent.activitiesCrud.delete(id);
            runInAction(()=>{
                this.activities=this.activities.filter(x => x.id != id)
                this.editMode=false;
                this.selectedActivity=undefined;
                this.setLoadingState(false)
            })
        } catch (error) {
            console.log(error)
        }

    }
}