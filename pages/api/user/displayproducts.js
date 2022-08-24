import connectToMongo from "../../../database/connections"
import models from '../../../database/models'
import Joi from "joi"
const handler = async (req, res) => {
   const { Product } = models();
   try {
      const data = await Product.find({ active: true });
      res.status(200).json({ data: data })
   } catch (e) {
      console.log(e);
      res.status(400).json({ data:data })
   }
}
export default connectToMongo(handler)