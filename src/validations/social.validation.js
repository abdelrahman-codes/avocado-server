const Joi = require('joi');

const addSocialValidation = {
    body: Joi.object().keys({
        facebook: Joi.string().required(),
        instagram: Joi.string().required(),
        whatsapp: Joi.string().required(),
        linkedin: Joi.string().required(),
        phone: Joi.string().required(),
        location: Joi.string().required(),
        email: Joi.string().required(),
        pic: Joi.string().required(),
    })
};


const updateSocialValidation = {
    body: Joi.object().keys({
        facebook: Joi.string().optional(),
        instagram: Joi.string().optional(),
        whatsapp: Joi.string().optional(),
        linkedin: Joi.string().optional(),
        phone: Joi.string().optional(),
        location: Joi.string().optional(),
        email: Joi.string().optional(),
    })
};





module.exports = {
    addSocialValidation,
    updateSocialValidation
}