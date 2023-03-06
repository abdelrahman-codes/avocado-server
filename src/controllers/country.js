const { Country } = require("../models");
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
        cb(null, "./public/country");
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
    fs.unlink("./public/country/" + photo, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
}

const addCountry = async (req, res) => {
    try {
        const country = new Country(req.body);
        await country.save();
        if (country) {
            const countrys = await Country.find();
            res.status(200).json({ country: countrys })
        } else {
            const countrys = await Country.find();
            res.status(200).json({ country: countrys })
        }

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}

const getCountrys = async (req, res) => {
    try {
        const countrys = await Country.find();
        res.status(200).json({ countrys })

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }

}

const deleteCountry = async (req, res) => {
    try {
        const { _id } = req.params;
        const country = await Country.findOneAndRemove({ _id });
        if (country) {
            deletePhoto(country.pic)
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
    addCountry,
    uploadPic,
    getCountrys,
    deleteCountry,
}