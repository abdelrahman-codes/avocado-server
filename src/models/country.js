const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
    {
        name: { type: String, trim: true, required: true, unique: true },
        pic: { type: String, trim: true, required: true, },
    },
    {
        timestamps: true
    }

);

const Country = mongoose.models.Country || mongoose.model('Country', countrySchema);
module.exports = Country;
