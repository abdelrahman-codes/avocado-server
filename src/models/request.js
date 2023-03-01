const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
    {
        name: { type: String, trim: true, default: "not mentioned" },
        companyName: { type: String, trim: true, default: "not mentioned" },
        country: { type: String, trim: true, required: true, index: true, },
        companyType: { type: String, trim: true, required: true, },
        details: [{
            question: { type: String, trim: true },
            answer: { type: String, trim: true },
            _id: false,
        }],
        files: { type: Array, default: [], },
    },
    {
        timestamps: true
    }

);

const Request = mongoose.models.Request || mongoose.model('Request', requestSchema);
module.exports = Request;
