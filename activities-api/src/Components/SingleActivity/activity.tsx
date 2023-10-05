import { observer } from "mobx-react-lite";

import { useStore } from "../../Store/store";
import './style.css'
export type Activity= {
  id:string,
  description:string,
  title:string,
  venue:string,
  date:string

}
type Props = {
  activity: Activity
}


const SingleActivity = observer(({ activity }: Props) => {
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
