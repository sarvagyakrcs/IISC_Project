import studentIcon from './components/NavMenu/images/student-icon.png';
import staffIcon from './components/NavMenu/images/staff-icon.png';
import resourcesIcon from './components/NavMenu/images/resources-icon.png';
import validateIcon from './components/NavMenu/images/validate-icon.png';
// import extUserAcAdminIcon from './components/NavMenu/images/admin-icon.png';
// import adminIcon from './components/NavMenu/images/admin-icon.png';

const menuOptions = {
    student: {
        icon: studentIcon,
        menuOption: 'Students'
    },
    staff: {
        icon: staffIcon,
        menuOption: 'Staff'
    },
    resources: {
        icon: resourcesIcon,
        menuOption: 'Resources'
    },
    validate: {
        icon: validateIcon,
        menuOption: 'Validate'
    },
    // extUserAcAdmin: {
    //     icon: extUserAcAdminIcon,
    //     menuOption: 'Ext User A/C Admin'
    // },
    // admin: {
    //     icon: adminIcon,
    //     menuOption: 'Admin'
    // },
};

const instituteDetails = {
    "name-english": "INDIAN INSTITUTE OF SCIENCE",
    "location-english": "Bangalore, India",
    "name-hindi": "भारतीय विज्ञान संस्थान",
    "location-hindi": "बैंगलोर, भारत",
};

const loggedInUser = {
    // "firstName": "Sarvagya",
    "firstName": "Test",
    "middleName": null,
    // "lastName": "Kumar",
    "lastName": "User",
    // "email": "sarvagyakrcs@gmail.com",
    "email": "test@gmail.com",
};

const client_id = 'd501471f-6fe4-448d-9e3f-ef3e4dc206b1' //aka application id
const tenant_id = 'df7206db-cabc-4b49-b065-e787466975f2' //aka directory id


export {
    menuOptions,
    instituteDetails,
    loggedInUser,
    client_id,
    tenant_id
};