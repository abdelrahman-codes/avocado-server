const { TemplateSection } = require("../models")


const addTemplateSection = async (req, res) => {
    try {
        const templateSection = new TemplateSection(req.body);
        await templateSection.save();
        if (templateSection) {
            const sections = await TemplateSection.find({ template: templateSection.template });
            res.status(200).json({ templateSection: sections })
        } else {
            const sections = await TemplateSection.find({ template: templateSection.template });
            res.status(200).json({ templateSection: sections })
        }

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}
const getTemplateSection = async (req, res) => {
    try {
        const { template } = req.params;
        const templateSection = await TemplateSection.find({ template });
        res.status(200).json({ templateSection })

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}

const updateTemplateSection = async (req, res) => {
    try {
        const { _id } = req.params;
        const templateSection = await TemplateSection.findOneAndUpdate({ _id }, req.body);
        if (templateSection) {
            res.status(200).json({ message: "Updated successfully" })
        }
        else {
            res.status(404).json({ error: "Not Found" })

        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}
const deleteTemplateSection = async (req, res) => {
    try {
        const { _id } = req.params;
        const templateSection = await TemplateSection.findOneAndRemove({ _id });
        if (templateSection) {
            const sections = await TemplateSection.find({ template: templateSection.template });
            res.status(200).json({ templateSection: sections })
        } else {
            const sections = await TemplateSection.find({ template: templateSection.template });
            res.status(200).json({ templateSection: sections })
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}

module.exports = {
    addTemplateSection,
    getTemplateSection,
    updateTemplateSection,
    deleteTemplateSection,
}