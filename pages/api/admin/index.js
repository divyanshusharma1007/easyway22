import { model } from "mongoose";
import connectToMongo from "../../../database/connections"
import models from '../../../database/models'
import fetchadmin from '../../../helpers/fetchadmin'
const handler = async (req, res) => {
    console.log("calling fetch admin")
    // if (fetchadmin(req, res)) {
        const { Product, User, Order } = models();
        try {
            console.log("running")
            const order = await Order.find();
            const noProduct = await Product.find().count();
            const noUsers = await User.find().count();
            console.log("databse connected")
            res.status(200).json({ numberOfProducts: noProduct, numberOfOrder: order.length, noOfUser: noUsers, order: order })
        } catch (e) {
            console.log(e)
            res.status(400).json({ error: "some internal server error occured" })
        }
    // }


}
export default connectToMongo(handler);