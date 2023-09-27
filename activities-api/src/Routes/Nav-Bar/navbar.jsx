import { useState } from "react";
import Menu from "../../Assets/Images/menu.svg";
import Xmark from "../../Assets/Images/xmark.svg";
import EditForm from "../../Components/Edit-Forms/Edit-Forms";
import './navbarStyle.css'
import {v4 as uuid} from "uuid";
import { Activity } from "../../App";


const Navbar = ({createOrEditActivityHandlar, SelectedEvent,CancelSelectedEvent,
  selectedEvent})=>{
    const [isOpen, setIsOpen] = useState(false);
    const [isAddActivityOn,setIsAddActivityOn]= useState(false)

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    const hideAddActivityOn = ()=>{
      setIsAddActivityOn(false)
    }
    return(
      <>
     <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-brand">
        <img src={ isOpen? Xmark : Menu } alt="Hamburger" className="hamburger" onClick={toggleMenu} />
      </div>
      <ul className="navbar-menu">
        <li>Home</li>
        <li>About</li>
        <li className="libtns" onClick={()=> setIsAddActivityOn(true)}> Add Activity </li>
      </ul>
    </nav>
    {isAddActivityOn && 
    <EditForm 
    createOrEditActivityHandlar={createOrEditActivityHandlar} 
    SelectedEvent={SelectedEvent}
    CancelSelectedEvent={CancelSelectedEvent}
    selectedEvent={selectedEvent}
    CancelEditing={hideAddActivityOn}
    /> } 
    </>
)
}

export default Navbar;