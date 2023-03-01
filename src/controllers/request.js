const { Request } = require("../models");
const { v4: uuidv4 } = require('uuid')
const multer = require('multer')
const fs = require("fs");
const path = require("path");

// Check File Type
function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif|pdf|docx|doc|ppt|xlsx/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error("Only images & pdfs are allowed"));
    }
}

const storage = multer.diskStorage({
    //multers disk storage settings
    destination: (req, file, cb) => {
        cb(null, "./public/request");
    },
    filename: (req, file, cb) => {
        let ext = file.mimetype.split("/")[1];
        if (file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') { ext = "docx"; }
        else if (file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') { ext = "xlsx"; }
        else if (file.mimetype === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') { ext = "pptx"; }
        cb(null, uuidv4() + "." + ext);
    }
});

const upload = multer({
    //multer settings
    storage: storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    },
    limits: {
        fileSize: 10485760 //10 MB
    }
}).array("files");

const uploadFiles = async (req, res, next) => {
    upload(req, res, (err) => {
        if (err) return res.status(400).json({ message: err.message });
        if (req.files)
            req.body.files = req.files.map((file) => { return file.filename });
        next();
    });
};

function deletefiles(file) {
    fs.unlink("./public/request/" + file, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
}

const addRequest = async (req, res) => {
    try {
        const request = new Request(req.body);
        await request.save();
        res.status(200).json({ message: "saved successfully" })

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}

const getRequests = async (req, res) => {
    try {
        const request = await Request.find();
        res.status(200).json({ request })

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }

}


const deleteRequest = async (req, res) => {
    try {
        const { _id } = req.params;
        const request = await Request.findOneAndRemove({ _id });
        if (request) {
            request.files.forEach(element => {
                deletefiles(element)
            });
            res.status(200).json({ message: "Deleted" })
        }
        else {
            res.status(404).json({ error: "Not Found" })
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}


module.exports = {
    addRequest,
    uploadFiles,
    getRequests,
    deleteRequest,
}