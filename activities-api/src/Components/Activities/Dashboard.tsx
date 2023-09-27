import { useState, useEffect } from "react";
import { Activity } from '../../App';
import SingleActivity from "../SingleActivity/activity";
import "./style.css";
import Details from "../DetailsView/Details";
import EditForm from "../Edit-Forms/Edit-Forms";
type prop = {
    activities: Activity[],
    createOrEditActivityHandlar: (activity:Activity)=>void,
    CancelEditing: ()=> void,
    isEditOn: boolean,
    setEditOn: ()=> void,
    SelectedEvent: (id:string)=> void,
    CancelSelectedEvent: ()=> void
    selectedEvent?:Activity
    DeleteActivity: (activityId:string)=> void
}

const DashBoard = (
    { activities, createOrEditActivityHandlar, CancelEditing, isEditOn,setEditOn,SelectedEvent,CancelSelectedEvent,
        DeleteActivity,
        selectedEvent }
    : prop) => {
    const [filteredData, setFilteredData] = useState(activities);
    const [userInput, setUserInput] = useState("");


    const searchHandlar = (event: any) => {
        const value = event.target.value;

        setUserInput(value);

    }
    useEffect(() => {
        const newFiltered = activities.filter((item) => {
            return item.title.toLocaleLowerCase().includes(userInput.toLowerCase());
        }
        )
        setFilteredData(newFiltered)
    }, [userInput, activities])

    return (
        <div>
            <div className='SearchBar'>
                <h3>Search for activity</h3>
                <input type='text' onChange={searchHandlar} />
            </div>

            {
            filteredData.map((item) => (
                <div className="All-activites" key={item.id}>
                    <SingleActivity 
                    activity={item} 
                    selectEvent={SelectedEvent}
                    DeleteActivity={DeleteActivity}
                    />
                    
                    </div>

            ))
            }

            {
                selectedEvent && 
                <Details 
                activities={selectedEvent} 
                CancelSelectedEvent={CancelSelectedEvent}
                createOrEditActivityHandlar={createOrEditActivityHandlar}
                CancelEditing={CancelEditing}
                isEditOn= {isEditOn}
                setEditOn={setEditOn}
                />
            }

        </div>
    )
}


export default DashBoard;
