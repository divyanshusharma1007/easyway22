import mongoose, { Schema } from "mongoose";
const OrderSchema = new Schema({
    buyerid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',//refrense model
        required: true
    },
    buyername: {
        type: mongoose.Schema.Types.String,
        ref: 'User',
        required: true
    },
    productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    productname: {
        type: mongoose.Schema.Types.String,
        ref: 'Product'
    },
    deliver: {
        type: Boolean,
        required: true,
        default: false,
    },
    review: {
        type: String,
    },
    address: {
        type: String,
    },
    amount: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now()
    }
})
export default OrderSchema;