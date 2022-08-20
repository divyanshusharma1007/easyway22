import fs from 'fs'
const handler = async (req, res) => {
    const data =  fs.readdirSync('./public/products',(err,files)=>{
        if(err){
            res.status(400).json("error occured");
        }
        return files;

    })
    console.log(data,"data");
    res.status(200).json({ files:data })
}

export default handler