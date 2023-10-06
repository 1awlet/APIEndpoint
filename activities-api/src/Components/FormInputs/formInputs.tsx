import { observer } from "mobx-react-lite"
import { Activity } from "../../App"
import { useNavigate } from "react-router-dom"
import { useStore } from "../../Store/store"
import { FormEvent, useState } from "react"
import { ChangeEvent } from "react"
type prop={
    selectedActivity?:Activity | undefined
}
const FormInput = observer(({selectedActivity}:prop)=>{
    const initialState =  selectedActivity ?? {
        id:"",
        description: "",
        title: "",
        venue: "",
        date: "",
        
        }
    const Navigate = useNavigate();
    const [activity, setActivity] = useState(initialState)
    const {activityStore} = useStore()

    console.log(activity)
    const changeHandlar = (event:ChangeEvent<HTMLInputElement>)=>{
        let {name, value}= event.target;
        setActivity({...activity, [name]:value})
    }
    const submitHandlar = (event:FormEvent)=>{
        event.preventDefault();
        if(activity.id){
            activityStore.updateActivity(activity).then(()=>{
                Navigate(`/selectedActivity/${activity.id}`) 
            })
        }else{
            activityStore.createActivity(activity).then(()=>{
                Navigate(`/selectedActivity/${activity.id}`) 
            })}
    }
    return(
        <form onSubmit={submitHandlar} > 

        <div className="editFormContainer">
        
        <input placeholder="Title" value={activity.title} name="title" onChange={changeHandlar} />
        <input placeholder="Description" value={activity.description} name="description" onChange={changeHandlar}/>
        <input placeholder="venue" value={activity.venue} name="venue" onChange={changeHandlar}/>
        <input placeholder="venue" type="date" value={activity.date} name="date" onChange={changeHandlar}/>
       
       <div> 
         <button onClick={()=>Navigate(`/selectedActivity/${activity.id}`)} type="button" className="cancel">Cancel </button>
        <button className="submitbtn" type="submit"> Submit </button>
        </div>
        </div>
        </form>
    )
})


export default FormInput;