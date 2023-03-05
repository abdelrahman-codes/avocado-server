const mongoose = require("mongoose");

const socialSchema = new mongoose.Schema(
    {
        facebook: { type: String, trim: true },
        instagram: { type: String, trim: true },
        phone: { type: String, trim: true },
        whatsapp: { type: String, trim: true },
        linkedin: { type: String, trim: true },
        email: { type: String, trim: true },
        phone: { type: String, trim: true },
        location: { type: String, trim: true },
        pic: { type: String, trim: true },
    },
    {
        timestamps: true
    }

);

const Social = mongoose.models.Social || mongoose.model('Social', socialSchema);
module.exports = Social;
