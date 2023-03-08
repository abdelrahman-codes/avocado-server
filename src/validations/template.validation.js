const Joi = require('joi');

const addTemplateValidation = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        nameAr: Joi.string().required(),
        country: Joi.string().required(),
    })
};


const updateTemplateValidation = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        nameAr: Joi.string().optional(),
    })
};





module.exports = {
    addTemplateValidation,
    updateTemplateValidation
}