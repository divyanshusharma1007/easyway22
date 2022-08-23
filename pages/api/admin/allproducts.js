import connectToMongo from "../../../database/connections"
import models from '../../../database/models'
import fetchadmin from '../../../helpers/fetchadmin';
const handler = async (req, res) => {
    // if(!fetchadmin(req,res)){
        console.log("running")
        const { Product } = models();
        try {
            const data = await Product.find();
            res.status(200).json({ data: data });
        } catch (e) {
            console.log(e);
            res.status(400).json({ error: "some error occured" })
        }
    // }
}

export default connectToMongo(handler)  