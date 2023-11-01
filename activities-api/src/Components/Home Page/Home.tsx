import { useNavigate } from "react-router-dom";
import "./home.css"

const Home = ()=>{
    const Navigate = useNavigate();
    return(
        <div    className="homeContainer">
            <img src="#" />
            <h2>Welcome to activity dashbord</h2>
            <button onClick={()=>Navigate("/act")}>Take me to the dashboard</button>
        </div>
    )
}


export default Home;