import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({icon, title}) => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={icon}/> {title}
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='About'>About</Link>
                </li>
            </ul>
        </nav>
    )
    
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired, //PropTypes is a type check 
    icon: PropTypes.string.isRequired
};  

export default Navbar

