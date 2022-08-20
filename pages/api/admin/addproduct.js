import connectToMongo from "../../../database/connections"
import models from '../../../database/models'
import fetchadmin from '../../../helpers/fetchadmin'
import Joi from "joi"
const handler = async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        price: Joi.required(),
        discount: Joi.required(),
    })
    if (fetchadmin(req, res)) {
        const reqObj = {
            name: req.body.name,
            price: req.body.price,
            img: req.body.img,
            discount: req.body.discount,
        }
        const errors = schema.validate(reqObj);
        if (errors?.details?.length > 0) {
            return res
                .status(400)
                .json({ status: false, errors: errors });
        }
        const { Product } = models();
        try {
            const newProduct = await Product.create(reqObj);
            return res.status(200).json({ status:true,data:newProduct})
        } catch (err) {
            console.log(err);
            res.status(501).json({ error: "some internal server error occured" });
        }



    }
    else {
        res.status(400).json({ error: "you are not authorised admin" })
    }
}
export default connectToMongo(handler)