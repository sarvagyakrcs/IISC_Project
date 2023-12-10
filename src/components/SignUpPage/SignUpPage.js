import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUpPage.css';
import logo from '../NavBar/images/iiscLogo.png'

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [Name, setName] = useState('');

    const handleSignUp = () => {
        // You can add your signup logic here
        // For simplicity, I'm just displaying the entered data
        alert(`
        Username: ${username}
        Password: ${password}
        Phone Number: ${phoneNumber}
        Name: ${Name}
        `);
    };

    return (
        <section className='signup-page'>
            <div className="signin">
                <div className="content">
                    <h2>Sign Up</h2>
                    <img src={logo} alt="" />
                    <div className="form">
                        <div className="inputBox">
                            <input
                                type="text"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <i>Username</i>
                        </div>
                        <br></br>
                        <div className="inputBox">
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <i>Password</i>
                        </div>
                        <br></br>
                        <div className="inputBox">
                            <input
                                type="text"
                                required
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            <i>Phone Number</i>
                        </div>
                        <br></br>
                        <div className="inputBox">
                            <input
                                type="text"
                                required
                                value={Name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <i>Name</i>
                        </div>
                        <br></br>
                        <div className="links">
                            <Link to="/login">Already have an account? Login</Link>
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Sign Up" onClick={handleSignUp} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUpPage;
