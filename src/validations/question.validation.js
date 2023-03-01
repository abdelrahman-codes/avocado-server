const Joi = require('joi');

const addQuestionValidation = {
    body: Joi.object().keys({
        question: Joi.string().required(),
        type: Joi.string().required(),
        section: Joi.string().required(),
    })
};


const updateQuestionValidation = {
    body: Joi.object().keys({
        question: Joi.string().optional(),
        type: Joi.string().optional(),
    })
};





module.exports = {
    addQuestionValidation,
    updateQuestionValidation
}