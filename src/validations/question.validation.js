const Joi = require('joi');

const addQuestionValidation = {
    body: Joi.object().keys({
        question: Joi.string().required(),
        questionAr: Joi.string().required(),
        type: Joi.string().required(),
        section: Joi.string().required(),
        template: Joi.string().required(),
    })
};


const updateQuestionValidation = {
    body: Joi.object().keys({
        question: Joi.string().optional(),
        questionAr: Joi.string().optional(),
        type: Joi.string().optional(),
    })
};





module.exports = {
    addQuestionValidation,
    updateQuestionValidation
}