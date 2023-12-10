import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import Home from './pages/Home/home';
import Students from './pages/Students/Students';
import Staff from './pages/Staff/Staff';
import Resources from './pages/Resources/Resources';
import Validate from './pages/Validate/Validate';
import HomeAdmin from './pages/Home_admin/home_admin';
import AdminPage from './pages/Admin/admin'
import ExtUserAcAdmin from './pages/ExtUserAcAdmin/ExtUserAcAdmin'
import { instituteDetails, loggedInUser } from './data';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage instituteDetails={instituteDetails} user={loggedInUser}/>} />
        <Route path="/signup" element={<SignUpPage instituteDetails={instituteDetails} user={loggedInUser}/>} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/home/student" element={<Students />} />
        <Route path="/home/staff" element={<Staff />} />
        <Route path="/home/resources" element={<Resources />} />
        <Route path="/home/validate" element={<Validate />} />
        <Route path="/home_admin" element={<HomeAdmin instituteDetails={instituteDetails} user={loggedInUser} />} /> 
        <Route path="/home/admin" element={<AdminPage  />} /> 
        <Route path="/home/extuseracadmin" element={<ExtUserAcAdmin />} /> 
      </Routes>
    </Router>
  );
};

export default App;

