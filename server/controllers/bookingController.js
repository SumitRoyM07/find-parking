import Booking from "../models/Booking.js";
import Spot from "../models/Spot.js";


// Function to check availability of a spot
const checkAvailability = async ({parkIn, parkOut, spot}) => {
    try {
        const bookings = await Booking.find({
            spot,
            parkIn: { $lt: parkOut },
            parkOut: { $gt: parkIn },
           
        });
        
        const isAvailable = bookings.length === 0;
        return isAvailable;

    } catch (error) {
console.error(error.message);
    }
}

// api to check availability of a spot
// post/api/booking/check-availability
export const checkSpotAvailability = async (req, res) => {
    try {
        const { parkIn, parkOut, spot } = req.body;
        const isAvailable = await checkAvailability({ parkIn, parkOut, spot });
        res.json({ success: true, isAvailable });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }   
}

// api to create a new booking
// post/api/booking/create
export const createBooking = async (req, res) => {
    try {
const { parkIn, parkOut, spot, vehiclePlate, }= req.body;
const user = req.user._id;

// before booking check if the spot is available for the given time range
    const isAvailable = await checkAvailability({ parkIn, parkOut, spot });

    if (!isAvailable) {
        return res.json({ success: false, message: "Spot is not available" });
    }

    // get total price for the booking
    const spotData = await Spot.findById(spot).populate('parking');
    let totalHours = (new Date(parkOut) - new Date(parkIn)) / (1000 * 60 * 60);

    } catch (error) {

    }
}