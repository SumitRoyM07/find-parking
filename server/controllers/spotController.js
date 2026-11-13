import Parking from "../models/Parking.js";
import {v2 as cloudinary} from "cloudinary";
import Spot from "../models/Spot.js";

//  API to creat a new spot in a parking
export const createSpot = async (req,res)=>{
    try{
        const {spotType, pricePerHour, totalSpot} =req.body;
        const parking = await Parking.findOne({owner: req.auth.userId})
 
        if(!parking) return res.json({ success: false, message: "No Parking Spot Found!"})
        
        //upload image to cloudinary
        const uploadedImage = req.files.map(async (file)=>{
            const response = await cloudinary.uploader.upload(file.path);
            return response.secure_url;
        });
        // wait for all uploads to complete
        const images = await Promise.all(uploadedImage);

        await Spot.create({
            parking: parking._id,
            spotType,
            pricePerHour: +pricePerHour,
            totalSpot,
            images,
        })
        res.json({ success: true, message: "Spot Created Successfully!"})
    } catch (error){
        res.json({ success: false, message: error.message})

    }
}

// API to get all spots for a specific parking
export const getSpots = async (req,res)=>{
    try{
        const spots = await Spot.find({isAvailable: true}).populate({
            path: "parking",
            populate: {
                path: "owner",
                select: 'image'
            }
        }).sort({createdAt: -1})
        res.json({ success: true, spots});
    } catch (error){
        res.json({ success: false, message: error.message})
    }

}

// API to get all spots for a specific parking
export const getOwnerSpots = async (req,res)=>{
    try{
        const parkingData = await Parking({owner: req.auth.userId})
        const spots = await Spot.find({parking: parkingData._id.toString()}).populate('parking');
        res.json({ success: true, spots});
    } catch (error){
        res.json({ success: false, message: error.message})
    }

}

// API to get all spots for a specific parking
export const toggleSpotsAvailability = async (req,res)=>{
    try{
        const {spotId} = req.body;
        const spotData = await Spot.findById(spotId);
        spotData.isAvailable = !spotData.isAvailable;
        await spotData.save();
        res.json({ success: true, message: "Spot Availability Updated!"})

} catch (error){
    res.json({ success: false, message: error.message})
}
}