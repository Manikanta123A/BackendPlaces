import mongoose from "mongoose"

export interface food {
    name:string,
    imageUrl:string,
    type:string
}
const foodSchema = new mongoose.Schema<food>({
    name:String,
    imageUrl:String,
    type:String,
})

export const Food = mongoose.model("food",foodSchema);