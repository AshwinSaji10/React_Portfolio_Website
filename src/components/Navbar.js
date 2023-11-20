import React from 'react';
import {NavLink} from 'react-router-dom';
function Navbar()
{
    return(
        <nav className='Navbar'>
            <NavLink to='/Home' className="Navbar-item">Home</NavLink>
            <NavLink to='/About' className="Navbar-item">About</NavLink>
            <NavLink to='/Projects' className="Navbar-item">Projects</NavLink>
            <NavLink to='/Contact' className="Navbar-item">Contact</NavLink>
        </nav>
    );
};

export default Navbar;
