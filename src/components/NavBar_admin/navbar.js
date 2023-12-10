import React from 'react';
import './navbar.css';
import logo from './images/iiscLogo.png';
import NavMenu from '../NavMenu/navMenu';
import { menuOptions } from '../../data_admin';

const Navbar = (props) => {
    return (
        <div className="navBar navBarComplete"> 
            <nav className="nav-Bar">
                <div className="nav-logo">
                    <img className="logo-image" src={logo} alt="" />
                    <div className="logo-text">
                        <h1>{props.instituteDetails['name-english']}</h1>
                        <h2>{props.instituteDetails['location-english']}</h2>
                        <h3>{props.instituteDetails['name-hindi']}</h3>
                        <h3>{props.instituteDetails['location-hindi']}</h3>
                    </div>
                </div>
                <div className="vertical-line"></div>
                <div className="navMenu">
                    <NavMenu MenuOptions={menuOptions} />
                </div>
                <div className="NIS-logo">
                    <h1 className="largeText">NIS</h1>
                </div>
            </nav>
            <nav className="nav-lower">
                <h3>
                    <pre>Welcome, </pre>
                </h3>
                <pre style={{ color: 'navy' }}>
                    {props.user['firstName']}
                    {props.user['middleName'] !== null && (
                        <pre style={{ color: 'yellowgreen' }}>
                            {props.user['middleName']}
                        </pre>
                    )}
                    {props.user['lastName']}
                </pre>
                <pre style={{ color: 'white' }}> | </pre>
                <pre style={{ color: 'navy' }}>{props.user['email']}</pre>
                <button className="logoutButton">logOut</button>
            </nav>
        </div>
    );
};

Navbar.defaultProps = {
    instituteDetails: {
        'name-english': 'Default Institute Name',
        'location-english': 'Default Location',
        'name-hindi': 'Default Institute Name (Hindi)',
        'location-hindi': 'Default Location (Hindi)',
    },
    user: {
        firstName: 'Admin',
        middleName: null,
        lastName: 'User',
        email: 'admin@gmail.com',
    },
};

export default Navbar;
