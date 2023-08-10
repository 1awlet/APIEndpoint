import { useState } from "react";
import Menu from "../../Assets/Images/menu.svg";
import Xmark from "../../Assets/Images/xmark.svg";

import './navbarStyle.css'
const Navbar = ()=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return(
        <>
     <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-brand">
        <img src={ isOpen? Xmark : Menu } alt="Hamburger" className="hamburger" onClick={toggleMenu} />
      </div>
      <ul className="navbar-menu">
        <li>Home</li>
        <li>About</li>
        <li className="libtns"> Add and Activity </li>
      </ul>
    </nav>
        </>
    )
}

export default Navbar;