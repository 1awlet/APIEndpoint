import { useState } from "react";
import Menu from "../../Assets/Images/menu.svg";
import Xmark from "../../Assets/Images/xmark.svg";
import EditForm from "../../Components/Edit-Forms/Edit-Forms";
import './navbarStyle.css'
import {v4 as uuid} from "uuid";
import { Activity } from "../../App";
import { useStore } from "../../Store/store";
import { observer } from "mobx-react-lite";


const Navbar = observer(({createOrEditActivityHandlar})=>{
    const [isOpen, setIsOpen] = useState(false);
    const [isAddActivityOn,setIsAddActivityOn]= useState(false)
  const {activityStore} = useStore()
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
        <li className="libtns" onClick={()=> activityStore.openForm()}> Add Activity </li>
      </ul>
    </nav>
    {  activityStore.editMode&&  
    <EditForm 
    CancelEditing={hideAddActivityOn}
    /> } 
    </>
)
})

export default Navbar;