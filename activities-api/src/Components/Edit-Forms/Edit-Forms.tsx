import "./style.css";
import { useStore } from "../../Store/store";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import FormInput from "../FormInputs/formInputs";
export type Activity= {
    id:string,
    description:string,
    title:string,
    venue:string,
    date:string
  
  }

const EditForm = observer(()=>{
    const {activityId} = useParams();
    const {activityStore}= useStore()
    return(
        <div >

            {
             activityId?
                   activityStore.activities.map((activity)=>{
                    if(activity.id == activityId){
                        return(
                            <FormInput 
                             selectedActivity={activity}  
                             key={activityId}
                             />
                        )
                    }
                   })
                    :
                    <FormInput />
                }
        </div>
    )

})

export default EditForm;
