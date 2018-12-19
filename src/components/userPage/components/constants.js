export const NAVBAR = {
    LINKS: {
        HOME: '/',
        SUPPORT: "/about/",
    },
    STINGS: {
        CATEGORIES: "Categories",
        FAQS: "FAQs",
        HI_USER_ICON: "hi-user-icon",
        HI_USER_TEXT: "Hi user!",
        HOME_TEXT: "Home",
        SUPPORT_TEXT: "Support",

    },
};

//app logo
export const LOGO = {
    SOURCE:  "/images/Agroeasylogo.png",
    WIDTH: "60px",
};

/** 
//Producer profile
export const FAKE_USER = {
    address: '24, Wilkie Crescent, Ikeja',
    city: 'Lagos',
    country: 'Nigeria',
    email: 'joshuaobinna93@gmail.com',
    firstName: 'Josh',
    gender: 'male',
    lastName: 'Obinna',
    phoneNumber: '+2347061589692',
};
*/

//userpage string
export const USER_PAGE = {
    CLASSNAMES: {
        BASIC_INFO: 'basic-info',
        CONTACT_INFO: 'contact-info',
        INFO_LAYOUT: 'info-layout', 
        INFO_ROW: 'info-row',
        LOCATION_INFO: 'location-info',
        PROFILE_INFO: 'profile-info',
        USER_INFO_CONTENT: 'user-info-content',
    },
    STRINGS: {
        CENTER: 'center',
        FLEX: 'flex',
        ITEM_LAYOUT: 'horizontal',
        ORIENTATION: 'left',
        SM_HEADER: 'sm-header',
        SM_HEADER_DIV: 'sm-header-div',
    },
    TEXTS: {
        BASIC_INFO_TEXT: 'Basic Info',
        CONTACT_INFO_TEXT: 'Contact Info',
        LOCATION_INFO_TEXT: 'Location',
        TITLE_TEXT: 'My Agroeasy',
    },
};

export const DATA = [
    {
        description: 'Josh', 
        title: "Firstname:",
    },
    {
        description: 'Obinna',  title: 'Lastname:',  
    },
    {
        description: 'male',title: 'Gender:',   
    },
];
export const CONTACT = [
    {
        description: 'joshuaobinna@gmail.com',  title: "Email:",
    },
    {
        description: +2347061589692,  title: "PhoneNumber:",
    },
];

export const LOCATION = [
    {
        description:  '24, Wilkie Crescent, Ikeja', title: "Address:", 
    },
    {
        description: "Lagos", title: 'city:',
    },
    {
        description: "Nigeria", title: 'country:',
    },
];

export const columns = [{
    dataIndex: 'name',
    title: 'Location Info',
}, 
{
    dataIndex: 'address',
}];
export const data = [{
    address: 'New York No. 1 Lake Park',
    name: 'Address',
},
{
    address: 'Lagos',
    name: 'City',
},
{
    address: 'Nigeria',
    name: 'Country',
},
];
