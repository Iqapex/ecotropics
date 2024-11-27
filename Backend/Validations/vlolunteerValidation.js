const joi = require('joi');

exports.validateVolunteer = (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        phone: Joi.number().required(),
        email: Joi.string().email().required(),
        address: Joi.string(),
        skills: Joi.string().required(),
        availability: Joi.string().required(),
        message: Joi.string().required(),
    });

    return schema.validate(data);
};