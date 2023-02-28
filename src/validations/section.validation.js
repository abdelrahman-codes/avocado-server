const Joi = require('joi');

const addSectionValidation = {
    body: Joi.object().keys({
        title: Joi.string().required(),
        desc: Joi.string().required(),
        pic: Joi.string().required(),
    })
};


const updateSectionValidation = {
    body: Joi.object().keys({
        title: Joi.string().optional(),
        desc: Joi.string().optional(),
    })
};





module.exports = {
    addSectionValidation,
    updateSectionValidation
}