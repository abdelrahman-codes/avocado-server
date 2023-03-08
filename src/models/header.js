const mongoose = require("mongoose");

const headerSchema = new mongoose.Schema(
    {
        youtubeId: { type: String, trim: true, },
        slogan: { type: String, trim: true, },
        sloganAr: { type: String, trim: true, },
    },
    {
        timestamps: true
    }

);

const Header = mongoose.models.Header || mongoose.model('Header', headerSchema);
module.exports = Header;
