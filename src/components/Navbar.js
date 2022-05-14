
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logo.png'
import { FaListUl } from 'react-icons/fa';
import { FaCalculator } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

export const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <Link to='/'>
                        <img 
                            src={logo} 
                            className='logo' 
                            alt="Homeorganizer"
                        />                     
                    </Link>
                    <button 
                        className='nav-toggle' 
                        onClick={() => setShowLinks(!showLinks)}
                    >
                        <FaBars />
                    </button>
                </div>
                <div 
                    className={`${
                        showLinks 
                        ? 'links-container show-container' 
                        : 'links-container'
                    }`}>
                        <ul className='links'>
                            <li>
                                <Link to='/'>
                                    Home <FaListUl /> 
                                </Link>
                            </li>
                            <li>
                                <Link to='/budget'>
                                    Budget <FaCalculator />
                                </Link>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
    );
};

