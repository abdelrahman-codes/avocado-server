const { Template } = require("../models")


const addTemplate = async (req, res) => {
    try {
        const template = new Template(req.body);
        await template.save();
        if (template) {
            const templates = await Template.find();
            res.status(200).json({ template: templates })
        } else {
            const templates = await Template.find();
            res.status(200).json({ template: templates })
        }

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}
const getTemplate = async (req, res) => {
    try {
        const template = await Template.find();
        res.status(200).json({ template })

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}

const getOneTemplate = async (req, res) => {
    try {
        const { _id } = req.params;
        const template = await Template.findOne({ _id });
        if (template)
            res.status(200).json({ template })
        else
            res.status(404).json({ message: "Not Found" })

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}

const updateTemplate = async (req, res) => {
    try {
        const { _id } = req.params;
        const template = await Template.findOneAndUpdate({ _id }, req.body);
        if (template) {
            res.status(200).json({ message: "Updated successfully" })
        }
        else {
            res.status(404).json({ error: "Not Found" })

        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}
const deleteTemplate = async (req, res) => {
    try {
        const { _id } = req.params;
        const template = await Template.findOneAndRemove({ _id });
        if (template) {
            const templates = await Template.find();
            res.status(200).json({ template: templates })
        }
        else {
            const templates = await Template.find();
            res.status(200).json({ template: templates })
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}

module.exports = {
    addTemplate,
    getTemplate,
    updateTemplate,
    deleteTemplate,
    getOneTemplate,
}