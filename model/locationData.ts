import mongoose from 'mongoose'

export interface dataSchema {
    name:string,
    description:string,
    visitingDate:string,
    famousFood:string,
    imageUrl:string,
    day:number,
    lattitude:number,
    longitude:number,
    humour:string,
    sound:string,
    url:string,
}
export interface dataSchemaDocu extends dataSchema,Document{
    _id:mongoose.Types.ObjectId;
}
const dataSchema = new mongoose.Schema<dataSchemaDocu>({
    name:String,
    description:String,
    visitingDate:String,
    famousFood:String,
    imageUrl:
        {
            type: String
        }
    ,
    day:Number,
    lattitude:Number,
    longitude:Number,
    humour:String,
    sound:String,
    url:String,

})
export const Places = mongoose.model("place",dataSchema);