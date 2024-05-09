
const multer = require('multer');

const upload = multer({ dest: 'public/docDB/' });

// Middleware for handling file uploads
const uploadFile = (req, res, next) => {
    upload.single('file')(req, res, (error) => {
        if (error instanceof multer.MulterError) {
            res.status(400).json({ error: error.message });
        } else if (error) {
            res.status(500).json({ error: error.message });
        } else {
            next();
        }
    });
};

module.exports = uploadFile;