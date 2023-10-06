import React, { useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "../../Store/store";
import "./style.css";
import boardImg from "../../Assets/Images/board.jpeg";

const Details= observer(() => {
  const { activityStore } = useStore();
  const { activityID } = useParams<{ activityID: string }>();
  const Navigate = useNavigate();



  const activity = activityStore.activities.find(x=> x.id == activityID)

  if (!activity) {
    return null; 
  }

  const handleEditClick = () => {
    Navigate(`/add/${activityID}`);
  };

  const handleCancelClick = () => {
    Navigate("/act");
  };

  return (

    <div className="detailsContainter">
      <img src={boardImg} alt="Activity" />
      <h3>{activity.title}</h3>
      <p>{activity.date}</p>
      <p>{activity.venue}</p>
      <p>{activity.description}</p>

      <div className="detailsbtns">
        <button onClick={handleEditClick} className="edit">
          Edit
        </button>
        <button onClick={handleCancelClick} className="cancel">
          Cancel
        </button>
      </div>
    </div>
  );
});

export default Details;
