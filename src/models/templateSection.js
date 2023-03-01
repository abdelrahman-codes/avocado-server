const mongoose = require("mongoose");

const templateSectionSchema = new mongoose.Schema(
    {
        title: { type: String, trim: true, required: true, },
        template: { type: mongoose.Types.ObjectId, ref: "Template", required: true, },
    },
    {
        timestamps: true
    }

);

const TemplateSection = mongoose.models.TemplateSection || mongoose.model('TemplateSection', templateSectionSchema);
module.exports = TemplateSection;
