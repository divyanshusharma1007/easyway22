import { Schema } from "mongoose";
const ProductSchema=new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true
    },
    img:{
        type:String,
        unique:true
    },
    discount:{
        type:Number,
        default:0, 
    }
})
export default ProductSchema;