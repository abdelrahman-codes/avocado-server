const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
    {
        question: { type: String, trim: true, required: true, },
        questionAr: { type: String, trim: true, required: true, },
        type: { type: String, trim: true, required: true, default: "text" },
        section: { type: mongoose.Types.ObjectId, ref: "TemplateSection", required: true, },
        template: { type: mongoose.Types.ObjectId, ref: "Template", required: true, }
    },
    {
        timestamps: true
    }
);
const Question = mongoose.models.Question || mongoose.model('Question', questionSchema);
module.exports = Question;