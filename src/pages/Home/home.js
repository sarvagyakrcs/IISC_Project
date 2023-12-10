import React from 'react';
import { instituteDetails, loggedInUser } from '../../data';
import Navbar from '../../components/NavBar/navbar';
import './home.css';

const Home = () => {
    return (
        <div className="full-screen home-page">
            <Navbar instituteDetails={instituteDetails} user={loggedInUser} />
        </div>
    );
};

export default Home;
