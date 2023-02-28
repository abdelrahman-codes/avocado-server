const { Social } = require("../models")
const { v4: uuidv4 } = require('uuid')
const multer = require('multer')
const fs = require("fs");
const path = require("path");

// Check File Type
function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error("Only images are allowed"));
    }
}

const storage = multer.diskStorage({
    //multers disk storage settings
    destination: (req, file, cb) => {
        cb(null, "./public/location");
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
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
}).single("pic");

const uploadPic = (req, res, next) => {
    upload(req, res, err => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }

        if (!req.file) {
            return res.status(400).json({ message: "Please upload a file" });
        }

        req.body.pic = req.file.filename;

        next();
    });
};

function deletePhoto(photo) {
    fs.unlink("./public/location/" + photo, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
}


const addSocial = async (req, res) => {
    try {
        const social = new Social(req.body);
        await social.save();
        res.status(200).json({ message: "saved successfully" })

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
        console.log(error)
    }
}
const getSocial = async (req, res) => {
    try {
        const social = await Social.find();
        res.status(200).json({ Social: social[0] })

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}

const updateSocial = async (req, res) => {
    try {
        const { _id } = req.params;
        const social = await Social.findOneAndUpdate({ _id }, req.body);
        if (social) {
            res.status(200).json({ message: "Updated successfully" })
        }
        else {
            res.status(404).json({ error: "Not Found" })

        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}
const updateSocialPic = async (req, res) => {
    try {
        const { _id } = req.params;
        const { pic } = req.body;
        const social = await Social.findOneAndUpdate({ _id }, { pic });
        if (social) {
            deletePhoto(social.pic)
            res.status(200).json({ message: "updated successfuly" })
        }
        else {
            res.status(404).json({ error: "Not Found" })
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}
const deleteSocial = async (req, res) => {
    try {
        const { _id } = req.params;
        const social = await Social.findOneAndRemove({ _id });
        if (social) {
            deletePhoto(social.pic)
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
    addSocial,
    uploadPic,
    getSocial,
    updateSocial,
    updateSocialPic,
    deleteSocial,
}