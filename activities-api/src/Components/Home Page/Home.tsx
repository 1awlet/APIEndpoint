import { useNavigate } from "react-router-dom";
import "./home.css"
import activityIcon from "../../Assets/Images/activity.svg";
const Home = () => {
    const Navigate = useNavigate();
    return (
        <div className="homeContainer">
            <div>
                <img src={activityIcon} />
            </div>

            <div className="homeDetails">
                <h2>Welcome to activity dashbord</h2>
                <button onClick={() => Navigate("/activities")}>Take me to the dashboard</button>
            </div>
        </div>
    )
}


export default Home;