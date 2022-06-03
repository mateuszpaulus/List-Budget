
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logo.png'
import { FaListUl, FaCalculator, FaBars } from 'react-icons/fa';

export const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    return (
        <nav>
            <div className='nav'>
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
                        ? 'links-nav show-links' 
                        : 'links-nav'
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

