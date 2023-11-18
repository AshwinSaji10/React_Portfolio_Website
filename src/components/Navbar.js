import React from 'react';
import {NavLink} from 'react-router-dom';
function Navbar()
{
    return(
        <nav className='Navbar'>
            <NavLink to='/Home'>Home</NavLink>
            <NavLink to='/About'>About</NavLink>
            <NavLink to='/Projects'>Projects</NavLink>
            <NavLink to='/Contact'>Contact</NavLink>
        </nav>
    );
};

export default Navbar;
