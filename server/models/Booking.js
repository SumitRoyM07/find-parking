import mongoose from "mongoose";

const bookingSchema =new mongoose.bookingSchema({
    user: { type: String, ref: "User", required: true},
    spot: { type: String, ref: "Spot", required: true},
    parking: {type: String, ref: "Parking", required: true},
    parkIn: { type: String, required: true},
    parkOut: { type: String, required: true},
    vehiclePlate: { type: String, required: true},
    totalPrice: { type: Number, required: true},
    status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
    paymentMethod: { type: String, enum: ["Stripe"], default: "Stripe" },
    isPaid: { type: Boolean, default: false },

},{timestamps: true});


const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;