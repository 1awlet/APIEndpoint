import { useNavigate } from "react-router-dom";
import "./home.css"
import activityIcon from "../../Assets/Images/activity.svg";
const Home = ()=>{
    const Navigate = useNavigate();
    return(
        <div    className="homeContainer">
           <div> 
           <img src={activityIcon} />
           </div>
          
          <div> 
            <h2>Welcome to activity dashbord</h2>
        
            <button onClick={()=>Navigate("/act")}>Take me to the dashboard</button>
            </div>
        </div>
    )
}


export default Home;