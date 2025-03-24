import { Request,Response } from "express"
import { Food } from "../model/food";
export const getAllFood = async (req:Request,res:Response)=>{
    try{
        let result = await Food.find({});
        res.status(200).json({success:true,data:result});
        return;
    }
    catch{
        res.status(500).json({success:false,message:"unable to fetch the data"});
        return;
    }
    
}