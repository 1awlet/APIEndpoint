import { useState, useEffect } from "react";

import SingleActivity from "../SingleActivity/activity";
import "./style.css";
import Details from "../DetailsView/Details";
import EditForm from "../Edit-Forms/Edit-Forms";
import { useStore } from "../../Store/store";
import { observer } from "mobx-react-lite";
export type Activity= {
    id:string,
    description:string,
    title:string,
    venue:string,
    date:string
  
  }
type prop = {
    activities: Activity[],

}



const  Activities = observer(({activities}: prop)=>  {
    const [filteredData, setFilteredData] = useState(activities);
    const [userInput, setUserInput] = useState("");
    const [selectedEvent, setSelectedEvent] = useState<Activity | undefined>(undefined);
    
    const {activityStore} = useStore();
    const searchHandlar = (event: any) => {
        const value = event.target.value;
        setUserInput(value);
    }

    const CancelSelectedEvent = () => {
        setSelectedEvent(undefined);
    }
  
    return (
        <div>
          
            {
            activities.map((item) => (
                <div className="All-activites" key={item.id}>
                    <SingleActivity 
                    activity={item} 
                    />     
                    </div>

            ))
            }

            {
             activityStore.selectedActivity &&  activityStore.editMode==false &&
                <Details 
                />
            }

            {
                activityStore.editMode&& 
                <EditForm 
                activities ={activityStore.selectedActivity} 
                 />
            }

        </div>
    )
})

export default Activities;