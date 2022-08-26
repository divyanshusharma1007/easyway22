
const mongoose = require('mongoose');
import MONGO_URI from './dbsettings'

const connectToMongo = (handler) => async (req, res) => {
    console.log("genrating connection")
    if (mongoose.connections[0].readyState) {
        return handler(req, res);
    }
    const data=await mongoose.connect(MONGO_URI)
    console.log(data)
    return handler(req, res)
}
module.exports = connectToMongo;