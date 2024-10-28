const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().min(3).required(),
        description: Joi.string().min(10).required(),
        image: Joi.object({
            url: Joi.string().allow("", null)
        }),
        price: Joi.number().min(0).required(),
        location: Joi.string().min(3).required(),
        country: Joi.string().min(3).required()
    }).required(),
});
