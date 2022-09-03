import connectToMongo from "../../../database/connections"
import models from '../../../database/models'
import { jwt_secrete_key } from "../../../database/dbsettings";
import fetchuser from "../../../helpers/fetchuser";
const joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const handler = async (req, res) => {
    const id = fetchuser(req, res)?.user?.id;
    if (id) {
        const { User, Order, Product } = models();
        try {
            const user = await User.findById(id);
            console.log(user, "user");
            let total = 0;
            const vals = req.body.products.map(e => e['pay'] = e.amount !== 'gram' ? e.quantity : e.price * e.quantity)
            vals.forEach(e => {
                total += Number(e);
            });
            console.log(total, "values");
            const reqObj = {
                buyerid: user._id,
                buyername: user.username,
                products: req.body.products,
                total: total,
                address: user.address
            }
            const data = await Order.create(reqObj);
            res.status(200).json({data:reqObj})
        } catch (e) {
            console.log(e, "error is here")
            return res.status(400).json({ error: "some error occured" });
        }
    }
};
export default connectToMongo(handler);