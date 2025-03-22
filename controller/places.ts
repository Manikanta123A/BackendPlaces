import { Request,Response } from "express"
import { Places } from "../model/locationData";
export const sendDayDetail = async (req:Request,res:Response)=>{
    try{
        const {number} = req.body;
        const places = await Places.find({day:number});
        if(places != null ){
            res.status(200).json({success:true, places})
        }
    }
    catch(error){
        console.log(error)
        res.status(500).json({success:false})
    }
    
}
export const sendAll =async  (req:Request,res:Response)=>{
    try{
        const places = await Places.find({},{ lattitude: 1, longitude: 1,name:1,humour:1, _id: 0 });
        if(places != null ){
            res.status(200).json({success:true, places:places})
        }
    }
    catch(error){
        console.log(error)
        res.status(500).json({success:false})
    }
    
}

export const addPlaces =async (req:Request,res:Response) => {
    try{
        const placesArray = req.body.places; // Expecting an array of place objects

        if (!Array.isArray(placesArray) || placesArray.length === 0) {
            res.status(400).json({ success: false, message: "Invalid input. Expected an array of places." });
            return;
        }

        await Places.insertMany(placesArray);
        res.status(200).json({success:true, message:"added data successfully"})
    }catch(error){
        res.status(500).json({success:false,message:"data not added"})
    }
}