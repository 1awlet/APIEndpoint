import { observer } from "mobx-react-lite";
import { Activity } from "../../App";
import { useStore } from "../../Store/store";
import './style.css'
type Props = {
  activity: Activity,
  DeleteActivity: (activityId: string)=> void
}

const SingleActivity = observer(({ activity,DeleteActivity }: Props) => {
  let { id, title, date, description } = activity;
  const {activityStore} = useStore();

  return (

    <div key={id} className="activity-container">

      <h2 className="title">{title}</h2>
      <p className="date-added">{date}</p>
      <p className="description">{description}</p>

      <button onClick={()=> activityStore.setSelectedActivity(id)} className="read-more-button">Read More</button>
      <button className="deleteButton" onClick={()=> activityStore.deleteActivity(id)}>
        Remove </button>
    </div>



  )
})

export default SingleActivity;
