import logo from './logo.svg'
import logoDark from './logoDark.svg'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import spotImg1 from './spotImg1.jpg'
import spotImg2 from './spotImg2.jpg'
import spotImg3 from './spotImg3.jpg'
import spotImg4 from './spotImg4.jpg'
import regImage from './regImage.jpg'
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";


export const assets = {
    logo,
    logoDark,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
}

export const cities = [
    "Barasat",
    "Madhayamgram",
    "Kolkata",
    "Hridaypur",
];


// For Room Details Page
export const roomCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
];

// User Dummy Data
export const userDummyData = {
    "_id": "user_2unqyL4diJFP1E3pIBnasc7w8hP",
    "username": "Sumit Roy",
    "email": "sumitroy9127@gmail.com",
    "image": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
    "role": "parkingOwner",
    "createdAt": "2025-03-25T09:29:16.367Z",
    "updatedAt": "2025-04-10T06:34:48.719Z",
    "__v": 1,
    "recentSearchedCities": [
        "Barasat"
    ]
}

// parking Dummy Data
export const parkingDummyData = {
    "_id": "67f76393197ac559e4089b72",
    "name": "Brainware University Parking",
    "address": "Brainware University, Ramkrishnapur Rd, Uttar Seethi, Barasat",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "Barasat",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

// Spots Dummy Data
export const spotsDummyData = [
    {
        "_id": "67f7647c197ac559e4089b96",
        "parking": parkingDummyData,
        "spotType": "SUV",
        "pricePerHour": 40,
        "images": [spotImg3],
        "totalSpot": 10,
        "availableSpot": 7,
        "isAvailable": true,
        "createdAt": "2025-04-10T06:26:04.013Z",
        "updatedAt": "2025-04-10T06:26:04.013Z",
        "__v": 0
    },
    {
        "_id": "67f76452197ac559e4089b8e",
        "parking": parkingDummyData,
        "spotType": "Car",
        "pricePerHour": 30,
        "images": [spotImg2],
        "totalSpot": 20,
        "availableSpot": 5,
        "isAvailable": true,
        "createdAt": "2025-04-10T06:25:22.593Z",
        "updatedAt": "2025-04-10T06:25:22.593Z",
        "__v": 0
    },
    {
        "_id": "67f76406197ac559e4089b82",
        "parking": parkingDummyData,
        "spotType": "Truck",
        "pricePerHour": 50,
        "images": [spotImg4],
        "totalSpot": 4,
        "availableSpot": 1,
        "isAvailable": true,
        "createdAt": "2025-04-10T06:24:06.285Z",
        "updatedAt": "2025-04-10T06:24:06.285Z",
        "__v": 0
    },
    {
        "_id": "67f763d8197ac559e4089b7a",
        "parking": parkingDummyData,
        "spotType": "Bike",
        "pricePerHour": 15,
        "images": [spotImg1],
        "totalSpot": 15,
        "availableSpot": 13,
        "isAvailable": true,
        "createdAt": "2025-04-10T06:23:20.252Z",
        "updatedAt": "2025-04-10T06:23:20.252Z",
        "__v": 0
    }
]



// User Bookings Dummy Data
export const userBookingsDummyData = [
    {
        "_id": "67f76839994a731e97d3b8ce",
        "user": userDummyData,
        "spot": spotsDummyData[3],
        "parking": parkingDummyData,
        "parkInTime": "2025-04-30T10:00:00+05:30",
        "parkOutTime": "2025-04-30T18:00:00+05:30",
        "totalPrice": 120,
        "spotType": "Bike",
        "vehiclePlate": "WB15AB4385",
        "status": "pending",
        "paymentMethod": "Stripe",
        "isPaid": true,
        "createdAt": "2025-04-30T06:42:01+05:30",
        "updatedAt": "2025-04-30T06:43:54+05:30",
        "__v": 0
    },
    {
        "_id": "67f76829994a731e97d3b8c3",
        "user": userDummyData,
        "spot": spotsDummyData[1],
        "parking": parkingDummyData,
        "parkInTime": "2025-04-30T13:00:00+05:30",
        "parkOutTime": "2025-04-30T20:00:00+05:30",
        "totalPrice": 210,
        "spotType": "Car",
        "vehiclePlate": "WB65ND4385",
        "status": "pending",
        "paymentMethod": "Stripe",
        "isPaid": false,
        "createdAt": "2025-04-30T06:41:45+05:30",
        "updatedAt": "2025-04-30T06:48:45+05:30",
        "__v": 0
    },
    {
        "_id": "67f76810994a731e97d3b8b4",
        "user": userDummyData,
        "spot": spotsDummyData[2],
        "parking": parkingDummyData,
        "parkInTime": "2025-04-30T16:00:00+05:30",
        "parkOutTime": "2025-04-30T19:00:00+05:30",
        "totalPrice": 150,
        "spotType": "Truck",
        "vehiclePlate": "WB1JY0085",
        "status": "pending",
        "paymentMethod": "Stripe",
        "isPaid": false,
        "createdAt": "2025-04-30T06:41:20+05:30",
        "updatedAt": "2025-04-30T06:45:20+05:30",
        "__v": 0
    }
]

// Dashboard Dummy Data
export const dashboardDummyData = {
    "totalBookings": 3,
    "totalRevenue": 480,
    "bookings": userBookingsDummyData
}

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/