const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename(req, file, cb) {
        const ext = path.extname(file.originalname);
        cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    }
})


const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (
            file.mimetype == 'image/png' ||
            file.mimetype == 'image/jpg'
        ) {
            cb(null, true)
        } else {
            console.log('only jpg & png file supported');
            cb(null, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 5
    }
});

module.exports = upload;