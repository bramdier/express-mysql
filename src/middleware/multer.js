const multer = require('multer');
// const path = require('path');


const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        const timestamp = new Date().getTime();
        const filename = file.originalname;
        // const extension = path.extname(file.originalname);
        cb(null, `${timestamp}-${filename}`);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 3 * 1000 * 1000
    }
});

module.exports = upload;