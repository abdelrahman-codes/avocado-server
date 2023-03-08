const Joi = require('joi');

const addServiceValidation = {
    body: Joi.object().keys({
        title: Joi.string().required(),
        titleAr: Joi.string().required(),
        desc: Joi.string().required(),
        descAr: Joi.string().required(),
    })
};


const updateServiceValidation = {
    body: Joi.object().keys({
        title: Joi.string().optional(),
        titleAr: Joi.string().optional(),
        desc: Joi.string().optional(),
        descAr: Joi.string().optional(),
    })
};





module.exports = {
    addServiceValidation,
    updateServiceValidation
}