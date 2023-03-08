const Joi = require('joi');

const addSectionValidation = {
    body: Joi.object().keys({
        title: Joi.string().required(),
        titleAr: Joi.string().required(),
        desc: Joi.string().required(),
        descAr: Joi.string().required(),
        pic: Joi.string().required(),
    })
};


const updateSectionValidation = {
    body: Joi.object().keys({
        title: Joi.string().optional(),
        titleAr: Joi.string().optional(),
        descAr: Joi.string().optional(),
        desc: Joi.string().optional(),
    })
};





module.exports = {
    addSectionValidation,
    updateSectionValidation
}