import { Schema } from "mongoose";
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    contactnumber: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    profileimage: {
        type: String,
        default: 'default_profile_image'
    }
})
export default UserSchema;