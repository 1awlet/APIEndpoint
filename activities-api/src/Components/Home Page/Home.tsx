import { useNavigate } from "react-router-dom";


const Home = ()=>{
    const Navigate = useNavigate();
    return(
        <div>
            <img src="#" />
            <h2>Welcome to activity dashbord</h2>
            <button onClick={()=>Navigate("/act")}>Take me to the dashboard</button>
        </div>
    )
}


export default Home;