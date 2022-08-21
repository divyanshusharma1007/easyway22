import connectToMongo from "../../../database/connections"
import models from '../../../database/models'
const handler = async (req, res) => {
    const { Products } = models();
}

export default connectToMongo(handler)  