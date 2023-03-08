const Joi = require('joi');

const addContactUsValidation = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        phone: Joi.string().required(),
        country: Joi.string().required(),
        email: Joi.string().optional(),
        content: Joi.string().optional(),
        service: Joi.string().optional(),
    })
};

module.exports = {
    addContactUsValidation,
}