const { Contact } = require("../models")


const addContactUs = async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(200).json({ message: "saved successfully" })

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}
const getContactUs = async (req, res) => {
    try {
        const contact = await Contact.find().populate("service");
        res.status(200).json({ contact })

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}


const deleteContactUs = async (req, res) => {
    try {
        const { _id } = req.params;
        const contact = await Contact.findOneAndRemove({ _id });
        if (contact) {
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
    addContactUs,
    getContactUs,
    deleteContactUs,
}