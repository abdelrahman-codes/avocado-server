const { Section } = require("../models");
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
        cb(null, "./public/section");
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
    fs.unlink("./public/section/" + photo, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
}

const addSection = async (req, res) => {
    try {
        const section = new Section(req.body);
        await section.save();

        if (section) {
            const sections = await Section.find({});
            res.status(200).json({ section: sections })
        } else {
            const sections = await section.find();
            res.status(200).json({ section: sections })
        }

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}

const getSections = async (req, res) => {
    try {
        const section = await Section.find();
        res.status(200).json({ section })

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }

}

const updateSection = async (req, res) => {
    try {
        const { _id } = req.params;
        const section = await Section.findOneAndUpdate({ _id }, req.body);
        if (section)
            res.status(200).json({ message: "updated successfully" })
        else
            res.status(404).json({ error: "Not Found" })
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}

const deleteSection = async (req, res) => {
    try {
        const { _id } = req.params;
        const section = await Section.findOneAndRemove({ _id });
        if (section) {
            deletePhoto(section.pic)
            const sections = await Section.find({});
            res.status(200).json({ section: sections })
        }
        else {
            const sections = await Section.find({});
            res.status(200).json({ section: sections })
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}


module.exports = {
    addSection,
    uploadPic,
    getSections,
    updateSection,
    deleteSection,
}