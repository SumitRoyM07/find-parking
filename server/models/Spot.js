import mongoose from "mongoose";

const spotSchema =new mongoose.spotSchema({
    parking: { type: String, ref: "Parking", required: true},
    spotType: { type: String, required: true},
    images: [{type: String, required: true}],
    pricePerHour: { type: Number, required: true},
    totalSpot: { type: Number, required: true},
    availableSpot: { type: Number, required: true},
    isAvailable: { type: Boolean, required: true},
},{timestamps: true});


const Spot = mongoose.model("Spot", spotSchema);

export default Spot;