const Joi = require('joi');

const addSectionValidation = {
    body: Joi.object().keys({
        title: Joi.string().required(),
        titleAr: Joi.string().required(),
        template: Joi.string().required(),
    })
};


const updateSectionValidation = {
    body: Joi.object().keys({
        title: Joi.string().optional(),
        titleAr: Joi.string().optional(),
    })
};





module.exports = {
    addSectionValidation,
    updateSectionValidation
}