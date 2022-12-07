
import { Menu, Close } from '@material-ui/icons';
import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbarStyles.css';



const Navbar = () => {
  const[menu, setMenu] = useState(true);
  const changeMenu = () =>{
    setMenu(!menu);
  }
  return (
    <div className="header">
      <div className="logo">
        <NavLink to="/">Portfolio.</NavLink>
      </div>
      <ul className={menu? "nav_menu" : "nav_menu active"}>
        <li> <NavLink to="/">Home</NavLink> </li>
        <li> <NavLink to="/about">About</NavLink> </li>
        <li> <NavLink to="/project">Project</NavLink> </li>
        <li> <NavLink to="/contact">Contact Us</NavLink> </li>
      </ul>
      <div className="hamburg" onClick={changeMenu}>
      {menu? <Menu/> : <Close/>   }   
      </div>
    </div>
  )
}

export default Navbar;