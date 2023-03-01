const Joi = require('joi');

const addSectionValidation = {
    body: Joi.object().keys({
        title: Joi.string().required(),
        template: Joi.string().required(),
    })
};


const updateSectionValidation = {
    body: Joi.object().keys({
        title: Joi.string().required(),
    })
};





module.exports = {
    addSectionValidation,
    updateSectionValidation
}