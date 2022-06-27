import React from 'react';
import { NavLink ,Routes,Route} from "react-router-dom";

import './Navbar.css'

import BreakFastFunc from './../FoodItem/01BreakFast/BreakFastFunc';
import LunchFunc from '../FoodItem/02Lunch/LunchFunc';
import DinnerFunc from '../FoodItem/03Dinner/DinnerFunc';

const Navbar = () => {
    let activeStyle = {
        textDecoration:"none",
        borderBottom: "2px solid red",
        color: "rgb(189, 70, 70)"
        

    };
    let notActive = {
        textDecoration: "none",
        color: "rgb(56, 51, 51)"
    }
   
    return (
        <div  >
            
            <div className='navContainer '>
            <NavLink to="breakfast" style={({ isActive }) =>
            isActive ? activeStyle : notActive
            }><h5 className='navlink true'>Breakfast</h5></NavLink>
            
            <NavLink to="lunch" style={({ isActive }) =>
            isActive ? activeStyle : notActive
            }><h5 className='navlink true'>Lunch</h5></NavLink>

            <NavLink to="dinner" style={({ isActive }) =>
            isActive ? activeStyle : notActive
            }><h5 className='navlink true'>Dinner</h5></NavLink></div>

            <div><Routes>
                <Route path="/breakfast" element={<BreakFastFunc />} />
                <Route path="/lunch" element={<LunchFunc />} />
                <Route path="/dinner" element={<DinnerFunc />} />
            </Routes></div>
          

        </div>
    );
};

export default Navbar;