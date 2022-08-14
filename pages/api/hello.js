// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToMongo from "../../database/connections"
const mongoose=require('mongoose')
const handler = (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}

export default connectToMongo(handler)