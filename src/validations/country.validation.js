const Joi = require('joi');

const addCountryValidation = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        pic: Joi.string().required(),
    })
};

module.exports = {
    addCountryValidation,
}