const { Header } = require("../models")


const addHeader = async (req, res) => {
    try {
        const header = new Header(req.body);
        await header.save();
        res.status(200).json({ message: "saved successfully" })

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}
const getHeader = async (req, res) => {
    try {
        const header = await Header.find();
        res.status(200).json({ header: header[0] })

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}

const updateHeader = async (req, res) => {
    try {
        const { _id } = req.params;
        const header = await Header.findOneAndUpdate({ _id }, req.body);
        if (header) {
            res.status(200).json({ message: "Updated successfully" })
        }
        else {
            res.status(404).json({ error: "Not Found" })

        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}
const deleteHeader = async (req, res) => {
    try {
        const { _id } = req.params;
        const header = await Header.findOneAndRemove({ _id });
        if (header) {
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
    addHeader,
    getHeader,
    updateHeader,
    deleteHeader,
}