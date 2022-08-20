import { Schema } from "mongoose";
const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        unique: true
    },
    discount: {
        type: Number,
        default: 0,
    },
    rating: {
        type: Number,
        default: 5
    },
    active: {
        type: Boolean,
        default: false
    }
})
export default ProductSchema;