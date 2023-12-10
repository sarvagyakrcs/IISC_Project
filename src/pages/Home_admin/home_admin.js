import React from 'react';
import { instituteDetails, loggedInUser } from '../../data_admin';
import Navbar from '../../components/NavBar_admin/navbar';
import './homeadmin.css';

const Home = () => {
    return (
        <div className="full-screen home-page">
            <Navbar instituteDetails={instituteDetails} user={loggedInUser}/>
            <h1>Welcome to Admin Page!!!</h1>
        </div>
    );
};

export default Home;
