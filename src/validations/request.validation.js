const Joi = require('joi');

const addRequestValidation = {
    body: Joi.object().keys({
        name: Joi.string().optional(),
        companyName: Joi.string().optional(),
        country: Joi.string().required(),
        companyType: Joi.string().required(),
        details: Joi.array().optional(),
        files: Joi.array().optional(),
    })
};






module.exports = {
    addRequestValidation,
}