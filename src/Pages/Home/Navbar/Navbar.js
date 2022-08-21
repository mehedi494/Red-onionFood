import React from 'react';
import { NavLink } from "react-router-dom";

import './Navbar.css'





const Navbar = () => {
    let activeStyle = {
        textDecoration: "none",
        borderBottom: "2px solid red",
        color: "rgb(189, 70, 70)"


    };
    let notActive = {
        textDecoration: "none",
        color: "rgb(56, 51, 51)"
    }


    return (

        <div>
            <div className='navContainer '>
                <NavLink to="/" style={({ isActive }) =>
                    isActive ? activeStyle : notActive
                }><h5 className='navlink true'>Breakfast</h5></NavLink>

                <NavLink to="/lunch" style={({ isActive }) =>
                    isActive ? activeStyle : notActive
                }><h5 className='navlink true'>Lunch</h5></NavLink>

                <NavLink to="/dinner" style={({ isActive }) =>
                    isActive ? activeStyle : notActive
                }><h5 className='navlink true'>Dinner</h5></NavLink>
            </div>

        </div>



    );
};

export default Navbar;