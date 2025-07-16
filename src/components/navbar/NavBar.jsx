import { NavLink } from 'react-router-dom';
import './navbar.css'
import { useState } from 'react';

const NavBar = () => {
    const [animate, setAnimate] = useState(false);
    const handleClick = () => {
        setAnimate(true);
        // Remove animation class after it finishes to allow re-trigger
        setTimeout(() => setAnimate(false), 500);
    };
    return (
        <nav className={`navbar ${animate ? 'animate' : ''}`}>
            <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={handleClick}
            >HOME</NavLink>
            <NavLink 
                to="/contacts" 
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={handleClick}
            >CONTACTS</NavLink>
            <NavLink 
                to="/projects" className={({ isActive }) => isActive ? 'active' : ''}
                onClick={handleClick}
            >PROJECTS</NavLink>
        </nav>
    );
};

export default NavBar;
