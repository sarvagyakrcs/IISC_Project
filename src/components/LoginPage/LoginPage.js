// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; 
// import './LoginPage.css';

// const LoginPage = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate(); 

//     const handleLogin = () => {
//         // Simulate authentication (replace with actual authentication logic)
//         if (username === 'test@gmail.com' && password === 'Qwerty123') {
//             navigate('/home'); 
//         } 
//         else {
//             alert('Invalid credentials. Please try again.');
//         }
//     };

//     return (
//         <section className="login-page">
//             <div className="signin">
//                 <div className="content">
//                     <h2>Sign In</h2>
//                     <div className="form">
//                         <div className="inputBox">
//                             <input
//                                 type="text"
//                                 required
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                             />
//                             <i>Username</i>
//                         </div>
//                         <br></br>
//                         <div className="inputBox">
//                             <input
//                                 type="password"
//                                 required
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                             <i>Password</i>
//                         </div>
//                         <br></br>
//                         <div className="links">
//                             <button onClick={() => alert('Forgot Password')}>
//                                 Forgot Password
//                             </button>
//                             <Link to="/signup">Signup</Link>
//                         </div>
//                         <div className="inputBox">
//                             <input type="submit" value="Login" onClick={handleLogin} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default LoginPage;





import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import './LoginPage.css';
import logo from '../NavBar/images/iiscLogo.png'

const LoginPage = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Simulate authentication (replace with actual authentication logic)
        if (username === 'test@gmail.com' && password === 'Qwerty123') {
            navigate('/home');
        } else if (username === 'admin@gmail.com' && password === 'Qwerty123') {
            navigate('/home_admin'); // Redirect to admin home
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
        <section className="login-page">
            <div className="signin">
                <div className="logo">
                    <img src={logo} alt="" />
                    <div className="logo-text">
                        <h1 className='firstWordCapital'>
                            {props.instituteDetails['name-english'].charAt(0).toUpperCase() + props.instituteDetails['name-english'].slice(1).toLowerCase()}
                        </h1>
                        <h2>{props.instituteDetails['location-english']}</h2>
                        <h3>{props.instituteDetails['name-hindi']}</h3>
                        <h3>{props.instituteDetails['location-hindi']}</h3>
                    </div>
                </div>
                <div className="lineVertical">
                    <div className="line"></div>
                </div>
                <div className="content">
                    <h2>Sign In</h2>
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
                        <div className="links">
                            <button onClick={() => alert('Forgot Password')}>Forgot Password</button>
                            <Link to="/signup">Login Via Microsoft</Link>
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Login" onClick={handleLogin} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
