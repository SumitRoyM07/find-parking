import Parking from "../models/Parking.js";
import User from "../models/User.js";

export const registerParking = async (req,res)=>{
    try{
        const {name, address, contact, city} = req.body;
        const owner =req.user._id

        // check if user already reg
        const parking= await parking.findOne({owner})
        if(parking){
            return res.json({ success: false, message: "Parking lot Already Registered"})
        }
        await Parking.create({name, address, contact, city, owner});

        await User.findByIdAndUpdate(owner, {role: "parkingOwner"});

        res.json({success: true, message: "Parking Registered Successfully"})

    } catch(error) {
        res.json({success: false, message: error.message})
    }
}