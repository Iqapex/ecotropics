const Joi = require('joi');

exports.validatePartner = (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        phone: Joi.string().required(),
        email: Joi.string().email().required(),
        companyName: Joi.string().required(),
        address: Joi.string().required(),
        partnershipType: Joi.string().required(),
        message: Joi.string().required(),
    });

    return schema.validate(data);
};
