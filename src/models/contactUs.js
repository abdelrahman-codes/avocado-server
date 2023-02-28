const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
    {
        name: { type: String, trim: true, required: true, },
        phone: { type: String, trim: true, required: true, },
        country: { type: String, trim: true, required: true, },
        email: { type: String, trim: true, required: true, },
        content: { type: String, trim: true, },
        service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', },
    },
    {
        timestamps: true
    }

);

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
module.exports = Contact;
