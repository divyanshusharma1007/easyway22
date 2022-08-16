import connectToMongo from "../../../database/connections"
import models from '../../../database/models'
import joi from "joi";
import bcrypt from 'bcryptjs'
import { jwt_secrete_key } from "../../../database/dbsettings";
import jwt from 'jsonwebtoken'
const handler = async (req, res) => {
  const { User } = models();
  const schema = joi.object({
    email: joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
    password: joi.string(),
  })
  const requestObj = {
    email: req.body.email,
    password: req.body.password
  }
  const errors = schema.validate(requestObj);
  console.log(errors, "errors in the login ")
  if (errors?.details?.length > 0) {
    return res
      .status(400)
      .json({ status: false, errors: errors });
  } else {

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({ "errors": "invalid credencials" })
    }
    console.log(req.body.password,"allowed passowrd")
    console.log(user,"user from backend")
    if (await bcrypt.compare(req.body.password, user.password)) {
      const data = {
        user: {
          id: user.id,
        },
      };
      return res.status(200).json({ authtoken: await jwt.sign(data, jwt_secrete_key) })
    } else {
      return res.status(400).json({ "errors": "invalid credencials" })
    }
  }
}

export default connectToMongo(handler)