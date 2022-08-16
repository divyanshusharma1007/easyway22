import connectToMongo from "../../../database/connections"
import models from '../../../database/models'
const mongoose = require('mongoose')
const handler = async (req, res) => {
  console.log("Running")
  const { User } = models();

  res.status(200).json({ name: 'John Doe', data: await User.find() })
}

export default connectToMongo(handler)