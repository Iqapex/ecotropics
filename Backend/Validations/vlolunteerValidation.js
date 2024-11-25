const joi = require('joi');

exports.validateJoinUs = (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        phone: Joi.number().required(),
        email: Joi.string().email().required(),
        address: Joi.string().required(),
        skills: Joi.string().required(),
        availability: Joi.string().required(),
        message: Joi.string().required(),
    });

    return schema.validate(data);
};