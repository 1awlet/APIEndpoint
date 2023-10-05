import { observe } from "mobx";
import { observer } from "mobx-react-lite";
import { useStore } from "../../Store/store";
import LoadingSpinner from "../LoadingComponent/loading";
import Activities from "../Activities/activities";

const DashBoard = observer(()=>{

    const {activityStore} = useStore();
    return(
      <div> 
           
{activityStore.loadingActivities ? 
<LoadingSpinner />

:
<Activities 
activities={activityStore.activities}  />
}

</div>
    )

})

export default DashBoard;


