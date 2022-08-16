import connectToMongo from "../../../database/connections"
import models from '../../../database/models'
import { jwt_secrete_key } from "../../../database/dbsettings";
const joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const handler = async (req, res) => {
    console.log(req, "pringin the request herer")
    const schema = joi.object({
        username: joi.string().max(20).min(5).required(),
        password: joi.string(),
        email: joi
            .string()
            .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
        contactnumber: joi.string().max(10).min(10),
        address: joi.string().required()
    });
    let requestObj = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        contactnumber: String(req.body.contactnumber),
        address: req.body.address
    };

    console.log(requestObj, "request")
    const errors = schema.validate(requestObj);
    console.log(errors)
    if (errors?.details?.length > 0) {
        return res
            .status(400)
            .json({ status: false, errors:errors });
    } else {
        const { User } = models()
        // checking that the data
        let user = await User.findOne({
            $or: [
                { email: req.body.email },
            ],
        });
        if (user) {
            return res
                .status(400)
                .json({ status: false, error: "user with this email already exists" });
        } else {
            try {
                const salt = await bcrypt.genSalt(12);
                const secondrypassword = await bcrypt.hash(req.body.password, salt);
                requestObj.password = secondrypassword;
                const user = await User.create(requestObj);
                const data = {
                    user: {
                        id: user.id,
                    },
                };
                const authtoken = jwt.sign(data, jwt_secrete_key);
                res.status(200).json({ status: true, authtoken: authtoken });
            } catch (err) {
                console.log(err)
                res.status(200).json({ status: false, error:err });
            }
        }
    }
};
export default connectToMongo(handler);
