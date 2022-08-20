const jwt = require('jsonwebtoken')
import { jwt_secrete_key } from '../database/dbsettings'
const fs = require('fs')
const fetchadmin = (req, res) => {
    const dbdata = fs.readFileSync('./database/admindb.txt', 'utf-8').split('\n').map(e => e.split(':'))
    console.log(dbdata)
    const token = req.headers["auth-token"];
    if (!token) {
        res.status(400).send({ status: false, error: "please authenicate with valid token" })
        return false;
    }
    try {
        const data = jwt.verify(token, jwt_secrete_key);
        return data.data.split('3825')[0] == dbdata[0][1];
    } catch (error) {
        console.log(error)
        res
            .status(401)
            .send({ error: "please authenticate using a valid token" });
        return false;
    }
}
export default fetchadmin;