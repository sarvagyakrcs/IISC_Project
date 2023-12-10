import React, { useState } from 'react';
import UserAccForm from './ExtUserAccForm';
import AddlResReqForm from './AddlResReqForm'; 
import './ExtUserAcAdmin.css';
import ExtSearchForm from './ExtSearchForm';

const ExtUserAcAdmin = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [registrationNumber, setRegistrationNumber] = useState('');

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const handleSearchClick = () => {
        // Implement the search logic here
        alert(`Searching for registration number: ${registrationNumber}`);
    };

    const handleClearClick = () => {
        setRegistrationNumber('');
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div className="sidebar">
                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'ext Act Validate' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('ext Act Validate')}
                >
                    EXT ACT VALIDATE
                </div>
                <hr />
                <div style={{ padding: '10px', fontWeight: 'bold' }}>
                    EXT ACC ADMIN:
                    {selectedItem === 'extAccAdmin' && (
                        <div style={{ marginLeft: '20px', marginTop: '10px' }}>
                        </div>
                    )}
                </div>

                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'Activate Ext Acc' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('Activate Ext Acc')}
                >
                    I. Activate Ext Acc
                </div>

                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'Ext Acc Res Activate' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('Ext Acc Res Activate')}
                >
                    II. Ext Acc Res Activate
                </div>

                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'Reset Password' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('Reset Password')}
                >
                    III. Reset Password
                </div>

                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'Ext Acc Delete' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('Ext Acc Delete')}
                >
                    IV. Ext Acc Delete
                </div>

                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'Ext Search' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('Ext Search')}
                >
                    V. Ext Search
                </div>

                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'Ext Acc Stats' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('Ext Acc Stats')}
                >
                    VI. Ext Acc Stats
                </div>


                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'Extend/ Lock Ext Acc' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('Extend/ Lock Ext Acc')}
                >
                    VII. Extend/ Lock Ext Acc
                </div>


                <hr />
                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'ext User Acc Form' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('ext User Acc Form')}
                >
                    1. Ext User Acc Form
                </div>
                
                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'addl Res Req Form' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('addl Res Req Form')}
                >
                    2. Addl Res Req Form
                </div>
                <hr />
            </div>

            <div className="content">
                <h1>{selectedItem ? selectedItem.toUpperCase() : 'EXT USER A/C ADMIN PAGE'}</h1>
                <br/>
                <br/>
                {selectedItem === 'ext Act Validate' && (
                    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
                        <label>
                            Registration Number :
                            <input
                                type="text"
                                value={registrationNumber}
                                onChange={(e) => setRegistrationNumber(e.target.value)}
                            />
                        </label>
                        <br />
                        <button onClick={handleSearchClick}>Search</button>
                        <button onClick={handleClearClick}>Clear</button>
                    </div>
                )}

                {selectedItem === 'Ext Search' && <ExtSearchForm />}

                {selectedItem === 'ext User Acc Form' && <UserAccForm />}
                {selectedItem === 'addl Res Req Form' && <AddlResReqForm />} 
            </div>
        </div>
    );
};

export default ExtUserAcAdmin;
