import mongoose from "mongoose";

const parkingSchema =new mongoose.parkingSchema({
    name: { type: String, required: true},
    address: { type: String, required: true},
    contact: { type: String, required: true},
    owner: { type: String, required: true, ref: "User" },
    city: { type: String, required: true },
},{timestamps: true});


const Parking = mongoose.model("Parking", parkingSchema);

export default Parking;