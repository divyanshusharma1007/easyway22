import connectToMongo from "../../../database/connections"
import models from '../../../database/models'
const handler = async (req, res) => {
  console.log("Running")
  const { Orders } = models();

  res.status(200).json({ name: 'John Doe', data: await User.find() })
}

export default connectToMongo(handler)