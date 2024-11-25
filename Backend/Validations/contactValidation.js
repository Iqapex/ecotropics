const Joi = require('joi');

exports.validateContact = (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        number: Joi.number().required(),
        address: Joi.string().required(),
        message: Joi.string().required(),
    });

    return schema.validate(data);
};
