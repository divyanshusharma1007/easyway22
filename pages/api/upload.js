import nextConnect from 'next-connect';
import multer from 'multer';

const upload = multer({
    storage: multer.diskStorage({
        destination: './',
        filename: (req, file, cb) => {
            console.log(file);
            cb(null, file.originalname)
        },
    }),
});

const apiRoute = nextConnect({
    onError(error, req, res) {
        console.log(req)
        console.log(error)
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});

apiRoute.use(upload.single('image'));

apiRoute.post((req, res) => {
    console.log(req)
    res.status(200).json({ data: req });
});

export default apiRoute;

