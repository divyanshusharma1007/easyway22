const jwt = require('jsonwebtoken')
import { jwt_secrete_key } from '../database/dbsettings'
const fs = require('fs')
const fetchuser = (req, res) => {
    const token = req.headers["auth-token"];
    if (!token) {
        res.status(400).send({ status: false, error: "please authenicate with valid token" })
        return false;
    }
    try {
        const data = jwt.verify(token, jwt_secrete_key);
        return data;
    } catch (error) {
        console.log(error)
        res
            .status(401)
            .send({ error: "please authenticate using a valid token" });
        return false;
    }
}
export default fetchuser;