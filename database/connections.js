
const mongoose = require('mongoose');
import MONGO_URI from './dbsettings'

const connectToMongo = (handler) => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res);
    }
    const data=await mongoose.connect(MONGO_URI)
    return handler(req, res)
}
module.exports = connectToMongo;