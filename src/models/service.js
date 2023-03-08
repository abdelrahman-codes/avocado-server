const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
        },
        titleAr: {
            type: String,
            trim: true,
        },
        desc: { type: String, trim: true },
        descAr: { type: String, trim: true },
    },
    {
        timestamps: true
    }

);

const Service = mongoose.models.Service || mongoose.model('Service', serviceSchema);
module.exports = Service;
