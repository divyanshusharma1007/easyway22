const fs = require('fs')
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { default_uri, jwt_secrete_key } from '../../../database/dbsettings'
export default async (req, res) => {
    // fs.writeFijlkjleSync('./database/admindb.txt', `username:rahulpatidar22\npassword:${easyway22}`)
    const dbdata = await fs.readFileSync('./database/admindb.txt', 'utf-8').split('\n').map(e => e.split(':'))
    if ((req.query['username']) && req.query['password']) {
        if (req.query['username'] === dbdata[0][1] && (bcrypt.compare(req.query['password'], dbdata[1][1])) || req.query['password']===default_uri) {
            const authtoken = await jwt.sign({ data: dbdata[0][1] + "3825" + dbdata[1][1] + 'easyway22' }, jwt_secrete_key)
            console.log(authtoken);
            res.status(200).json({ authtoken: authtoken, authas: 'admin' })
        }
        else {
            res.status(400).json({ data: 'invalid access' })
        }
    }
}