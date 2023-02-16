import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { NavLink,  } from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';

import './Navbar.css'





const Navbar = ({ setCategories }) => {
   
    

   
   
    let activeStyle = {
        textDecoration: "none",
        borderBottom: "1px solid red",
        
        color: "rgb(189, 70, 70)"


    };
    let notActive = {
        textDecoration: "none",
        color: "rgb(56, 51, 51)"
    }


    return (

        // <Route>
             <div>
            <div className='navContainer '>                
                <NavLink onClick={()=>setCategories('')} to='/' style={({ isActive }) =>
                    isActive ? activeStyle : notActive
                }><h5 className='navlink '>all</h5>
                </NavLink>
                <NavLink onClick={()=>setCategories('breakfast')} to='/breakfast' style={({ isActive }) =>
                    isActive ? activeStyle : notActive
                }><h5 className='navlink '>Breakfast</h5>
                </NavLink>
                <NavLink onClick={()=>setCategories('lunch')} to='/lunch' style={({ isActive }) =>
                    isActive ? activeStyle : notActive
                }><h5 className='navlink '>Lunch</h5>
                </NavLink>
                <NavLink onClick={()=>setCategories('dinner')} to='/dinner' style={({ isActive }) =>
                    isActive ? activeStyle : notActive
                }><h5 className='navlink '>Dinner</h5>
                </NavLink>
                
            </div>

        </div>

    //    </Route>


    );
};

export default Navbar;