const Joi = require('joi');

const addHeaderValidation = {
    body: Joi.object().keys({
        youtubeId: Joi.string().required(),
        slogan: Joi.string().required(),
    })
};


const updateHeaderValidation = {
    body: Joi.object().keys({
        youtubeId: Joi.string().optional(),
        slogan: Joi.string().optional(),
    })
};





module.exports = {
    addHeaderValidation,
    updateHeaderValidation
}