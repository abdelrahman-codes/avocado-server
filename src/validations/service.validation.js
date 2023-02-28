const Joi = require('joi');

const addServiceValidation = {
    body: Joi.object().keys({
        title: Joi.string().required(),
        desc: Joi.string().required(),
    })
};


const updateServiceValidation = {
    body: Joi.object().keys({
        title: Joi.string().optional(),
        desc: Joi.string().optional(),
    })
};





module.exports = {
    addServiceValidation,
    updateServiceValidation
}