const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema(
    {
        pic: { type: String, trim: true, required: true, },
        title: { type: String, trim: true, required: true, },
        titleAr: { type: String, trim: true, required: true, },
        desc: { type: String, trim: true, required: true, },
        descAr: { type: String, trim: true, required: true, },
    },
    {
        timestamps: true
    }

);

const Section = mongoose.models.Section || mongoose.model('Section', sectionSchema);
module.exports = Section;
