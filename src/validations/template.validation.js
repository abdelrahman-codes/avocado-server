const Joi = require('joi');

const addTemplateValidation = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        country: Joi.string().required(),
    })
};


const updateTemplateValidation = {
    body: Joi.object().keys({
        name: Joi.string().required(),
    })
};





module.exports = {
    addTemplateValidation,
    updateTemplateValidation
}