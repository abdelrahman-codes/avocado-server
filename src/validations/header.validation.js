const Joi = require('joi');

const addHeaderValidation = {
    body: Joi.object().keys({
        youtubeId: Joi.string().required(),
        slogan: Joi.string().required(),
        sloganAr: Joi.string().optional(),
    })
};


const updateHeaderValidation = {
    body: Joi.object().keys({
        youtubeId: Joi.string().optional(),
        slogan: Joi.string().optional(),
        sloganAr: Joi.string().optional(),
    })
};





module.exports = {
    addHeaderValidation,
    updateHeaderValidation
}