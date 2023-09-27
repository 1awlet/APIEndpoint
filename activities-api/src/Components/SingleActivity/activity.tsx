import { Activity } from "../../App";
import './style.css'
type Props = {
  activity: Activity,
  selectEvent: (id: string) => void
}

const SingleActivity = ({ activity, selectEvent }: Props) => {
  let { id, title, date, description } = activity;
  return (

    <div key={id} className="activity-container">

      <h2 className="title">{title}</h2>
      <p className="date-added">{date}</p>
      <p className="description">{description}</p>

      <button onClick={() => selectEvent(id)} className="read-more-button">Read More</button>
    </div>



  )
}

export default SingleActivity;
