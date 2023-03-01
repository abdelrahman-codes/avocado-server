const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema(
    {
        name: { type: String, trim: true, required: true, },
        country: { type: String, trim: true, required: true, index: true, },
    },
    {
        timestamps: true
    }

);

const Template = mongoose.models.Template || mongoose.model('Template', templateSchema);
module.exports = Template;
