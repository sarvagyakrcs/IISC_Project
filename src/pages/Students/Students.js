import React from 'react';
import './students.css';

const Students = () => {
    return (
        <div className="staff-form-container">
            <h1>STUDENTS PAGE</h1>
            <br></br>
            {/* To be updated */}
            <h2>APPLICATION FOR STUDENTS UPDATE</h2> 
            <hr />
            <p className="note">For use by IISc Students only.</p>
            <p className="note">Please do not fill this form if you already have a computational account. If you need access to the basic HPC systems, such as Delta, kindly click on RESOURCES and proceed.</p>
            <hr />
            <form className="staff-form">
                <label>
                    NAME:
                    <div className="name-inputs">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>
                </label>

                <label>
                    SR No:
                    <input type="text" placeholder="04-03-00-36-41-14-1-xxxx"/>
                </label>

                <label>
                    Department:
                    <select>
                        <option value="">Select Department</option>
                        <option value="AI">AI</option>
                        <option value="ML">ML</option>
                        <option value="CSE">CSE</option>
                        <option value="Software">Software</option>
                        <option value="IT">IT</option>
                    </select>
                </label>

                <label>
                    Is Faculty Guide from same department?:
                    <select>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </label>

                <label>
                    Faculty/ Guide Name:
                    <input type="text" />
                </label>

                <label>
                    IISc E-mail ID:
                    <input type="email" />
                </label>

                <label>
                    Mobile No:
                    <input type="tel" />
                </label>

                <label>
                    Degree:
                    <input type="tel" />
                </label>

                <label>
                    Nature of Registration:
                    <input type="text" />
                </label>

                <label>
                    Date of Enrollment to the Course:
                    <input type="date" />
                </label>

                <label>
                    Brief description of the purpose of use:
                    <textarea rows="4"></textarea>
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Students;
