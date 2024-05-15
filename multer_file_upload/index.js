const express = require('express')
const multer = require('multer')

const app = express()
const router = express.Router()

app.use(express.static('public'))

const storage = multer.diskStorage({
    filename : (req, file, cb)=>{
        cb(null, file.originalname)
    },
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    }
})
const fileFilter = (req, file, cb) => {
    if(['image/jpeg', 'image/jpg', 'image/png'].indexOf(file.mimetype)!== -1){
        cb(null, true);
    } else {
        cb(new Error(file.mimetype + ' file type is not allowed'), false)
    }
}

const upload = multer({
    storage: storage,
    limits:{
        fileSize : 5 * 1024 * 1024
    },
    fileFilter: fileFilter
})
app.get('/',(req, res)=>{
    res.sendFile(__dirname +'/views/public.html')
})
require('./routes/files.routs')(app,router,upload)

app.listen(8000)

