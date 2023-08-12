import { Activity } from "../../App";
import './style.css'
type Props={
    activity:Activity[],
    selectEvent: (id: number)=> void
}

const SingleActivity = ({activity, selectEvent}:Props)=>{

    return(
        <div className="All-activites">
        {activity.map((activity)=>(
          //const {title} = activity;
         <div key={activity.id} className="activity-container"> 
      
         <h2  className="title">{activity.title}</h2>
         <p className="date-added">Date Added: 30, December, 2018</p>
      <p className="description">{activity.description}</p>

      <button onClick={()=> selectEvent(activity.id)} className="read-more-button">Read More</button>
         
       </div>
        ))}
        
      </div>
    )
}

export default SingleActivity;
