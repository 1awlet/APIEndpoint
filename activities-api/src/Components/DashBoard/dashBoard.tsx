import { observe } from "mobx";
import { observer } from "mobx-react-lite";
import { useStore } from "../../Store/store";
import LoadingSpinner from "../LoadingComponent/loading";
import Activities from "../Activities/activities";
import { Fragment } from "react";
const DashBoard = observer(()=>{

    const {activityStore} = useStore();

    return(
      <> 

 

{activityStore.loadingActivities ? 
<LoadingSpinner />

:
<Activities 
activities={activityStore.activityByDate}  />

}


</>
    )

})

export default DashBoard;


